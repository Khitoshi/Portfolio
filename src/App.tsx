import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="py-6">
        <h1 className="text-4xl font-bold text-gray-800">My Portfolio</h1>
        <p className="text-lg text-gray-600 mt-2">Welcome to my personal website</p>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-200"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code className="bg-gray-200 rounded px-1">src/App.tsx</code> and save to test
        </p>
      </main>

      <footer className="py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} My Portfolio. Built with React and Tailwind CSS.
      </footer>
    </div>
  )
}

export default App
