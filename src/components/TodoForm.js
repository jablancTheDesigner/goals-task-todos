import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, toggleForm } from "../redux/reducers/todoSlice";

export default function TodoForm(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleSubmission(e) {
    e.preventDefault();
    dispatch(addTodo(name));
    dispatch(toggleForm(false));
    setName("");
  }
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmission}
      className="todo-form fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/75 transition ease-in-out z-20"
    >
      <div className="max-w-2xl w-full mx-auto flex flex-col p-4">
        <textarea
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          className="h-32 p-4 w-full"
          placeholder="Add New Task"
        />
        <button
          type="submit"
          className="todo-form__submit h-16 p-4 bg-lime-900 text-white font-medium"
        >
          Add
        </button>
      </div>
      <button
        onClick={() => dispatch(toggleForm(false))}
        className=" bg-red-900 text-white text-sm rounded-full p-4 shadow-lg w-20 h-20 flex items-center justify-center z-10 mt-6"
      >
        Cancel
      </button>
    </form>
  );
}
