import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="app flex flex-col">
      <div className="p-4 text-center bg-lime-800/[0.8]">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-white">
            <em>my</em>Todos
          </h1>
          <p className="text-white text-md">
            Made by Jahmal &amp; Built in React
          </p>
        </div>
      </div>
      <TodoApp />
    </div>
  );
}

export default App;
