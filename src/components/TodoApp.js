import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Board from "./Board";
import { useSelector } from "react-redux";
import { getTodos } from "../redux/reducers/todoSlice";

export default function TodoApp() {
  const todosV2 = useSelector(getTodos);
  const backlogList = todosV2.filter((task) => !task.active);
  const activeList = todosV2.filter(
    (task) => task.active && !task.completed && !task.inProgress
  );
  const completeList = todosV2.filter((task) => task.completed);
  const inProgressList = todosV2.filter((task) => task.inProgress);

  const renderBoard = (name, title, list) => {
    return (
      <Board title={title}>
        {list.map((item) => {
          return (
            <Todo
              name={item.name}
              key={`${name}-${item.id}`}
              id={item.id}
              completed={item.completed}
              inProgress={item.inProgress}
              active={item.active}
            />
          );
        })}
      </Board>
    );
  };

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

      <div className="todo-app__task-list p-4 grow flex gap-4 overflow-x-auto flex-nowrap">
        {renderBoard("backlog", "Backlog", backlogList)}
        {renderBoard("toDo", "To Do", activeList)}
        {renderBoard("inProgress", "In Progress", inProgressList)}
        {renderBoard("complete", "Complete", completeList)}
      </div>

      <div className="todo-app__form">
        <TodoForm />
      </div>
    </div>
  );
}
