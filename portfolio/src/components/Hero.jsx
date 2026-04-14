import { motion } from 'framer-motion'

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const title = "AI 方案 & 數據科學"

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
          從金融審計跨界至 AI 領域，結合嚴謹邏輯與創新技術，專注於機器學習、數據科學與AI方案。
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
            查看作品
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary/50 text-primary rounded-full font-semibold hover:bg-primary/10 transition-all"
          >
            了解更多
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
    </section>
  )
}

export default Hero