import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { DefaultVitePage } from './pages/DefaultVitePage';
import { CategoryCreationForm } from "./ui/CategoryCreationForm";

export const App = () => {
  return (
    <Routes>

      <Route path="/" element={<DefaultVitePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/todoTasks" element={<CategoryCreationForm />} />

      {/* Opcional: 404 */}
      <Route path="*" element={
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p>Página no encontrada</p>
            <a href="/" className="text-blue-400 mt-4 inline-block">Volver al inicio</a>
          </div>
        </div>
      } />
    </Routes>
  )
}


