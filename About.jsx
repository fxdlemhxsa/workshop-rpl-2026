// About — section with biography and two-column layout
export default function About() {
  return (
    <section id="about" className="py-20 border-t border-zinc-900 px-4 max-w-5xl mx-auto scroll-mt-10">
      {/* Section heading */}
      <div className="flex flex-col gap-3 mb-10 text-center md:text-left">
        <span className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">Background</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
      </div>

      {/* Two-column grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Column 1: Biography text */}
        <div className="space-y-6 text-zinc-400 leading-relaxed text-base">
          <p>
            Hello! I am a passionate Software Engineering student currently in my second semester.
            My journey into programming started with building basic websites.
          </p>
          <p>
            I love learning how to construct modular layouts, clean components, and intuitive interactions.
            My goal is to build web applications that are visually engaging and structurally solid.
          </p>
        </div>

        {/* Column 2: Placeholder for info cards (will be added in Step 3) */}
        <div className="text-zinc-500 text-sm border border-dashed border-zinc-800 rounded-xl p-8 text-center">
          Info cards will be added here in the next step...
        </div>
      </div>
    </section>
  )
}
