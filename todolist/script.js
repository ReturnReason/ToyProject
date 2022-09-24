(function () {
  'use strict';

  const get = (target) => {
    return document.querySelector(target);
  };

  const $todolist = get('.todos');
  const $todoForm = get('.todo-form');
  const $todosContainer = get('.todos');

  const createTodoElement = (todo) => {
    const { id, title, completed } = todo;
    const $todoItem = document.createElement('div');
    $todoItem.dataset.id = id;
    $todoItem.classList.add('todo');
    $todoItem.innerHTML = `
      <input type="checkbox" id="checkbox" />
      <input id="todo-input" value=${title}>
      <label id="todo-label" for="todo" >${title}</label>
      <div class="todo-buttons">
        <button class="todo-edit-button">수정</button>
        <button class="todo-delete-button">삭제</button>
      </div>
      <div class="modify-buttons">
        <button class="todo-ok-button">확인</button>
        <button class="todo-cancel-button">취소</button>
      </div>
  `;

    // 투두 엘리먼트 동적 생성
    return $todoItem;
  };

  const API_URL = `http://localhost:3000/todos`;

  const renderTodos = (todo) => {
    todo.forEach((item) => {
      const todoElement = createTodoElement(item);
      $todolist.appendChild(todoElement);
    });
  };

  const getTodos = () => {
    const $formInput = $todoForm.querySelector('input');
    $formInput.value = '';
    $formInput.focus();
    $todolist.innerHTML = '';

    fetch(API_URL)
      .then((response) => response.json())
      .then((todo) => {
        renderTodos(todo);
      })
      .catch((error) => console.error(error));
  };

  const addTodo = (e) => {
    e.preventDefault();

    const $input = $todoForm.querySelector('input[type="text"]');
    const todoValue = $input.value;
    const todo = {
      completed: false,
      title: todoValue,
    };

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then(() => {
        getTodos();
      })
      .catch((error) => console.error(error));
  };

  const deleteTodo = (e) => {
    if (e.target.className !== 'todo-delete-button') return;
    const $removeTarget = e.target.closest('.todo');
    const id = $removeTarget.dataset.id;

    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        response.json();
      })
      .then(() => {
        getTodos();
      })
      .catch((error) => console.error(error));
  };

  const modifyTodo = (e) => {
    const $todo = e.target.closest('.todo');
    const $todoInput = $todo.querySelector('#todo-input');
    const $todoLabel = $todo.querySelector('label');
    const todoValue = $todoInput.value;
    const id = $todo.dataset.id;

    const $todoButtons = $todo.querySelector('.todo-buttons');
    const $modifyButtons = $todo.querySelector('.modify-buttons');

    if (e.target.className === 'todo-edit-button') {
      // 수정 버튼을 누르면 기존 수정, 삭제 버튼 안보이게 하고
      // 확인, 취소 버튼 보이게 만들기.
      // 확인 버튼 누르면 fetch로 값 업데이트시키기

      $todoButtons.style.display = 'none';
      $modifyButtons.style.display = 'block';
      $todoLabel.style.display = 'none';
      $todoInput.style.display = 'block';

      $todoInput.value = '';
      $todoInput.focus();
      $todoInput.value = todoValue;
    }

    if (e.target.className === 'todo-ok-button') {
      // 수정 확인 버튼 누르면
    }

    if (e.target.className === 'todo-cancel-button') {
      console.log('ㅇ');
      // 취소 버튼 누르면
      $todoButtons.style.display = 'block';
      $modifyButtons.style.display = 'none';
      $todoLabel.style.display = 'block';
      $todoInput.style.display = 'none';
    }
  };

  const init = () => {
    window.addEventListener('DOMContentLoaded', getTodos);
    $todoForm.addEventListener('submit', addTodo);
    $todosContainer.addEventListener('click', deleteTodo);
    $todosContainer.addEventListener('click', modifyTodo);
  };

  init();
})();
