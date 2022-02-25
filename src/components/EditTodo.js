import React, { useState } from 'react'

export default function EditTodo(props) {
    const [newName, setNewName] = useState("")
    function handleChange(e) {
        setNewName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName)
        props.setIsEditing(false)
        setNewName("")
    }

    return (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input id={props.id} className="todo-text" type="text" value={newName} onChange={handleChange} />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={() => props.setIsEditing(false)}>
                    Cancel
                    <span className="visually-hidden"> renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save
                    <span className="visually-hidden"> new name for {props.name}</span>
                </button>
            </div>
        </form>
    )
}
