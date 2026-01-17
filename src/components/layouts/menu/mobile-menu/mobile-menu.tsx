"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import { mobileMenuAnimations } from "./animations"
import { MenuContent, MenuHeader } from "./components"

export type MobileMenuProps = {
	isOpen: boolean
	onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	const [useHeroStyle, setUseHeroStyle] = useState(true)
	const [isInAbout, setIsInAbout] = useState(false)

	// Lock body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}

		return () => {
			document.body.style.overflow = ""
		}
	}, [isOpen])

	useEffect(() => {
		const handleScroll = () => {
			const appSection = document.getElementById("app")
			const aboutSection = document.getElementById("about")

			// Check if we're in App section
			if (appSection) {
				const appRect = appSection.getBoundingClientRect()
				const isInApp = appRect.top < window.innerHeight && appRect.bottom > 0
				if (isInApp) {
					setUseHeroStyle(true)
					setIsInAbout(false)
					return
				}
			}

			// Check if we're in About section
			if (aboutSection) {
				const aboutRect = aboutSection.getBoundingClientRect()
				const isInAboutSection = aboutRect.top < window.innerHeight && aboutRect.bottom > 0
				if (isInAboutSection) {
					setUseHeroStyle(true)
					setIsInAbout(true)
					return
				}
			}

			// Check if we're on Hero
			const heroHeight = window.innerHeight
			const isOnHero = window.scrollY < heroHeight * 0.8
			setUseHeroStyle(isOnHero)
			setIsInAbout(false)
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		handleScroll()

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	// Close menu when resizing to desktop
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isOpen) {
				onClose()
			}
		}

		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [isOpen, onClose])

	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<motion.div
					key="mobile-menu"
					variants={mobileMenuAnimations.overlay}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="fixed inset-0 z-[60] bg-[hsl(154,70%,50%)] overflow-y-auto md:hidden"
				>
					<MenuHeader />
					<MenuContent onItemClick={onClose} />
				</motion.div>
			)}
		</AnimatePresence>
	)
}
