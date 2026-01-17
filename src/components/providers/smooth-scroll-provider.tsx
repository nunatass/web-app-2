"use client"

import Lenis from "@studio-freight/lenis"
import { useEffect, useRef } from "react"

export function SmoothScrollProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const isSnapping = useRef(false)
	const hasSnappedDown = useRef(false)
	const hasSnappedUp = useRef(true)

	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		// Continuous scroll snap - only on desktop (768px+)
		lenis.on("scroll", ({ scroll, direction }: { scroll: number; direction: number }) => {
			// Disable snapping on mobile
			if (window.innerWidth < 768) return
			
			if (isSnapping.current) return

			const hero = document.getElementById("hero")
			const spendingFeatures = document.getElementById("spending-features")

			if (!hero || !spendingFeatures) return

			const heroHeight = hero.offsetHeight
			const scrollPercent = scroll / heroHeight

			// Scrolling DOWN - past 15% threshold, snap to spending features
			if (direction === 1 && scrollPercent >= 0.15 && scrollPercent < 0.9 && !hasSnappedDown.current) {
				isSnapping.current = true
				hasSnappedDown.current = true
				hasSnappedUp.current = false
				
				lenis.scrollTo(spendingFeatures, {
					duration: 0.8,
					onComplete: () => {
						isSnapping.current = false
					},
				})
			}
			// Scrolling UP - below 90% of hero height from spending section, snap back to hero
			else if (direction === -1 && scroll < heroHeight * 0.9 && scroll > 0 && !hasSnappedUp.current) {
				isSnapping.current = true
				hasSnappedUp.current = true
				hasSnappedDown.current = false
				
				lenis.scrollTo(0, {
					duration: 0.8,
					onComplete: () => {
						isSnapping.current = false
					},
				})
			}
			
			// Reset flags when fully at top or past hero
			if (scroll === 0) {
				hasSnappedDown.current = false
				hasSnappedUp.current = true
			} else if (scroll >= heroHeight) {
				hasSnappedUp.current = false
				hasSnappedDown.current = true
			}
		})

		return () => {
			lenis.destroy()
		}
	}, [])

	return <>{children}</>
}
