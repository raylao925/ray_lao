import { motion } from 'framer-motion'

const items = [
  {
    period: '2023 - Present',
    role: 'Manager (AI Solution / Data Analysis)',
    company: 'Wynn Macau',
    highlights: [
      'Lead a high-performing data and AI team to design, deploy, and optimize predictive ML models (e.g., XGBoost) that improve casino forecasting accuracy and strategic decision-making.',
      'Architect feature engineering pipelines across SQL Server, MongoDB, and ClickHouse to provide scalable, high-quality data for CRM and analytics use cases.',
      'Automate end-to-end ML workflows with Kubeflow and MLflow, standardizing training, deployment, and monitoring while shortening time-to-production.',
      'Own executive dashboards for key CRM KPIs (Retention, GGR, betting behavior, pit revenue), empowering leadership with timely, data-driven insights.',
    ],
  },
  {
    period: '2016 - 2023',
    role: 'Junior Data Analyst -> Assistant Manager',
    company: 'Wynn Macau',
    highlights: [
      'Delivered KPI and campaign reinvestment analytics for decision support.',
      'Built reusable SQL templates and reporting standards for team efficiency.',
    ],
  },
  {
    period: '2014 - 2016',
    role: 'Buyer',
    company: 'Wynn Palace',
    highlights: [
      'Supported procurement and process operations with cross-team coordination.',
      'Strengthened execution discipline through process optimization.',
    ],
  },
  {
    period: '2012 - 2014',
    role: 'Internal Auditor',
    company: 'Galaxy Entertainment Group',
    highlights: [
      'Built a strong foundation in controls, process rigor, and operations.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-title">
            Experience <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle">
            從內部審計到 AI 方案管理，我持續把流程控制、資料洞察與技術實作整合為可衡量的商業成果。
          </p>
        </motion.div>

        <div className="relative mt-12 space-y-8 md:space-y-10">
          <motion.div
            className="absolute left-3 top-0 h-full w-px origin-top bg-[var(--color-line)] md:left-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {items.map((item, idx) => (
            <motion.article
              key={item.period}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -26 : 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className={`relative ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                idx % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
              }`}
            >
              <span
                className={`absolute top-7 h-3 w-3 rounded-full border border-[#06121d] bg-[var(--color-accent)] ${
                  idx % 2 === 0
                    ? 'left-[-1.88rem] md:left-auto md:right-[-1.7rem]'
                    : 'left-[-1.88rem] md:left-[-1.7rem]'
                }`}
              />

              <div className="panel rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{item.company}</p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.highlights.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
