const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-darker/80 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg gradient-text">
          Ray Lao
        </a>
        <div className="flex gap-5 text-sm">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
            Experience
          </a>
          <a href="#credentials" className="text-gray-300 hover:text-white transition-colors">
            Credentials
          </a>
          <a
            href="https://github.com/raylao925"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
