import React, { useState } from 'react'
import EditTodo from './EditTodo';
import ViewTodo from './ViewTodo';

export default function Todo(props) {
    const [isEditing, setIsEditing] = useState(props.editing);

    return (
        <div id={props.id} className='todo'>
            {isEditing ?
                <EditTodo id={props.id}
                    key={props.id}
                    name={props.name}
                    completed={props.completed}
                    setIsEditing={setIsEditing}
                    editTask={props.editTask} /> :
                <ViewTodo id={props.id}
                    key={props.id}
                    name={props.name}
                    completed={props.completed}
                    setIsEditing={setIsEditing}
                    toggleCompleted={props.toggleCompleted}
                    deleteTask={props.deleteTask} />}
        </div>

    )
}
