import React from "react";

export default function ViewTodo(props) {
  return (
    <div className={`view-todo drop-shadow-lg mb-4 grid grid-cols-6`}>
      <div
        className="view-todo__details col-span-full text-left flex items-center p-2 hover:opacity-90 cursor-pointer bg-white"
        onClick={() => props.toggleCompleted(props.id)}
      >
        <label
          className={`view-todo__label ml-2 text-2xl 
          ${props.completed ? "line-through opacity-50 blur-[1px]" : ""}`}
          htmlFor={props.id}
        >
          {props.name}
        </label>
      </div>
      {!props.completed && (
        <button
          type="button"
          className=" bg-sky-700 text-white hover:bg-sky-800 transition py-2 px-4 col-span-3 md:col-span-1 md:col-start-5"
          onClick={() => props.setIsEditing(true)}
        >
          Edit
        </button>
      )}
      <button
        type="button"
        className="bg-red-700 text-white hover:bg-red-800 transition py-2 px-4 col-span-3 md:col-span-1 col-start-4 md:col-start-6"
        onClick={() => props.deleteTask(props.id)}
      >
        Delete
      </button>
    </div>
  );
}
