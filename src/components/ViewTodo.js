import React from 'react'

export default function ViewTodo(props) {
    return (
        <div className={`view-todo drop-shadow-lg mb-4 flex flex-row bg-white`}>
            <div className="view-todo__details md:col-span-3 col-span-4 text-left flex items-center p-2 hover:opacity-90 cursor-pointer flex-grow"
                onClick={() => props.toggleCompleted(props.id)}>
                <label className={`view-todo__label ml-2 text-2xl ${props.completed ? "line-through opacity-50 blur-[1px]" : ""}`}
                    htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            {!props.completed &&
                <button type="button"
                    className="view-todo__btn bg-sky-700 text-white hover:bg-sky-800 transition py-2 px-4"
                    onClick={() => props.setIsEditing(true)}>
                    Edit
                </button>
            }
            <button type="button"
                className="view-todo__btn view-todo__btn--danger bg-red-700 text-white hover:bg-red-800 transition py-2 px-4"
                onClick={() => props.deleteTask(props.id)}>
                Delete
            </button>

        </div>
    )
}
