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
  "p-2 text-xs text-gray-900 hover:bg-gray-700 hover:text-white font-bold odd:bg-gray-100 flex-1";

function TodoAction({ name, func }) {
  const dispatch = useDispatch();
  return (
    <button type="button" className={btnclass} onClick={() => dispatch(func)}>
      {name}
    </button>
  );
}

export default function ViewTodo(props) {
  const dispatch = useDispatch();
  return (
    <div
      className={`view-todo flex flex-wrap gap-1 border-2 rounded-lg border-gray-200 overflow-hidden`}
    >
      <div className="view-todo__details w-full text-left p-3 bg-white rounded-lg cursor-text drop-shadow-lg">
        <label
          className={`view-todo__label ml-2 text-base rounded-lg`}
          htmlFor={props.id}
        >
          {props.name}
        </label>
      </div>
      <div className="flex flex-wrap w-full overflow-hidden">
        {!props.active && (
          <>
            <TodoAction name="Activate" func={activate(props.id)} />
            <button
              type="button"
              className={btnclass}
              onClick={() => props.setIsEditing(true)}
            >
              Edit
            </button>
          </>
        )}
        {props.active && !props.completed && (
          <>
            {!props.inProgress && (
              <TodoAction name="Progress" func={toggleInProgress(props.id)} />
            )}
            <TodoAction name="Backlog" func={deactivate(props.id)} />
            <TodoAction name="Complete" func={toggleCompleted(props.id)} />
            <button
              type="button"
              className={btnclass}
              onClick={() => props.setIsEditing(true)}
            >
              Edit
            </button>
          </>
        )}
        <button
          type="button"
          className="p-2 text-xs hover:bg-gray-700 text-white font-bold bg-red-600 ml-auto flex-1"
          onClick={() => dispatch(deleteTodo(props.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
