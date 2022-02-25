import React from 'react'
import Todo from './Todo';

export default function TodoList(props) {

    const taskList = props.tasks.map(task => {
        return (
            <Todo name={task.name}
                key={task.id}
                id={task.id}
                toggleCompleted={props.toggleCompleted}
                completed={props.completed} />
        )
    });

    return (
        <ul>{taskList}</ul>
    )
}
