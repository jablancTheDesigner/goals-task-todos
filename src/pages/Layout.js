import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../components/TodoForm";
import { toggleForm, isFormOpen } from "../redux/reducers/todoSlice";

export const Layout = ({flow}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(isFormOpen);
  return (
    <>
      <nav className="flex justify-between bg-teal-900 relative">
        <h1 className="text-2xl font-bold text-white p-4">
          Task Manager
        </h1>
        <div className="flex gap-2 items-center px-4">
          {flow === 'boards' && <Link to="/" className="text-white">Backlog</Link>}
          {flow === 'backlog' && <Link to="/boards" className="text-white">Boards</Link>}
        </div>
      </nav>
      <div className="flex items-center justify-center gap-4 px-4 py-2 border-t-2 sticky top-0 bg-white shadow-md z-10">
        <h4 className="text-xl font-bold">Add new task</h4>
        <button
          onClick={() => dispatch(toggleForm(true))}
          className=" bg-teal-900 text-white text-lg px-4 py-2 shadow-lg flex items-center justify-center z-10"
        >
          Add New
        </button>
      </div>

      <Outlet />

      {isOpen && <TodoForm />}

    
    </>
  )
};
