// Header — sticky navigation bar with logo and nav links
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md px-4">
      <div className="max-w-5xl mx-auto flex h-14 items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-white text-lg tracking-tight hover:opacity-90 transition-opacity">
          <span className="text-emerald-400">&lt;</span>
          YourName
          <span className="text-violet-500"> /&gt;</span>
        </a>

        {/* Navigation links */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projects</a>
        </nav>
      </div>
    </header>
  )
}
