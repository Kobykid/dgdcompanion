import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-indigo-600">Vite + React</h1>
        <p className="text-gray-600 text-lg">
          Tailwind CSS v4 is now configured and ready!
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg active:scale-95"
          >
            Count is {count}
          </button>
          
          <p className="text-sm text-gray-500 italic">
            Edit <code className="bg-gray-100 px-1 rounded text-pink-500 font-mono">src/App.jsx</code> to test HMR
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-center gap-6">
          <a
            href="https://vite.dev"
            target="_blank"
            className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
          >
            Vite Docs
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
          >
            React Docs
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
          >
            Tailwind Docs
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
