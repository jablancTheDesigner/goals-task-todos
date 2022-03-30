import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Board from "./Board";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, toggleForm, isFormOpen } from "../redux/reducers/todoSlice";

export default function TodoApp() {
  const todosV2 = useSelector(getTodos);
  const dispatch = useDispatch();
  const backlogList = todosV2.filter((task) => !task.active);
  const activeList = todosV2.filter(
    (task) => task.active && !task.completed && !task.inProgress
  );
  const completeList = todosV2.filter((task) => task.completed);
  const inProgressList = todosV2.filter((task) => task.inProgress);
  const isOpen = useSelector(isFormOpen);

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
      <div className="todo-app__task-list p-4 grow flex gap-4 overflow-x-auto flex-nowrap">
        {renderBoard("backlog", "Backlog", backlogList)}
        {renderBoard("toDo", "To Do", activeList)}
        {renderBoard("inProgress", "In Progress", inProgressList)}
        {renderBoard("complete", "Complete", completeList)}
      </div>

      {isOpen && <TodoForm />}

      <button
        onClick={() => dispatch(toggleForm(true))}
        className="fixed bottom-10 right-10 bg-lime-900 text-white text-2xl rounded-full p-4 shadow-lg w-16 h-16 flex items-center justify-center z-10"
      >
        +
      </button>
    </div>
  );
}
