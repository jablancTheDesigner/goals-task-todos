import React from 'react'

export default function ViewTodo(props) {
    return (
        <div className={`view-todo drop-shadow-lg mb-4 grid grid-cols-4`}>
            <div className="view-todo__details col-span-3 text-left flex items-center p-2 hover:opacity-90 bg-white cursor-pointer" onClick={() => props.toggleCompleted(props.id)}>
                <label className={`view-todo__label ml-2 text-2xl ${props.completed ? "line-through opacity-50" : ""}`} htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="view-todo__actions grid grid-cols-2">
                <button type="button" className="view-todo__btn bg-sky-700 text-white hover:bg-sky-800 transition" onClick={() => props.setIsEditing(true)}>
                    Edit
                </button>
                <button type="button" className="view-todo__btn view-todo__btn--danger bg-red-700 text-white hover:bg-red-800 transitio" onClick={() => props.deleteTask(props.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}
