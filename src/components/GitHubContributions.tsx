export default function GitHubContributions() {
  const days = Array.from({ length: 35 }, () =>
    Math.floor(Math.random() * 5)
  )

  const colors = [
    'bg-gray-200',
    'bg-green-200',
    'bg-green-400',
    'bg-green-600',
    'bg-green-800'
  ]

  return (
    <section className="my-4">
      <h2 className="text-xl font-bold mb-2">GitHub Contributions</h2>
      <div className="grid grid-cols-7 gap-1">
        {days.map((level, idx) => (
          <div key={idx} className={`w-3 h-3 ${colors[level]}`}></div>
        ))}
      </div>
    </section>
  )
}
