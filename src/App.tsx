import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<DefaultVitePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

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
function DefaultVitePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex gap-16 flex items-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo h-48 w-48" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo h-48 w-48" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold">Vite + React</h1>
      <div className="card mb-8">
        <button className="mb-8" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="mt-20 text-center">
        <p className="text-sm text-gray-400 mb-4">Testing React Router:</p>
        <div className="space-x-6">
          <a href="/home" className="text-blue-400 hover:underline">Home</a>
          <a href="/login" className="text-blue-400 hover:underline">Login</a>
          <a href="/signup" className="text-blue-400 hover:underline">Sign up</a>
        </div>
      </div>
    </>
  )
}

export default App
