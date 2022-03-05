import React, { useState } from "react";

export default function EditTodo(props) {
  const [newName, setNewName] = useState("");
  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    props.setIsEditing(false);
    setNewName("");
  }

  return (
    <form className="stack-small text-center mb-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-6">
        <input
          id={props.id}
          className="todo-text p-3 col-span-full md:col-span-4"
          type="text"
          onChange={handleChange}
          placeholder={`New name for "${props.name}"`}
        />
        <button
          type="submit"
          className="btn btn__primary todo-edit p-3 bg-sky-700 text-white hover:bg-sky-800 col-span-3 md:col-span-1"
        >
          Save
        </button>
        <button
          type="button"
          className="btn todo-cancel p-3 bg-red-700 text-white hover:bg-red-800 col-span-3 md:col-span-1"
          onClick={() => props.setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
