// Hero — main introduction section with heading and CTA buttons
import { Button } from "@/components/ui/Button"

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 md:py-32 px-4">
      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-tight">
        Hi, I'm <span className="text-emerald-400">YourName</span>
        <br />
        <span className="text-zinc-200 mt-2 block">Junior Frontend Developer</span>
      </h1>

      {/* Short description */}
      <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
        Building responsive, modern, and interactive web interfaces.
        Second-year Software Engineering student.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a href="#projects">
          <Button>View My Projects</Button>
        </a>
        <a href="#about">
          <Button variant="outline">About Me</Button>
        </a>
      </div>
    </section>
  )
}
