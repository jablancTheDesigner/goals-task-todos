import React, { useState } from 'react'

export default function TodoForm(props) {
    const [name, setName] = useState("")

    function handleSubmission(e) {
        e.preventDefault();
        props.addTask(name)
        setName("");
    }
    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmission} className="todo-form">
            <div className='grid grid-cols-4'>
                <input type="text" value={name} name="name" onChange={handleChange} className="todo-form__input col-span-3 h-16 p-4" placeholder='Add New Task' />
                <button type="submit" className="todo-form__submit h-16 p-4 bg-lime-900 text-white font-medium">Add</button>
            </div>
        </form>
    )
}
