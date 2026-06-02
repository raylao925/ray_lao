import { motion } from 'framer-motion'

<<<<<<< HEAD
const Hero = () => {
  const profileImageUrl = `${import.meta.env.BASE_URL}image/profile.jpg`

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
=======
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
>>>>>>> main
    visible: {
      opacity: 1,
      y: 0,
      transition: {
<<<<<<< HEAD
        duration: 0.5,
        ease: "easeOut",
=======
        duration: 0.55,
        ease: 'easeOut',
>>>>>>> main
      },
    },
  }

<<<<<<< HEAD
  const title = "AI Solutions & Data Science"

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darker">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/30">
            <img 
              src={profileImageUrl}
              alt="Ray Lao" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Ray+Lao&background=0ea5e9&color=fff&size=128'
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">Ray Lao</span>
        </motion.h1>

        {/* Animated Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-4xl font-semibold mb-6 h-16"
        >
          {title.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Transitioned from financial audit into AI, combining rigorous analytical thinking with engineering execution across machine learning, data science, and AI solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary/50 text-primary rounded-full font-semibold hover:bg-primary/10 transition-all"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
=======
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
>>>>>>> main
    </section>
  )
}

export default Hero