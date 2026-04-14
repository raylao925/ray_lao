import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/raylao925/repos?sort=updated&per_page=30&type=owner')
      .then((res) => res.json())
      .then((ownedData) => {
        const owned = Array.isArray(ownedData) ? ownedData : []
        return fetch('https://api.github.com/users/raylao925/repos?sort=updated&per_page=30&type=all')
          .then((res) => res.json())
          .then((allData) => {
            const allRepos = Array.isArray(allData) ? allData : []
            return [...owned, ...allRepos]
          })
      })
      .then((data) => {
        const portfolioRepos = Array.isArray(data)
          ? data
              .filter((repo, index, arr) => arr.findIndex((x) => x.id === repo.id) === index)
              .filter((repo) => !repo.fork)
              .filter((repo) => repo.name.toLowerCase() !== 'ray_lao')
          : []
        setRepos(portfolioRepos.slice(0, 12))
      })
      .catch(() => {
        setRepos([])
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-dark/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="gradient-text">Projects Showcase</span>
        </h2>

        {loading ? (
          <p className="text-gray-400">Loading repositories...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <motion.article
                key={repo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-5 border border-slate-700 rounded-xl bg-slate-900/70 hover:shadow-xl transition-shadow"
              >
                <h3 className="font-bold text-xl">{repo.name}</h3>
                <p className="text-gray-400 my-2">
                  {repo.description || '點擊查看項目細節'}
                </p>
                <div className="flex gap-4 text-sm font-mono text-gray-300">
                  <span>STAR {repo.stargazers_count}</span>
                  <span>LANG {repo.language || 'N/A'}</span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary mt-4 inline-block font-semibold"
                >
                  View Code →
                </a>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
