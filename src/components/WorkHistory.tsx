import { useState } from 'react'

interface WorkItem {
  company: string
  position: string
  details: string
}

const history: WorkItem[] = [
  {
    company: 'Acme Corp',
    position: 'Software Engineer',
    details: 'Developed scalable web applications and collaborated with a cross-functional team.'
  },
  {
    company: 'Beta LLC',
    position: 'Frontend Developer',
    details: 'Implemented responsive interfaces and optimized performance across browsers.'
  }
]

export default function WorkHistory() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="my-4">
      <h2 className="text-xl font-bold mb-2">Work History</h2>
      {history.map((item, index) => (
        <div key={item.company} className="border-b border-gray-300">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left py-2 font-semibold"
          >
            {item.company} - {item.position}
          </button>
          {openIndex === index && (
            <p className="p-2 text-sm text-gray-700">{item.details}</p>
          )}
        </div>
      ))}
    </section>
  )
}
