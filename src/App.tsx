import './App.css'
import WorkHistory from './components/WorkHistory'
import GitHubContributions from './components/GitHubContributions'
import TechnicalArticles from './components/TechnicalArticles'

function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#C9D1D9] font-['Inter',sans-serif] p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <main className="space-y-8">
            <WorkHistory />
            <GitHubContributions />
            <TechnicalArticles />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
