// About — now with quickStats array and .map() rendering
import { Card, CardContent } from "@/components/ui/Card"
import { GraduationCap, Calendar, MapPin, Code2 } from "lucide-react"

export default function About() {
  // Array of data — we use .map() to render them dynamically
  const quickStats = [
    { icon: GraduationCap, label: "Education", value: "Software Engineering, B.S." },
    { icon: Calendar, label: "Current Year", value: "Semester 2 (Year 1)" },
    { icon: MapPin, label: "Location", value: "City Campus" },
    { icon: Code2, label: "Focus", value: "UI/UX & React Web" },
  ]

  return (
    <section id="about" className="py-20 border-t border-zinc-900 px-4 max-w-5xl mx-auto scroll-mt-10">
      <div className="flex flex-col gap-3 mb-10 text-center md:text-left">
        <span className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">Background</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Column 1: Biography */}
        <div className="space-y-6 text-zinc-400 leading-relaxed text-base">
          <p>
            Hello! I am a passionate Software Engineering student currently in my second semester.
            My journey into programming started with building basic websites, which quickly grew into
            an interest in dynamic frontend engineering.
          </p>
          <p>
            I love learning how to construct modular layouts, clean components, and intuitive interactions.
            My goal is to build web applications that are as visually engaging as they are structurally solid.
          </p>
          <p>
            Outside of university coursework, I spend my time exploring modern styling tools like
            Tailwind CSS, studying user interface designs, and working on personal projects with React.
          </p>
        </div>

        {/* Column 2: Info cards rendered with .map() */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickStats.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index}>
                <CardContent className="p-5 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{item.label}</h4>
                    <p className="text-sm font-semibold text-zinc-200 mt-0.5">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
