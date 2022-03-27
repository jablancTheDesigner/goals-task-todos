import React from "react";
import { useDispatch } from "react-redux";
import {
  activate,
  deactivate,
  deleteTodo,
  toggleCompleted,
  toggleInProgress,
} from "../redux/reducers/todoSlice";

const btnclass =
  "p-2 text-sm bg-gray-200 text-gray-900 hover:bg-gray-700 hover:text-white flex-1";

function TodoAction({ name, func }) {
  const dispatch = useDispatch();
  return (
    <button type="button" className={btnclass} onClick={() => dispatch(func)}>
      {name}
    </button>
  );
}

export default function ViewTodo(props) {
  return (
    <div className={`view-todo mb-4 flex flex-wrap gap-2`}>
      <div
        className="view-todo__details w-full text-left p-3 bg-white cursor-text drop-shadow-lg"
        onClick={() => props.setIsEditing(true)}
      >
        <label className={`view-todo__label ml-2 text-base`} htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      {!props.inProgress && props.active && (
        <TodoAction name="Progress" func={toggleInProgress(props.id)} />
      )}
      {!props.completed && props.active && (
        <TodoAction name="Complete" func={toggleCompleted(props.id)} />
      )}
      {!props.active && (
        <TodoAction name="Activate" func={activate(props.id)} />
      )}
      {props.active && (
        <TodoAction name="Backlog" func={deactivate(props.id)} />
      )}
      <TodoAction name="Delete" func={deleteTodo(props.id)} />
    </div>
  );
}
