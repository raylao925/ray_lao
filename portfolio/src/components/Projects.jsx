import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const GITHUB_USERNAME = 'raylao925'

const featuredProjects = [
  {
    name: 'AgentML',
    summary: 'An AI agent project focused on building practical machine learning workflows and intelligent automation capabilities.',
    stack: ['Agent System', 'Machine Learning', 'Automation'],
    focus: 'Open-source AI engineering',
    url: 'https://github.com/raylao925/AgentML',
    linkLabel: 'View GitHub Repo',
  },
  {
    name: 'AidSupplyGo',
    summary: 'A live AI-powered project experience deployed on Vercel, designed for real-world usability and fast iteration.',
    stack: ['Vercel', 'Web App', 'AI Workflow'],
    focus: 'Production-ready app delivery',
    url: 'https://aidsupplygo.vercel.app/',
    linkLabel: 'Open Live Demo',
  },
  {
    name: 'SolvePal AI',
    summary: 'An AI assistant-style product demo built for rapid solutioning and conversational support scenarios.',
    stack: ['AI Assistant', 'Product Demo', 'Web Experience'],
    focus: 'Conversational AI application',
    url: 'https://solvepal-ai.lovable.app/',
    linkLabel: 'Open Live Demo',
  },
]

const modeConfig = [
  { value: 'featured', label: 'Featured Cases' },
  { value: 'github', label: 'Live GitHub Feed' },
]

const formatDate = (isoDate) => {
  if (!isoDate) {
    return 'Unknown update date'
  }

  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const fetchRepositories = async () => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=owner`,
  )

  if (!response.ok) {
    throw new Error('GitHub repositories are currently unavailable.')
  }

  const data = await response.json()
  if (!Array.isArray(data)) {
    return []
  }

  return data
    .filter((repo) => !repo.fork)
    .filter((repo) => repo.name.toLowerCase() !== 'ray_lao')
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 12)
}

const Projects = () => {
  const [mode, setMode] = useState('featured')
  const [repos, setRepos] = useState([])
  const [languageFilter, setLanguageFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadRepos = async () => {
    setLoading(true)
    setError('')
    try {
      const repositories = await fetchRepositories()
      setRepos(repositories)
    } catch (requestError) {
      setRepos([])
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadRepos()
  }, [])

  const languages = ['all', ...new Set(repos.map((repo) => repo.language).filter(Boolean))]
  const displayedRepos =
    languageFilter === 'all' ? repos : repos.filter((repo) => repo.language === languageFilter)

  return (
    <section id="projects" className="section-shell relative">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-title">
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="section-subtitle">
            精選專案展示我如何把模型思維、資料工程與產品交付串成完整流程，同步提供 GitHub 即時倉庫動態。
          </p>

          <div className="mt-8 flex flex-wrap gap-3 rounded-2xl border border-[var(--color-line)] bg-[rgba(8,17,27,0.72)] p-2">
            {modeConfig.map((item) => {
              const isActive = mode === item.value
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setMode(item.value)}
                  className={`relative rounded-xl px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'text-[#08131f]' : 'text-[var(--color-muted)] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mode-highlight"
                      className="absolute inset-0 rounded-xl bg-[var(--color-accent)]"
                      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {mode === 'featured' ? (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -6 }}
                  className="panel rounded-3xl p-6"
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {project.focus}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="chip rounded-full px-2.5 py-1 text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--color-accent)] transition hover:text-[#8be8dc]"
                  >
                    {project.linkLabel}
                  </a>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="github"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mt-8"
            >
              <div className="mb-6 flex flex-wrap gap-2">
                {languages.map((language) => {
                  const active = languageFilter === language
                  return (
                    <button
                      key={language}
                      type="button"
                      onClick={() => setLanguageFilter(language)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                        active
                          ? 'bg-[var(--color-accent)] text-[#07121e]'
                          : 'chip hover:border-[var(--color-accent)] hover:text-white'
                      }`}
                    >
                      {language === 'all' ? 'All Languages' : language}
                    </button>
                  )
                })}
              </div>

              {loading && (
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="panel rounded-3xl p-5">
                      <div className="skeleton h-4 w-2/3 rounded" />
                      <div className="skeleton mt-3 h-3 w-full rounded" />
                      <div className="skeleton mt-2 h-3 w-5/6 rounded" />
                      <div className="skeleton mt-5 h-3 w-1/2 rounded" />
                    </div>
                  ))}
                </div>
              )}

              {!loading && error && (
                <div className="panel rounded-3xl p-6 text-center">
                  <p className="text-base text-[var(--color-muted)]">{error}</p>
                  <button
                    type="button"
                    onClick={loadRepos}
                    className="btn-secondary mt-4 rounded-full px-5 py-2.5 text-sm font-semibold transition"
                  >
                    Retry
                  </button>
                </div>
              )}

              {!loading && !error && displayedRepos.length === 0 && (
                <div className="panel rounded-3xl p-6 text-center">
                  <p className="text-base text-[var(--color-muted)]">No repositories found for this filter yet.</p>
                </div>
              )}

              {!loading && !error && displayedRepos.length > 0 && (
                <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {displayedRepos.map((repo) => (
                    <motion.article
                      key={repo.id}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      whileHover={{ y: -6 }}
                      className="panel rounded-3xl p-5"
                    >
                      <h3 className="text-xl font-semibold text-white">{repo.name}</h3>
                      <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed text-[var(--color-muted)]">
                        {repo.description || 'Repository details are available on GitHub.'}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 text-xs">
                        <span className="chip rounded-full px-2.5 py-1">Star {repo.stargazers_count}</span>
                        <span className="chip rounded-full px-2.5 py-1">{repo.language || 'Language N/A'}</span>
                        <span className="chip rounded-full px-2.5 py-1">Updated {formatDate(repo.pushed_at)}</span>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex text-sm font-semibold text-[var(--color-accent)] transition hover:text-[#8be8dc]"
                      >
                        View Source
                      </a>
                    </motion.article>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
