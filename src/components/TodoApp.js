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
            <div>
                <div className="contaianer">
                    <h1 className="text-4xl text-white bold">No Tasks</h1>
                </div>
            </div>
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
        <div className="todo-app">
            <div className="h-screen flex flex-col">
                <div className="p-4 mb-4 text-center">
                    <div className="container mx-auto">
                        <h1 className="todo-app__title text-3xl font-bold underline">Todo App</h1>
                        <p className="todo-app__sub-title">Made by Jahmal &amp; Built in React</p>
                    </div>
                </div>

                <div className="text-center">
                    <div className="container mx-auto">
                        <div className="todo-app__task-list px-2 w-2/3 mx-auto">
                            {taskList}
                        </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <h2 className="todo-app__task-header mb-4 text-center text-3xl bold text-white">{headerText}</h2>
                    <TodoForm addTask={addTask} />
                </div>
            </div>
        </div>
    )
}
