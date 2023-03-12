import React from "react";
import Todo from "./Todo";
import Board from "./Board";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/reducers/todoSlice";

export default function TodoApp() {
  const todosV2 = useSelector(getTodos);
  const dispatch = useDispatch();
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
        {list.length == 0 && <h4 className="text-center">No Tasks</h4>}
      </Board>
    );
  };

  return (
    <div className="flex flex-col flex-grow">
      <div className="p-4 grow flex gap-4 overflow-x-auto flex-nowrap">
        {renderBoard("toDo", "To Do", activeList)}
        {renderBoard("inProgress", "In Progress", inProgressList)}
        {renderBoard("complete", "Complete", completeList)}
      </div>
    </div>
  );
}
