import './App.css'
import WorkHistory from './components/WorkHistory'
import ProjectModal from './components/ProjectModal'
import GitHubContributions from './components/GitHubContributions'
import TechnicalArticles from './components/TechnicalArticles'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">My Portfolio</h1>
        <p className="text-gray-600">Welcome to my personal website</p>
      </header>

      <main className="space-y-8">
        <WorkHistory />
        <ProjectModal />
        <GitHubContributions />
        <TechnicalArticles />
      </main>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} My Portfolio. Built with React and Tailwind CSS.
      </footer>
    </div>
  )
}
