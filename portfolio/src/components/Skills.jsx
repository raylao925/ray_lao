import { motion } from 'framer-motion'

const groups = [
  {
<<<<<<< HEAD
    title: 'AI / ML',
    items: ['XGBoost', 'Feature Engineering', 'Model Monitoring', 'Experiment Tracking'],
  },
  {
    title: 'Data Engineering',
    items: ['SQL Server', 'MongoDB', 'ClickHouse', 'ETL / Data Pipelines'],
  },
  {
    title: 'MLOps / Platform',
    items: ['Kubeflow', 'MLflow', 'FastAPI', 'GitHub Actions'],
  },
  {
    title: 'Analytics / BI',
    items: ['Power BI', 'CRM KPI Dashboard', 'Retention Analysis', 'GGR / Revenue Analytics'],
=======
    title: 'AI / Machine Learning',
    items: ['XGBoost', 'Feature Engineering', 'Model Monitoring', 'Experiment Tracking', 'Prompt Design'],
  },
  {
    title: 'Data Engineering',
    items: ['SQL Server', 'MongoDB', 'ClickHouse', 'ETL Pipelines', 'Data Quality Controls'],
  },
  {
    title: 'MLOps / Platform Delivery',
    items: ['Kubeflow', 'MLflow', 'FastAPI', 'GitHub Actions', 'Model Deployment'],
  },
  {
    title: 'Analytics / Business Intelligence',
    items: ['Power BI', 'CRM KPI Dashboards', 'Retention Analysis', 'GGR Analytics', 'Executive Storytelling'],
>>>>>>> main
  },
]

const Skills = () => {
  return (
<<<<<<< HEAD
    <section id="skills" className="py-20 px-4 md:px-8 bg-dark/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="gradient-text">Software & Tools</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
=======
    <section id="skills" className="section-shell bg-[rgba(8,16,25,0.55)]">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-title">
            Software <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle">
            Tooling is selected for one goal: shorten the path from idea to validated AI solution, while keeping models observable and maintainable.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
>>>>>>> main
          {groups.map((group, idx) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-xl border border-slate-700 bg-slate-900/60 p-5"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full border border-slate-600 text-gray-200"
                  >
=======
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="panel rounded-3xl p-6"
            >
              <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip rounded-full px-3 py-1 text-sm">
>>>>>>> main
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
