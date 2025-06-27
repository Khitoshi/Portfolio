import { useState } from 'react'

export default function ProjectModal() {
  const [open, setOpen] = useState(false)

  return (
    <section className="my-4">
      <h2 className="text-xl font-bold mb-2">Featured Project</h2>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Details
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-4 rounded shadow max-w-md w-full">
            <h3 className="text-lg font-semibold mb-2">Project Modal</h3>
            <p className="mb-4">This modal demonstrates how project details could be displayed.</p>
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
