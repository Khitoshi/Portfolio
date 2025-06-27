import { useState } from 'react'

interface Article {
  title: string
  url: string
}

const articles: Article[] = [
  { title: 'Understanding React Hooks', url: '#' },
  { title: 'Advanced TypeScript Tips', url: '#' },
  { title: 'Styling with Tailwind CSS', url: '#' },
  { title: 'Testing React Applications', url: '#' },
  { title: 'State Management with Redux', url: '#' }
]

export default function TechnicalArticles() {
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? articles : articles.slice(0, 3)

  return (
    <section className="my-4">
      <h2 className="text-xl font-bold mb-2">Technical Articles</h2>
      <ul className="list-disc list-inside">
        {visible.map((article) => (
          <li key={article.title}>
            <a href={article.url} className="text-blue-500 hover:underline">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      {articles.length > 3 && (
        <button
          onClick={() => setShowAll((v) => !v)}
          className="mt-2 text-sm text-blue-500 underline"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  )
}
