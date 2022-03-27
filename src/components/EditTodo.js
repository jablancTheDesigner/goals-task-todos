import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/reducers/todoSlice";

const btnclass =
  "p-2 text-sm bg-gray-200 text-gray-900 hover:bg-gray-700 hover:text-white flex-1";

export default function EditTodo(props) {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      id: props.id,
      data: newName,
    };
    dispatch(editTodo(payload));
    props.setIsEditing(false);
    setNewName("");
  }

  return (
    <form className="stack-small text-center mb-4" onSubmit={handleSubmit}>
      <div className="flex flex-wrap gap-2">
        <input
          id={props.id}
          className="todo-text p-3 w-full drop-shadow-lg"
          type="text"
          onChange={handleChange}
          placeholder={`New name for "${props.name}"`}
        />
        <button type="submit" className={btnclass}>
          Save
        </button>
        <button
          type="button"
          className={btnclass}
          onClick={() => props.setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
