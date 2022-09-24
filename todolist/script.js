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
      <span id="todo">${title}</span>
      <label for="todo" style="display: none">${title}</label>
      <div class="todo-buttons">
        <button class="todo-edit-button">수정</button>
        <button class="todo-delete-button">삭제</button>
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

  const init = () => {
    window.addEventListener('DOMContentLoaded', getTodos);
    $todoForm.addEventListener('submit', addTodo);
    $todosContainer.addEventListener('click', deleteTodo);
  };

  init();
})();
