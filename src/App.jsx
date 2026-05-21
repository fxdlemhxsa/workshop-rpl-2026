import React from "react"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

function App() {
  return (
    <div>
      {/* Header Sticky Navigation Bar */}
      <Header />

      {/* Main grid shell mapping sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      {/* Standard copyright and credits footer */}
      <Footer />
    </div>
  )
}

export default App
