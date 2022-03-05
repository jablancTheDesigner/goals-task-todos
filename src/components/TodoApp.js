import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { nanoid } from "nanoid";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const headerText = `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;
  const taskList = tasks.length > 0 ? renderTasks() : noTasks();

  function renderTasks() {
    const list = tasks
      .sort((a, b) => {
        return b.created - a.created;
      })
      .map((task) => {
        return (
          <Todo
            name={task.name}
            key={task.id}
            id={task.id}
            toggleCompleted={toggleCompleted}
            editTask={editTask}
            deleteTask={deleteTask}
            completed={task.completed}
          />
        );
      });
    return list;
  }

  function noTasks() {
    return (
      <h1 className="text-4xl bold fixed left-0 right-0 inset-y-2/4 -translate-y-2/4 text-lime-800 text-center">
        No Tasks
      </h1>
    );
  }

  function addTask(name) {
    const newTask = {
      id: "task_" + nanoid(),
      name: name,
      completed: false,
      created: Date.now(),
    };
    storeTask([...tasks, newTask]);
  }

  function toggleCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    storeTask(updatedTasks);
  }

  function deleteTask(id) {
    const remaingTasks = tasks.filter((task) => task.id !== id);
    storeTask(remaingTasks);
  }

  function editTask(id, newName) {
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName };
      }
      return task;
    });
    storeTask(editedTasks);
  }

  function storeTask(data) {
    setTasks(data);
    localStorage.setItem("todos", JSON.stringify(data));
  }

  function getStoredTasks() {
    const reference = localStorage.getItem("todos");
    let storedTodos = [];
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      storedTodos = JSON.parse(reference);
    }
    setTasks(storedTodos);
  }

  useEffect(() => {
    getStoredTasks();
  }, []);

  return (
    <div className="todo-app flex flex-col">
      <div className="todo-app__header p-4 text-center bg-lime-800/[0.8]">
        <div className="container mx-auto">
          <h1 className="todo-app__title text-5xl font-bold text-white">
            <em>my</em>Todos
          </h1>
          <p className="todo-app__sub-title text-white text-md">
            Made by Jahmal &amp; Built in React
          </p>
        </div>
      </div>

      <div className="todo-app__task-list p-4 md:w-5/6 grow overflow-y-auto md:mx-auto">
        <div className="container mx-auto">{taskList}</div>
      </div>

      <div className="todo-app__form">
        <h2 className="todo-app__task-header text-center text-2xl font-medium text-white bg-lime-800/[0.8] p-2">
          {headerText}
        </h2>
        <TodoForm addTask={addTask} />
      </div>
    </div>
  );
}
