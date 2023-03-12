import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../components/TodoForm";
import { toggleForm, isFormOpen } from "../redux/reducers/todoSlice";
import { useState } from "react";

export const Layout = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(isFormOpen);
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav className="flex justify-between bg-teal-900 relative">
        <h1 className="text-2xl font-bold text-white p-4">
          Task Manager
        </h1>
        <button onClick={() => setMenuOpen(true)} className="p-4 font-bold text-white">menu</button>
        {menuOpen && (
            <div className="absolute top-4 right-4 z-10 bg-white shadow-sm">
              <ul className="flex flex-col list-none justify-end text-teal-900 h-full font-bold">
                <li className="px-4 py-2">
                  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li className="px-4 py-2">
                  <Link to="/backlog" onClick={() => setMenuOpen(false)}>Backlog</Link>
                </li>
                <li className="px-4 py-2">
                  <Link to="/boards" onClick={() => setMenuOpen(false)}>Boards</Link>
                </li>
              </ul>
            </div>
        )}
      </nav>

      <Outlet />

      {isOpen && <TodoForm />}

      <button
        onClick={() => dispatch(toggleForm(true))}
        className="fixed bottom-10 right-10 bg-teal-900 text-white text-2xl rounded-full p-4 shadow-lg w-16 h-16 flex items-center justify-center z-10"
      >
        +
      </button>
    </>
  )
};
