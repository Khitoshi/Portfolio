import { useEffect } from 'react'

interface Project {
  id: string
  title: string
  description: string
  tags: Array<{ name: string; className?: string }>
  detailedDescription?: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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
        
        <h3 className="text-xl font-semibold text-blue-300 mb-1">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-3">Project Details</p>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          {project.detailedDescription || project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                tag.className || 'bg-[#21262D] text-[#58A6FF]'
              }`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}