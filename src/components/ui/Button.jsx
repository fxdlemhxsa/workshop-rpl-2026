import * as React from "react"
import { cn } from "@/lib/utils"

export function Button({ className, variant = "default", ...props }) {
  // Base classes for the button
  const baseStyles = "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 cursor-pointer h-10 px-4 py-2"
  
  // Style variations
  const variants = {
    default: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-md active:scale-98 transition-all",
    outline: "border border-zinc-800 bg-transparent hover:bg-zinc-900 text-zinc-100 active:scale-98 transition-all",
    ghost: "text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-100",
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  )
}
