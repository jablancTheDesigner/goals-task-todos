import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/reducers/todoSlice";

export default function EditTodo(props) {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const btnclass =
  "p-2 text-sm text-gray-900 hover:bg-gray-700 hover:text-white flex-1 rounded-lg font-bold";
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
    <form
      className="stack-small text-center border rounded-md border-gray-200 bg-white shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap gap-1">
        <textarea
          id={props.id}
          className="todo-text p-3 w-full rounded-md border-b border-gray-200"
          type="text"
          onChange={handleChange}
          placeholder={`New name for "${props.name}"`}
        >
          {props.name}
        </textarea>

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
