import React, { useState } from "react";
import EditTodo from "./EditTodo";
import ViewTodo from "./ViewTodo";

export default function Todo(props) {
  const [isEditing, setIsEditing] = useState(props.editing);

  return (
    <div id={props.id} className="todo">
      {isEditing ? (
        <EditTodo
          id={props.id}
          key={props.id}
          name={props.name}
          completed={props.completed}
          active={props.active}
          inProgress={props.inProgress}
          setIsEditing={setIsEditing}
        />
      ) : (
        <ViewTodo
          id={props.id}
          key={props.id}
          name={props.name}
          completed={props.completed}
          active={props.active}
          inProgress={props.inProgress}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}
