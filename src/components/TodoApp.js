import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { nanoid } from 'nanoid';

export default function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const headerText = `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`;
    const taskList = tasks.length > 0 ? createList() : createOpenMsg();

    function createList() {
        const list = tasks.map(task => {
            return (
                <Todo name={task.name}
                    key={task.id}
                    id={task.id}
                    toggleCompleted={toggleCompleted}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    completed={task.completed} />
            )
        })
        return list;
    }

    function createOpenMsg() {
        return (
            <h1 className="text-4xl bold">No Tasks</h1>
        )
    }

    function addTask(name) {
        const newTask = { id: 'task_' + nanoid(), name: name, completed: false };
        setTasks([
            ...tasks,
            newTask
        ]);
    }

    function toggleCompleted(id) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        })
        setTasks(updatedTasks)
        console.log(updatedTasks)
    }

    function deleteTask(id) {
        const remaingTasks = tasks.filter(task => {
            return task.id !== id;
        })
        setTasks(remaingTasks)
        console.log(remaingTasks)
    }

    function editTask(id, newName) {
        const editedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, name: newName }
            }
            return task;
        })
        setTasks(editedTasks)
        console.log(editedTasks)
    }

    return (
        <div className="todo-app flex flex-col">
            <div className="p-4 mb-4 text-center">
                <div className="container mx-auto">
                    <h1 className="todo-app__title text-5xl font-bold underline text-white">Todo App</h1>
                    <p className="todo-app__sub-title text-white">Made by Jahmal &amp; Built in React</p>
                </div>
            </div>

            <div className="text-center">
                <div className="container mx-auto">
                    <div className="todo-app__task-list px-2 md:w-5/6 mx-auto">
                        {taskList}
                    </div>
                </div>
            </div>

            <div className="mt-auto fixed bottom-0 left-0 right-0 z-10">
                <h2 className="todo-app__task-header text-center text-2xl font-medium text-white bg-lime-800 p-2 opacity-50">{headerText}</h2>
                <TodoForm addTask={addTask} />
            </div>
        </div>
    )
}
