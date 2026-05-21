import React from "react"

export function ShinyText({ text, disabled = false, speed = 5, className = "" }) {
  const animationDuration = `${speed}s`

  return (
    <span
      className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-emerald-400 to-zinc-100 bg-[length:200%_auto] ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        animationDuration: disabled ? "0s" : animationDuration,
      }}
    >
      {text}
    </span>
  )
}
