(function () {
  'use strict';

  const get = (target) => {
    return document.querySelector(target);
  };

  const $todolist = get('.todos');
  const $todoForm = get('.todo-form');
  const $todosContainer = get('.todos');

  const createTodoElement = (todo) => {
    const { id, title } = todo;
    const checked = todo.completed ? 'checked' : '';
    const $todoItem = document.createElement('div');
    $todoItem.dataset.id = id;
    $todoItem.classList.add('todo');
    $todoItem.innerHTML = `
      <input type="checkbox" id="checkbox" ${checked} />
      <input id="todo-input" >
      <label class="${checked}" id="todo-label" for="todo" >${title}</label>
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

  const changeModifyMode = (e) => {
    const $todo = e.target.closest('.todo');
    const $todoInput = $todo.querySelector('#todo-input');
    const $todoLabel = $todo.querySelector('label');

    const todoValue = $todoLabel.innerText;

    const $todoButtons = $todo.querySelector('.todo-buttons');
    const $modifyButtons = $todo.querySelector('.modify-buttons');

    if (e.target.className === 'todo-edit-button') {
      $todoButtons.style.display = 'none';
      $modifyButtons.style.display = 'block';
      $todoLabel.style.display = 'none';
      $todoInput.style.display = 'block';

      $todoInput.value = '';
      $todoInput.focus();
      $todoInput.value = todoValue;
    }

    if (e.target.className === 'todo-cancel-button') {
      // 취소 버튼 누르면
      $todoButtons.style.display = 'block';
      $modifyButtons.style.display = 'none';
      $todoLabel.style.display = 'block';
      $todoInput.style.display = 'none';
    }
  };

  const modifyTodo = (e) => {
    // 수정 확인 버튼 누르면

    if (e.target.className === 'todo-ok-button') {
      const $todo = e.target.closest('.todo');
      const $todoInput = $todo.querySelector('#todo-input');
      const id = $todo.dataset.id;
      const title = $todoInput.value;

      fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title }),
      })
        .then((response) => {
          response.json();
        })
        .then(() => {
          getTodos();
        })
        .catch((error) => {
          console.error(error);
        });
    } else return;
  };

  const clickCheckbox = (e) => {
    if (e.target.id !== 'checkbox') return;
    const completed = e.target.checked;
    const $todo = e.target.closest('.todo');
    const id = $todo.dataset.id;

    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ completed }),
    })
      .then((response) => response.json())
      .then(() => getTodos())
      .catch((error) => console.error(error));
  };

  const init = () => {
    window.addEventListener('DOMContentLoaded', getTodos);
    $todoForm.addEventListener('submit', addTodo);
    $todosContainer.addEventListener('click', deleteTodo);
    $todosContainer.addEventListener('click', modifyTodo);
    $todosContainer.addEventListener('click', changeModifyMode);
    $todosContainer.addEventListener('click', clickCheckbox);
  };

  init();
})();
