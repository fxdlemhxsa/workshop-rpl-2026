// Skills — dynamic rendering with arrays and .map()
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

export default function Skills() {
  // Array of skills — try adding your own!
  const skillsList = [
    { name: "HTML5 & CSS3", level: "Advanced" },
    { name: "Tailwind CSS v4", level: "Advanced" },
    { name: "JavaScript (ES6)", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Node.js", level: "Beginner" },
    { name: "SQLite / SQL", level: "Beginner" },
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "VS Code", level: "Advanced" },
  ]

  return (
    <section id="skills" className="py-20 border-t border-zinc-900 px-4 max-w-5xl mx-auto scroll-mt-10">
      {/* Section heading */}
      <div className="flex flex-col gap-3 mb-10 text-center">
        <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">Tech Stack</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Tools</h2>
        <p className="text-zinc-400 max-w-lg mx-auto">
          Technologies and tools I have been working with during my studies and side projects.
        </p>
      </div>

      {/* Skills grid — each card is rendered from the array using .map() */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsList.map((skill, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
              <span className="text-base font-semibold text-zinc-200">
                {skill.name}
              </span>
              <Badge className="bg-zinc-800 text-zinc-400 border-none text-[10px]">
                {skill.level}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
