import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TodoApp from "./components/TodoApp";
import { BacklogPage } from "./pages/BacklogPage";
import { Layout } from "./pages/Layout";

function App() {
  return (
    
    <div className="app flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout flow="backlog" />}>
            <Route index element={<BacklogPage />} />
          </Route>
          <Route path="/boards" element={<Layout flow="boards" />}>
            <Route index element={<TodoApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
