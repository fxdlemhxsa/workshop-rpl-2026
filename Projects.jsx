// Projects — card grid with tech badges and responsive layout
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

export default function Projects() {
  // Project data — try adding your own project here!
  const projects = [
    {
      title: "Semester Task Planner",
      description: "A React dashboard designed for university students to track coursework, deadlines, and study session slots.",
      tech: ["React.js", "Tailwind CSS", "LocalStorage"],
    },
    {
      title: "Campus Library Manager",
      description: "A web dashboard for cataloging books, checking availability, and filtering listings by subject category.",
      tech: ["JavaScript", "HTML5", "CSS Grid"],
    },
    {
      title: "Local Weather Dashboard",
      description: "A responsive weather display UI utilizing CSS variables, weather status indicators, and location shortcuts.",
      tech: ["React.js", "CSS Flexbox", "Lucide Icons"],
    },
  ]

  return (
    <section id="projects" className="py-20 border-t border-zinc-900 px-4 max-w-5xl mx-auto scroll-mt-10">
      {/* Section heading */}
      <div className="flex flex-col gap-3 mb-12 text-center">
        <span className="text-violet-400 font-semibold uppercase tracking-wider text-sm">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
        <p className="text-zinc-400 max-w-lg mx-auto">
          Hand-picked programming assignments and side projects built to demonstrate key software skills.
        </p>
      </div>

      {/* Project cards — responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((tag) => (
                  <Badge key={tag} className="bg-zinc-800/80 text-zinc-300 border-none text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-lg">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-zinc-400 text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
