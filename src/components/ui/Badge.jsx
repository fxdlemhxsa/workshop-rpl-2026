import * as React from "react"
import { cn } from "@/lib/utils"

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-700 bg-zinc-850 px-2.5 py-0.5 text-xs font-medium text-zinc-300 transition-colors",
        className
      )}
      {...props}
    />
  )
}
