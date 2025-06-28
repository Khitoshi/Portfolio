import { useState } from 'react'
import ArticleModal from './ArticleModal'

interface Article {
  id: string
  title: string
  site: { name: string; icon: string }
  likes: number
  publishDate: string
  description: string
}

const articles: Article[] = [
  {
    id: 'article1',
    title: 'Understanding Async/Await in JavaScript',
    site: { name: 'Zenn', icon: '🌐' },
    likes: 125,
    publishDate: '2023-05-10',
    description: 'A deep dive into asynchronous programming in JavaScript, focusing on the async/await syntax. This article explains the event loop, promises, and how async/await simplifies writing asynchronous code, making it more readable and maintainable. Includes practical examples and common pitfalls.'
  },
  {
    id: 'article2',
    title: 'Go Concurrency Patterns',
    site: { name: 'Qiita', icon: '📄' },
    likes: 98,
    publishDate: '2023-03-22',
    description: 'This article explores various concurrency patterns in Go using goroutines and channels. It covers fan-in, fan-out, worker pools, and error handling in concurrent applications. Provides code examples to illustrate each pattern and discusses best practices for building robust concurrent systems in Go.'
  },
  {
    id: 'article3',
    title: 'Introduction to WebAssembly',
    site: { name: 'Dev.to', icon: '💻' },
    likes: 72,
    publishDate: '2023-01-15',
    description: 'An introductory guide to WebAssembly (Wasm). Explains what WebAssembly is, its benefits, and how it allows running code written in languages like C++, Rust, and Go in web browsers. Includes a simple example of compiling C code to Wasm and using it in a JavaScript application.'
  },
  {
    id: 'article4',
    title: 'GraphQL vs REST: A Comparison',
    site: { name: 'Zenn', icon: '🌐' },
    likes: 65,
    publishDate: '2022-11-30',
    description: 'A comparative analysis of GraphQL and REST APIs. Discusses the pros and cons of each approach, covering topics like data fetching, over-fetching/under-fetching, schema and type systems, and caching. Helps readers understand when to choose GraphQL over REST or vice versa.'
  },
  {
    id: 'article5',
    title: 'Optimizing React Performance',
    site: { name: 'Qiita', icon: '📄' },
    likes: 50,
    publishDate: '2022-09-01',
    description: 'This article covers various techniques for optimizing the performance of React applications. Topics include memoization with `React.memo`, `useCallback`, and `useMemo`, code splitting, lazy loading components, and using tools like React Profiler to identify performance bottlenecks.'
  }
]

export default function TechnicalArticles() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [showMoreArticles, setShowMoreArticles] = useState(false)

  const visibleArticles = showMoreArticles ? articles : articles.slice(0, 3)

  const openArticleModal = (article: Article) => {
    setSelectedArticle(article)
  }

  const closeArticleModal = () => {
    setSelectedArticle(null)
  }

  const toggleShowMore = () => {
    setShowMoreArticles(!showMoreArticles)
  }

  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">Technical Articles</h2>
      
      <div className="space-y-3">
        {visibleArticles.map((article) => (
          <div
            key={article.id}
            className="bg-[#161B22] border border-gray-700 hover:border-gray-600 transition-colors rounded-lg p-3 cursor-pointer"
            onClick={() => openArticleModal(article)}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-md font-medium text-blue-400 mb-1 sm:mb-0 hover:underline">
                {article.title}
              </h3>
              <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                <span className="bg-[#30363D] text-[#8B949E] px-2 py-0.5 rounded text-xs font-medium flex items-center">
                  <span className="mr-1">{article.site.icon}</span>
                  {article.site.name}
                </span>
                <span className="flex items-center text-sm text-gray-400">
                  <span className="mr-1">👍</span>
                  {article.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        {!showMoreArticles && articles.length > 3 && (
          <div className="space-y-3">
            {articles.slice(3).map((article) => (
              <div
                key={article.id}
                className="bg-[#161B22] border border-gray-700 hover:border-gray-600 transition-colors rounded-lg p-3 cursor-pointer hidden"
                onClick={() => openArticleModal(article)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-md font-medium text-blue-400 mb-1 sm:mb-0 hover:underline">
                    {article.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                    <span className="bg-[#30363D] text-[#8B949E] px-2 py-0.5 rounded text-xs font-medium flex items-center">
                      <span className="mr-1">{article.site.icon}</span>
                      {article.site.name}
                    </span>
                    <span className="flex items-center text-sm text-gray-400">
                      <span className="mr-1">👍</span>
                      {article.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {articles.length > 3 && (
        <div className="mt-4 text-center">
          <button
            onClick={toggleShowMore}
            className="text-blue-400 hover:underline"
          >
            {showMoreArticles ? 'Show less' : 'Show more'}
          </button>
        </div>
      )}

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={closeArticleModal}
        />
      )}
    </div>
  )
}