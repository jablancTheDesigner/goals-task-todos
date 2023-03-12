import Todo from "./Todo";
import { useSelector } from "react-redux";
import { getTodos} from "../redux/reducers/todoSlice";
import { Link } from "react-router-dom";

export const Backlog = () => {
    const todos = useSelector(getTodos);
    const inProgressList = todos.filter((task, idx) => task.inProgress && (idx < 5));
    const inProgressCount = todos.filter((task, idx) => task.inProgress);
    const labelStyles = "text-teal-900 font-bold flex justify-between items-center p-2 px-2"
    return (
        <div className="container mx-auto max-w-6xl p-4 grid gap-8 grid-cols-8">
            <div className="col-span-8 md:col-span-3 flex flex-col gap-8">
                <div className="border border-gray-300 rounded-md bg-white shadow-sm ">
                    <h3 className={`${labelStyles}`}>In-Progress Total</h3>
                    <h2 className="p-2 border-y border-gray-300 text-center text-5xl">
                        {inProgressCount.length}
                    </h2>
                    <Link to="/boards" className="p-2 block">
                        View boards &gt;
                    </Link>
                </div>
                <div className="border border-gray-300 rounded-md bg-white shadow-sm">
                    <h3 className={`${labelStyles}`}>Active</h3>
                    <ol className="p-2 border-y border-gray-300">
                        {inProgressList.map((item, idx) => {
                            return (
                                <li key={`${item.id}`} className="">
                                    <h4>{idx+1}. {item.name}</h4>
                                </li>
                            );
                        })}
                        {inProgressList.length === 0 && <h4>No Tasks</h4>}
                    </ol>
                    <Link to="/boards" className="p-2 block">
                        View boards &gt;
                    </Link>
                </div>
            </div>


            <div className="col-span-8 md:col-span-5">
                <h3 className={`${labelStyles} border-b border-teal-900 mb-4`}>Tasks <Link to="/boards">View boards &gt;</Link></h3>
                <div className="flex flex-col gap-4">
                    {todos.map((item) => {
                        return (
                            <Todo
                                name={item.name}
                                key={`${item.id}`}
                                id={item.id}
                                completed={item.completed}
                                inProgress={item.inProgress}
                                active={item.active}
                            />
                        );
                    })}
                </div>
                {todos.length === 0 && <h4>No Tasks</h4>}
            </div>
        
        </div>
    )
}