"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Counts the number inside `value` up from zero the first time it scrolls into view ("20+", "3×", "Top 10").
 * Renders the final value on the server, and skips the animation when the figure is already on screen
 * at load or the visitor prefers reduced motion.
 */
export function CountUp({ value, duration = 1200, className }: { value: string; duration?: number; className?: string }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  const target = match ? Number(match[2]) : 0
  const [shown, setShown] = useState(target)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !match) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setShown(0)
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          setShown(Math.round(target * (1 - Math.pow(1 - t, 3))))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration])

  return (
    <span ref={ref} className={className}>
      {match ? `${match[1]}${shown}${match[3]}` : value}
    </span>
  )
}
