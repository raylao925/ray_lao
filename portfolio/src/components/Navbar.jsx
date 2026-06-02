<<<<<<< HEAD
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
=======
const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[#07111bcc]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">
          Ray <span className="gradient-text">Lao</span>
        </a>

        <div className="hidden items-center gap-5 text-sm text-[var(--color-muted)] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
>>>>>>> main
          <a
            href="https://github.com/raylao925"
            target="_blank"
            rel="noreferrer"
<<<<<<< HEAD
            className="text-gray-300 hover:text-white transition-colors"
=======
            className="rounded-full border border-[var(--color-line)] px-4 py-2 text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
>>>>>>> main
          >
            GitHub
          </a>
        </div>
<<<<<<< HEAD
=======

        <a
          href="#projects"
          className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-sm text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:hidden"
        >
          Projects
        </a>
>>>>>>> main
      </nav>
    </header>
  )
}

export default Navbar
