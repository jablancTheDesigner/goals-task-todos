import React, { useState } from "react";
import { useEffect } from "react";
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

function TodoAction({ name, func, Icon, callback }) {
  const dispatch = useDispatch();
  return (
    <button type="button" className={btnclass} onClick={() => {
      dispatch(func)
      if(callback){
        callback()
      }
    }}>
      {Icon && <Icon />} {name}
    </button>
  );
}

export default function ViewTodo(props) {
  const dispatch = useDispatch();
  const [openAction, setOpenAction] = useState(false);

  useEffect(() => {
    document.body.click = () => {
      console.log('here')
    }
  }, [])

  return (
    <div
      className={`view-todo flex flex-col border-2 rounded-lg border-gray-200 relative `}
    >
      <div className="view-todo__details w-full text-left p-3 bg-white rounded-lg cursor-text flex">
        <label
          className={`view-todo__label ml-2 text-base rounded-lg`}
          htmlFor={props.id}
        >
          {props.name}
        </label>
      </div>

      <div className="flex w-full bg-white shadow-sm">
        {!props.active && (
          <>
            <TodoAction name="Activate" func={activate(props.id)} callback={setOpenAction} />
            <button
              type="button"
              className={btnclass}
              onClick={() => {
                props.setIsEditing(true)
                setOpenAction(false)
              }}
            >
              Edit
            </button>
          </>
        )}
        {props.active && !props.completed && (
          <>
            {!props.inProgress && (
              <TodoAction name="Progress" func={toggleInProgress(props.id)} callback={setOpenAction} />
            )}
            <TodoAction name="Backlog" func={deactivate(props.id)} callback={setOpenAction} />
            <TodoAction name="Complete" func={toggleCompleted(props.id)} callback={setOpenAction} />
            <button
              type="button"
              className={btnclass}
              onClick={() => {
                props.setIsEditing(true)
                setOpenAction(false)
              }}
            >
              Edit
            </button>
          </>
        )}
        <button
          type="button"
          className="p-2 text-xs hover:bg-gray-700 text-white font-bold bg-red-600 flex-1"
          onClick={() => {
            dispatch(deleteTodo(props.id))
            setOpenAction(false)
          }}
        >
          Delete
        </button>
      </div>
    
    </div>
  );
}
