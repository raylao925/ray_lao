import { motion } from 'framer-motion'

const EducationCertifications = () => {
  return (
    <section id="credentials" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-slate-700 bg-slate-900/60 p-6"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <h3 className="text-xl font-semibold mb-3">Sun Yat-sen University</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <p className="font-medium">Bachelor of IT - Computer Science (Database) (2016-2019)</p>
              <p className="text-sm text-gray-400">Relevant Coursework: Data Warehousing, SQL Optimization</p>
            </li>
            <li>
              <p className="font-medium">Bachelor of Logistics (2007-2011)</p>
              <p className="text-sm text-gray-400">Thesis: Supply Chain Cost Optimization Models</p>
            </li>
          </ul>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-slate-700 bg-slate-900/60 p-6"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>HCIA AI (Huawei Certified, 2024)</li>
            <li>HCIA Datacom (Huawei Certified, 2024)</li>
            <li>Oracle 11g Administration (Oracle Certified, 2019)</li>
          </ul>
        </motion.article>
      </div>
    </section>
  )
}

export default EducationCertifications
