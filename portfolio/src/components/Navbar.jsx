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
          <a
            href="https://github.com/raylao925"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-line)] px-4 py-2 text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            GitHub
          </a>
        </div>

        <a
          href="#projects"
          className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-sm text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:hidden"
        >
          Projects
        </a>
      </nav>
    </header>
  )
}

export default Navbar
