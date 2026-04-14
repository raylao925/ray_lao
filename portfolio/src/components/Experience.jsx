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
    <section id="experience" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          <span className="gradient-text">Experience Timeline</span>
        </h2>

        <div className="relative border-l border-primary/40 pl-8 space-y-8">
          {items.map((item, idx) => (
            <motion.article
              key={item.period}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[2.05rem] top-1 h-3 w-3 rounded-full bg-primary" />
              <p className="text-sm text-primary font-semibold">{item.period}</p>
              <h3 className="text-xl font-bold mt-1">{item.role}</h3>
              <p className="text-gray-300 mb-2">{item.company}</p>
              <ul className="text-gray-400 text-sm space-y-1">
                {item.highlights.map((line) => (
                  <li key={line}>- {line}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
