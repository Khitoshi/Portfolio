import { useState } from 'react'
import ProjectModal from './ProjectModal'

interface Project {
  id: string
  title: string
  description: string
  tags: Array<{ name: string; className?: string }>
  detailedDescription?: string
}

interface WorkExperience {
  id: string
  company: string
  position: string
  period: string
  description: string
  projects: Project[]
}

const workExperiences: WorkExperience[] = [
  {
    id: 'innovatech',
    company: 'Innovatech Solutions',
    position: 'Senior Software Engineer',
    period: 'Jan 2020 - Present',
    description: 'Overall responsibilities: Led development of new platforms, mentored junior engineers, and improved code quality.',
    projects: [
      {
        id: 'work1Project1',
        title: 'Microservices Platform Alpha',
        description: 'Developed a new microservices-based platform using Go and Kubernetes. Focused on scalability and resilience.',
        tags: [
          { name: 'Go', className: 'bg-[#375EAB] text-[#C9D1D9]' },
          { name: 'Kubernetes', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'Microservices', className: 'bg-[#21262D] text-[#58A6FF]' }
        ],
        detailedDescription: 'Detailed description of the Microservices Platform Alpha project. This could include specific technical challenges, architecture decisions, team collaboration, and the impact of the project on Innovatech Solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 'work1Project2',
        title: 'DevOps Pipeline Optimization',
        description: 'Overhauled the CI/CD pipeline, reducing deployment times by 40% and improving test coverage.',
        tags: [
          { name: 'CI/CD', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'Jenkins', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'Docker', className: 'bg-[#21262D] text-[#58A6FF]' }
        ],
        detailedDescription: 'In-depth information about the DevOps Pipeline Optimization project. This could cover the tools and techniques used, the problems solved, and the resulting improvements in efficiency and reliability for Innovatech Solutions.'
      },
      {
        id: 'work1Project3',
        title: 'AI-Powered Analytics Engine',
        description: 'Built a new analytics engine leveraging machine learning models to provide deeper customer insights.',
        tags: [
          { name: 'Python', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'TensorFlow', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'BigQuery', className: 'bg-[#21262D] text-[#58A6FF]' }
        ],
        detailedDescription: 'Detailed description of the AI-Powered Analytics Engine project. This could include the machine learning models used, data pipelines, and the business impact of the insights generated.'
      },
      {
        id: 'work1Project4',
        title: 'Cloud Migration Strategy',
        description: 'Led the planning and execution of migrating legacy systems to a modern cloud infrastructure.',
        tags: [
          { name: 'AWS', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'Terraform', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'Serverless', className: 'bg-[#21262D] text-[#58A6FF]' }
        ],
        detailedDescription: 'Information about the Cloud Migration Strategy project. Describe the scope, challenges, chosen cloud provider (AWS), and the benefits achieved post-migration, such as cost savings and improved scalability.'
      }
    ]
  },
  {
    id: 'nextgen',
    company: 'NextGen Systems',
    position: 'Software Developer',
    period: 'Jun 2017 - Dec 2019',
    description: 'Overall responsibilities: Developed and maintained full-stack web applications, contributed to API design and database management.',
    projects: [
      {
        id: 'work2Project1',
        title: 'E-commerce Platform Revamp',
        description: 'Key developer in a team that revamped the company\'s main e-commerce platform using Node.js and React.',
        tags: [
          { name: 'Node.js', className: 'bg-[#4E8444] text-[#C9D1D9]' },
          { name: 'TypeScript', className: 'bg-[#2B7489] text-[#C9D1D9]' },
          { name: 'React', className: 'bg-[#21262D] text-[#58A6FF]' }
        ],
        detailedDescription: 'Details about the E-commerce Platform Revamp project. Discuss the scope, your role in the team, technologies used (Node.js, React, TypeScript), and any specific features or modules you worked on.'
      },
      {
        id: 'work2Project2',
        title: 'Internal Analytics Dashboard',
        description: 'Designed and implemented an internal analytics dashboard for tracking sales and user engagement.',
        tags: [
          { name: 'Vue.js', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'MongoDB', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'Express.js', className: 'bg-[#21262D] text-[#58A6FF]' }
        ],
        detailedDescription: 'Information on the Internal Analytics Dashboard project. Describe the purpose, data sources, visualization techniques, and the impact it had on business decision-making at NextGen Systems.'
      }
    ]
  },
  {
    id: 'codestart',
    company: 'CodeStart Inc.',
    position: 'Junior Developer',
    period: 'Jul 2015 - May 2017',
    description: 'Overall responsibilities: Assisted senior developers in building and testing web applications. Gained experience with various front-end and back-end technologies.',
    projects: [
      {
        id: 'work3Project1',
        title: 'Client Website Maintenance',
        description: 'Performed updates and bug fixes for various client websites, primarily using HTML, CSS, and JavaScript.',
        tags: [
          { name: 'HTML', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'CSS', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'JavaScript', className: 'bg-[#21262D] text-[#58A6FF]' },
          { name: 'jQuery', className: 'bg-[#21262D] text-[#58A6FF]' }
        ],
        detailedDescription: 'More details about the Client Website Maintenance tasks. Focus on the types of issues handled, the range of technologies encountered (HTML, CSS, JavaScript, jQuery), and how this experience contributed to your growth as a developer.'
      }
    ]
  }
]

export default function WorkHistory() {
  const [expandedCompany, setExpandedCompany] = useState<string>('innovatech')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showMoreProjects, setShowMoreProjects] = useState<Record<string, boolean>>({})

  const toggleCompany = (companyId: string) => {
    setExpandedCompany(expandedCompany === companyId ? '' : companyId)
  }

  const toggleShowMore = (companyId: string) => {
    setShowMoreProjects(prev => ({
      ...prev,
      [companyId]: !prev[companyId]
    }))
  }

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-100 mb-6">Work History</h2>
      <div className="space-y-4">
        {workExperiences.map((experience) => {
          const isExpanded = expandedCompany === experience.id
          const showMore = showMoreProjects[experience.id] || false
          const visibleProjects = showMore ? experience.projects : experience.projects.slice(0, 3)
          
          return (
            <div key={experience.id}>
              <button
                onClick={() => toggleCompany(experience.id)}
                className="accordion-button w-full flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-700 rounded-md focus:outline-none text-left"
                aria-expanded={isExpanded}
              >
                <div className="flex items-center">
                  <span className="material-icons text-blue-400 mr-3">business</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">{experience.company}</h3>
                    <p className="text-xs text-gray-500">{experience.position} ({experience.period})</p>
                  </div>
                </div>
                <span className={`material-icons text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              
              {isExpanded && (
                <div className="accordion-content bg-gray-800 bg-opacity-50 rounded-b-md p-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{experience.description}</p>
                  <div className="space-y-3">
                    {visibleProjects.map((project) => (
                      <div
                        key={project.id}
                        className="bg-[#1F242C] border border-[#30363D] rounded-md p-3 cursor-pointer hover:border-gray-600 transition-colors"
                        onClick={() => openProjectModal(project)}
                      >
                        <h4 className="text-md font-semibold text-blue-300 mb-1">{project.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
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
                    ))}
                  </div>
                  
                  {experience.projects.length > 3 && (
                    <div className="mt-3 text-center">
                      <button
                        onClick={() => toggleShowMore(experience.id)}
                        className="text-blue-400 hover:underline text-sm"
                      >
                        {showMore ? 'Show less projects' : 'Show more projects'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeProjectModal}
        />
      )}
    </div>
  )
}