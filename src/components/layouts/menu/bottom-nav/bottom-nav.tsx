"use client"

import { ScrollButton } from "@/components/ui/scroll-button"
import { SupportButton } from "@/components/ui/support-button"
import { useEffect, useState } from "react"
import { MenuButton, MobileMenu } from "../mobile-menu"
import { NavButton } from "../nav-button"
import { navItems } from "../nav-items"

export function BottomNav() {
	const [activeItem, setActiveItem] = useState("home")
	const [useHeroStyle, setUseHeroStyle] = useState(true)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isInAbout, setIsInAbout] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const appSection = document.getElementById("app")
			const aboutSection = document.getElementById("about")
			const unifySection = document.getElementById("unify")
			const scrollY = window.scrollY

			// Check About section
			if (aboutSection) {
				const aboutRect = aboutSection.getBoundingClientRect()
				const isInAboutSection = aboutRect.top < window.innerHeight && aboutRect.bottom > 0

				if (isInAboutSection) {
					setActiveItem("about")
					setUseHeroStyle(true)
					setIsInAbout(true)
					return
				}
			}
			setIsInAbout(false)

			// Check App section
			if (appSection) {
				const appRect = appSection.getBoundingClientRect()
				const isInApp = appRect.top < window.innerHeight && appRect.bottom > 0

				if (isInApp) {
					setActiveItem("app")
					setUseHeroStyle(true)
					return
				}
			}

			// Check Unify section (white background)
			if (unifySection) {
				const unifyRect = unifySection.getBoundingClientRect()
				const isInUnify = unifyRect.top < window.innerHeight * 0.7 && unifyRect.bottom > window.innerHeight * 0.3

				if (isInUnify) {
					setActiveItem("home")
					setUseHeroStyle(false)
					return
				}
			}

			// Default to Hero section
			const heroHeight = window.innerHeight
			const isOnHero = scrollY < heroHeight * 0.8
			setActiveItem("home")
			setUseHeroStyle(isOnHero)
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		handleScroll()

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const handleNavClick = (itemId: string) => {
		setActiveItem(itemId)
		setIsMobileMenuOpen(false)

		const item = navItems.find(nav => nav.id === itemId)
		if (item?.sectionId) {
			const section = document.getElementById(item.sectionId)
			if (section) {
				section.scrollIntoView({ behavior: "smooth" })
			}
		} else if (itemId === "home") {
			window.scrollTo({ top: 0, behavior: "smooth" })
		}
	}

	return (
		<>
			{/* Desktop Navigation - Always visible and fixed */}
			<div className="fixed bottom-3 left-0 right-0 z-50 px-6 md:px-10 lg:px-12 hidden md:block">
				<div className="flex items-center justify-between">
					{/* Scroll Button - Desktop only */}
					<ScrollButton
						visible={true}
						onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
					/>

					{/* Navigation */}
					<nav
						className="flex items-center p-1 rounded-full bg-white/[0.08] backdrop-blur-sm transition-colors duration-300"
						aria-label="Page sections"
					>
						{navItems.map(item => (
							<NavButton
								key={item.id}
								item={item}
								isActive={activeItem === item.id}
								onClick={() => handleNavClick(item.id)}
							/>
						))}
					</nav>

					{/* Support Button - Desktop */}
					<SupportButton variant="desktop" useHeroStyle={useHeroStyle} />
				</div>
			</div>

			{/* Mobile Navigation - Always visible, fixed position */}
			<div className="md:hidden">
				{/* Mobile Menu Button - Fixed at bottom, aligned with support button */}
				<div className="fixed bottom-6 left-0 right-0 z-[70] px-6">
					<div className="flex items-center justify-center">
						<MenuButton
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							isOnHero={useHeroStyle}
							useFullGreen={isInAbout}
						/>
					</div>
				</div>

				{/* Support Button - Mobile (fixed position) */}
				<div className="fixed bottom-6 right-6 z-30">
					<SupportButton variant="mobile" useHeroStyle={useHeroStyle} />
				</div>

				{/* Full Screen Mobile Menu */}
				<MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
			</div>
		</>
	)
}
