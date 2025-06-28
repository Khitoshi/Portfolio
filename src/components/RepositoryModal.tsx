import { useEffect } from 'react'

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

interface RepositoryModalProps {
  repository: Repository
  onClose: () => void
}

export default function RepositoryModal({ repository, onClose }: RepositoryModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const allContributions = [
    ...repository.contributions,
    'Refactored build process for faster compilation. (Pull Request #119, merged 1 week ago)',
    'Added support for internationalization (i18n). (Commit ghi9012, 2 weeks ago)',
    'Wrote comprehensive unit tests for core components. (Commit mno7890, 1 month ago)'
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-8 max-w-2xl w-full mx-4 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8B949E] hover:text-[#C9D1D9] text-2xl focus:outline-none"
        >
          ✕
        </button>
        
        <h3 className="text-xl font-semibold text-blue-400 mb-2 hover:underline">
          {repository.name}
        </h3>
        
        <p className="text-gray-300 mb-3">
          {repository.detailedDescription || repository.description}
        </p>
        
        <div className="flex items-center space-x-4 mb-4 text-sm">
          <span className="flex items-center text-gray-500">
            <span
              className="w-3 h-3 rounded-full mr-1.5"
              style={{ backgroundColor: repository.language.color }}
            ></span>
            {repository.language.name}
          </span>
          <span className="flex items-center text-blue-400 hover:underline cursor-pointer">
            ⭐ {repository.stars} Stars
          </span>
          <span className="flex items-center text-blue-400 hover:underline cursor-pointer">
            🔀 {repository.forks} Forks
          </span>
          {repository.issues && (
            <span className="flex items-center text-blue-400 hover:underline cursor-pointer">
              🐛 {repository.issues} Issues
            </span>
          )}
        </div>
        
        <h4 className="text-md font-medium text-gray-200 mb-2">All Contributions:</h4>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1.5 max-h-48 overflow-y-auto mb-4">
          {allContributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))}
        </ul>
        
        <a
          href="#"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-sm"
        >
          View on GitHub
        </a>
      </div>
    </div>
  )
}