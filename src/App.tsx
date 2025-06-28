import WorkHistory from './components/WorkHistory'
import GitHubContributions from './components/GitHubContributions'
import TechnicalArticles from './components/TechnicalArticles'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto p-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold">My Portfolio</h1>
          <p className="text-lg text-gray-600 mt-2">A quick look at my work and writings</p>
        </header>
        <main>
          <WorkHistory />
          <GitHubContributions />
          <TechnicalArticles />
        </main>
        <footer className="text-center text-gray-500 text-sm mt-12">
          © {new Date().getFullYear()} My Portfolio
        </footer>
      </div>
    </div>
  )
}

export default App
