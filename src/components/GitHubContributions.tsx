import { useState, useEffect } from 'react'
import RepositoryModal from './RepositoryModal'

interface Repository {
  id: string
  name: string
  description: string
  language: { name: string; color: string }
  stars: string
  forks: string
  lastCommit: string
  contributions: string[]
  detailedDescription?: string
  issues?: string
}

const repositories: Repository[] = [
  {
    id: 'repo1',
    name: 'awesome-portfolio-template',
    description: 'A curated list of awesome portfolio templates and resources for developers.',
    language: { name: 'JavaScript', color: '#F7DF1E' },
    stars: '1.2k',
    forks: '340',
    lastCommit: '2 days ago',
    contributions: [
      'Added new dark mode theme option. (#125)',
      'Fixed responsive layout bug on mobile devices. (#122)',
      'Updated documentation for custom styling.'
    ],
    detailedDescription: 'Detailed information about the awesome-portfolio-template repository. This could include the project\'s goals, features, current status, contribution guidelines, and technical challenges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    issues: '5'
  },
  {
    id: 'repo2',
    name: 'data-viz-library',
    description: 'A lightweight and customizable data visualization library for React.',
    language: { name: 'TypeScript', color: '#3178C6' },
    stars: '870',
    forks: '150',
    lastCommit: '5 days ago',
    contributions: [
      'Implemented new bar chart component. (#88)',
      'Improved performance for large datasets.',
      'Added accessibility features for screen readers. (#85)'
    ],
    detailedDescription: 'This data visualization library aims to provide easy-to-use and highly customizable chart components for React applications. It supports various chart types and is optimized for performance. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    issues: '8'
  }
]

export default function GitHubContributions() {
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null)
  const [contributionData, setContributionData] = useState<Array<{ date: string; contributions: number; level: number }>>([])

  useEffect(() => {
    // Generate contribution data for the past year
    const generateContributionData = () => {
      const data = []
      const today = new Date()
      const daysToDisplay = 53 * 7 // ~53 weeks
      
      for (let i = daysToDisplay - 1; i >= 0; i--) {
        const date = new Date(today)
        date.setDate(today.getDate() - i)
        const contributions = Math.floor(Math.random() * 15)
        let level = 0
        
        if (contributions > 0 && contributions <= 2) level = 1
        else if (contributions > 2 && contributions <= 5) level = 2
        else if (contributions > 5 && contributions <= 9) level = 3
        else if (contributions > 9) level = 4
        
        data.push({
          date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
          contributions,
          level
        })
      }
      
      return data
    }

    setContributionData(generateContributionData())
  }, [])

  const openRepoModal = (repo: Repository) => {
    setSelectedRepo(repo)
  }

  const closeRepoModal = () => {
    setSelectedRepo(null)
  }

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-[#21262D]'
      case 1: return 'bg-[#0E4429]'
      case 2: return 'bg-[#006D32]'
      case 3: return 'bg-[#26A641]'
      case 4: return 'bg-[#39D353]'
      default: return 'bg-[#21262D]'
    }
  }

  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-6">
      <div className="flex items-center mb-4">
        <svg className="w-8 h-8 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-100">GitHub Contributions</h2>
      </div>

      <div className="mb-6 overflow-x-auto pb-2">
        <div className="grid grid-rows-7 grid-flow-col gap-1 min-w-[700px]">
          {contributionData.map((day, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-sm ${getContributionColor(day.level)} cursor-pointer`}
              title={`${day.contributions} contributions on ${day.date}`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 mb-6">
        <span>Less</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-sm bg-[#21262D]"></div>
          <div className="w-3 h-3 rounded-sm bg-[#0E4429]"></div>
          <div className="w-3 h-3 rounded-sm bg-[#006D32]"></div>
          <div className="w-3 h-3 rounded-sm bg-[#26A641]"></div>
          <div className="w-3 h-3 rounded-sm bg-[#39D353]"></div>
        </div>
        <span>More</span>
      </div>

      <div className="space-y-4">
        {repositories.map((repo) => (
          <div
            key={repo.id}
            className="bg-[#161B22] border border-gray-700 hover:border-gray-600 transition-colors rounded-lg p-4 cursor-pointer"
            onClick={() => openRepoModal(repo)}
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-400 mb-1 sm:mb-0 hover:underline">
                {repo.name}
              </h3>
              <span className="text-xs text-gray-500">Last commit: {repo.lastCommit}</span>
            </div>
            
            <p className="text-sm text-gray-400 mb-3">{repo.description}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <span className="flex items-center">
                <span
                  className="w-3 h-3 rounded-full mr-1.5"
                  style={{ backgroundColor: repo.language.color }}
                ></span>
                {repo.language.name}
              </span>
              <span className="flex items-center text-blue-400 hover:underline">
                ⭐ {repo.stars} Stars
              </span>
              <span className="flex items-center text-blue-400 hover:underline">
                🔀 {repo.forks} Forks
              </span>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-1">Recent Contributions:</h4>
              <ul className="list-disc list-inside text-xs text-gray-400 space-y-1 pl-1">
                {repo.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>

            <div className="mt-3 text-right">
              <span className="text-blue-400 hover:underline text-xs">View more details →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          className="text-blue-400 hover:underline"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all repositories on GitHub
        </a>
      </div>

      {selectedRepo && (
        <RepositoryModal
          repository={selectedRepo}
          onClose={closeRepoModal}
        />
      )}
    </div>
  )
}