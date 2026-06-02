import { motion } from 'framer-motion'

const keyPoints = [
  'LLM Product Prototyping',
  'Data Platform & Feature Pipelines',
  'FastAPI + Streamlit Delivery',
]

const statBlocks = [
  { label: 'Cross-domain Experience', value: '12+ Years' },
  { label: 'Current Focus', value: 'AI Solutions' },
  { label: 'Base', value: 'Macau / Remote' },
]

const Hero = () => {
  const profileImageUrl = `${import.meta.env.BASE_URL}image/profile.jpg`

  const lineVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="section-shell relative flex min-h-[100dvh] items-center pt-12">
      <div className="section-inner relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.14, delayChildren: 0.2 }}
          className="max-w-2xl"
        >
          <motion.p variants={lineVariants} className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            AI Modeling / Data Science / Backend Engineering
          </motion.p>

          <motion.h1 variants={lineVariants} className="mt-4 text-4xl font-semibold leading-[1.08] md:text-6xl md:leading-[1.05]">
            From <span className="gradient-text">Audit Precision</span> to Production-Grade AI Delivery
          </motion.h1>

          <motion.p variants={lineVariants} className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            我把財務審計的嚴謹邏輯，轉化成可落地的 AI 產品能力，專注於把模型、資料流程與後端服務整合為可運行方案。
          </motion.p>

          <motion.div variants={lineVariants} className="mt-8 flex flex-wrap gap-3">
            {keyPoints.map((point) => (
              <span key={point} className="chip rounded-full px-3 py-1.5 text-sm">
                {point}
              </span>
            ))}
          </motion.div>

          <motion.div variants={lineVariants} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary rounded-full px-6 py-3 text-sm font-semibold transition md:text-base">
              Explore Projects
            </a>
            <a href="#experience" className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold transition md:text-base">
              View Timeline
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="panel relative mx-auto w-full max-w-md overflow-hidden rounded-3xl p-6 md:p-8 lg:max-w-sm"
        >
          <div className="absolute right-0 top-0 h-32 w-32 -translate-y-10 translate-x-10 rounded-full bg-[rgba(63,212,190,0.22)] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-10 translate-y-10 rounded-full bg-[rgba(255,155,66,0.18)] blur-2xl" />

          <div className="relative mx-auto max-w-[16rem] md:max-w-[17rem]">
            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)]">
              <img
                src={profileImageUrl}
                alt="Ray Lao"
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.target.src = 'https://ui-avatars.com/api/?name=Ray+Lao&background=13465c&color=ffffff&size=512'
                }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-[var(--color-muted)]">
              <span className="rounded-full border border-[var(--color-line)] px-3 py-1">Available for Collaboration</span>
              <a
                href="https://www.linkedin.com/in/ray-lao-22a0b6b9/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[var(--color-accent)] transition hover:text-[#7ae5d5]"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {statBlocks.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[var(--color-line)] bg-[rgba(8,19,30,0.84)] px-4 py-3 text-center">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-[var(--color-line)]">
          <div className="mt-2 h-2.5 w-1 rounded-full bg-[var(--color-accent)]" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero