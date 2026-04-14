const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Ray Lao. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/raylao925"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ray-lao-22a0b6b9"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:raylao925@hotmail.com" className="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
