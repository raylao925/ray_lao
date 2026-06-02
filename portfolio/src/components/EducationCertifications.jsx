import { motion } from 'framer-motion'

const EducationCertifications = () => {
  return (
    <section id="credentials" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal training in databases and logistics, reinforced by recent AI and networking certifications for practical delivery.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel rounded-3xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white">Education</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Sun Yat-sen University</p>
            <ul className="mt-5 space-y-3 text-sm text-[var(--color-muted)]">
              <li>
                <p className="font-medium text-white">Bachelor of IT - Computer Science (Database) (2016-2019)</p>
                <p className="mt-1">Relevant coursework: Data Warehousing, SQL Optimization</p>
              </li>
              <li>
                <p className="font-medium text-white">Bachelor of Logistics (2007-2011)</p>
                <p className="mt-1">Thesis: Supply Chain Cost Optimization Models</p>
              </li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="panel rounded-3xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--color-muted)]">
              <li className="rounded-2xl border border-[var(--color-line)] bg-[rgba(11,22,33,0.7)] px-4 py-3">
                HCIA AI (Huawei Certified, 2024)
              </li>
              <li className="rounded-2xl border border-[var(--color-line)] bg-[rgba(11,22,33,0.7)] px-4 py-3">
                HCIA Datacom (Huawei Certified, 2024)
              </li>
              <li className="rounded-2xl border border-[var(--color-line)] bg-[rgba(11,22,33,0.7)] px-4 py-3">
                Oracle 11g Administration (Oracle Certified, 2019)
              </li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default EducationCertifications
