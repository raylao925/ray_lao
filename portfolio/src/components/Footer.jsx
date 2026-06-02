const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="border-t border-slate-800 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Ray Lao. All rights reserved.</p>
        <div className="flex gap-4">
=======
    <footer id="contact" className="section-shell border-t border-[var(--color-line)] py-12">
      <div className="section-inner flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-semibold text-white">
            Let&apos;s build the next <span className="gradient-text">AI product</span> together.
          </p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">© {new Date().getFullYear()} Ray Lao. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
>>>>>>> main
          <a
            href="https://github.com/raylao925"
            target="_blank"
            rel="noreferrer"
<<<<<<< HEAD
            className="hover:text-white transition-colors"
=======
            className="btn-secondary rounded-full px-4 py-2 font-medium transition"
>>>>>>> main
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ray-lao-22a0b6b9"
            target="_blank"
            rel="noreferrer"
<<<<<<< HEAD
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:raylao925@hotmail.com" className="hover:text-white transition-colors">
=======
            className="btn-secondary rounded-full px-4 py-2 font-medium transition"
          >
            LinkedIn
          </a>
          <a href="mailto:raylao925@hotmail.com" className="btn-primary rounded-full px-4 py-2 font-semibold transition">
>>>>>>> main
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
