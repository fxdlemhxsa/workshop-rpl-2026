// Footer — simple styled footer with copyright
export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-xs text-zinc-500">
      <div className="max-w-5xl mx-auto px-4">
        <p>© {new Date().getFullYear()} YourName. Design with love & coffee.</p>
      </div>
    </footer>
  )
}
