import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const storeLocal = (data) => {
  localStorage.setItem("todos", JSON.stringify(data));
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    formOpen: false,
  },
  reducers: {
    addTodo: (state, name) => {
      const newTask = {
        id: v4(),
        name: name.payload,
        active: false,
        inProgress: false,
        completed: false,
        created: Date.now(),
      };
      storeLocal([...state.todos, newTask]);
      state.todos = [...state.todos, newTask];
    },
    deleteTodo: (state, id) => {
      const remaining = state.todos.filter((task) => task.id !== id.payload);
      storeLocal(remaining);
      state.todos = remaining;
    },
    editTodo: (state, data) => {
      const editedList = state.todos.map((task) => {
        if (task.id === data.payload.id) {
          return { ...task, name: data.payload.data };
        }
        return task;
      });
      state.todos = editedList;
      storeLocal(editedList);
    },
    toggleInProgress: (state, id) => {
      const progressList = state.todos.map((task) => {
        if (task.id === id.payload) {
          return { ...task, inProgress: true, completed: false, active: true };
        }
        return task;
      });
      state.todos = progressList;
      storeLocal(progressList);
    },
    toggleCompleted: (state, id) => {
      const completedList = state.todos.map((task) => {
        if (task.id === id.payload) {
          return { ...task, inProgress: false, completed: true, active: true };
        }
        return task;
      });
      state.todos = completedList;
      storeLocal(completedList);
    },
    activate: (state, id) => {
      const completedList = state.todos.map((task) => {
        if (task.id === id.payload) {
          return { ...task, active: !task.active };
        }
        return task;
      });
      state.todos = completedList;
      storeLocal(completedList);
    },
    deactivate: (state, id) => {
      const completedList = state.todos.map((task) => {
        if (task.id === id.payload) {
          return {
            ...task,
            inProgress: false,
            completed: false,
            active: false,
          };
        }
        return task;
      });
      state.todos = completedList;
      storeLocal(completedList);
    },
    toggleForm: (state, trigger) => {
      console.log(trigger);
      state.formOpen = trigger.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  toggleInProgress,
  toggleCompleted,
  activate,
  deactivate,
  toggleForm,
} = todosSlice.actions;

export const getTodos = (state) => {
  return state.todos.todos;
};

export const isFormOpen = (state) => {
  return state.todos.formOpen;
};

export default todosSlice.reducer;
