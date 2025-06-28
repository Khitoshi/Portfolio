import { useEffect } from 'react'

interface Article {
  id: string
  title: string
  site: { name: string; icon: string }
  likes: number
  publishDate: string
  description: string
}

interface ArticleModalProps {
  article: Article
  onClose: () => void
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8B949E] hover:text-[#C9D1D9] text-2xl focus:outline-none"
        >
          ✕
        </button>
        
        <h3 className="text-xl font-semibold text-blue-400 mb-2 hover:underline">
          {article.title}
        </h3>
        
        <div className="flex items-center space-x-2 mb-3 text-sm">
          <span className="bg-[#30363D] text-[#8B949E] px-2 py-1 rounded text-xs font-medium flex items-center">
            <span className="mr-1">{article.site.icon}</span>
            {article.site.name}
          </span>
          <span className="flex items-center text-gray-400">
            <span className="mr-1">👍</span>
            {article.likes} Likes
          </span>
          <span className="text-gray-500">Published: {article.publishDate}</span>
        </div>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          {article.description}
        </p>
        
        <a
          href="#"
          className="text-blue-400 hover:underline"
        >
          Read full article on {article.site.name} →
        </a>
      </div>
    </div>
  )
}