import { motion } from 'framer-motion'

const groups = [
  {
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
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-dark/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="gradient-text">Software & Tools</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group, idx) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
