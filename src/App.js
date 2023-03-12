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
          <Route path="/" element={<Layout />}>
            <Route index element={<BacklogPage />} />
            <Route path="backlog" element={<BacklogPage />} />
            <Route path="boards" element={<TodoApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
