"use client"

import { ScrollButton } from "@/components/ui/scroll-button"
import { SupportButton } from "@/components/ui/support-button"
import { useEffect, useState } from "react"
import { MenuButton, MobileMenu } from "../mobile-menu"
import { NavButton } from "../nav-button"
import { navItems } from "../nav-items"

interface BottomNavProps {
	forceGreenStyle?: boolean
}

export function BottomNav({ forceGreenStyle = false }: BottomNavProps) {
	const [activeItem, setActiveItem] = useState("home")
	const [useHeroStyle, setUseHeroStyle] = useState(!forceGreenStyle)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isInAbout, setIsInAbout] = useState(false)
	const [isFooterVisible, setIsFooterVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY

			// Change style as soon as user scrolls even slightly (50px threshold)
			// If forceGreenStyle is true, always use green (not hero) style
			const isOnHero = forceGreenStyle ? false : scrollY < 50
			setUseHeroStyle(isOnHero)

			// Check if footer is visible
			const footer = document.querySelector("footer")
			if (footer) {
				const footerRect = footer.getBoundingClientRect()
				const windowHeight = window.innerHeight
				// Hide nav when footer top is within 100px of viewport bottom
				setIsFooterVisible(footerRect.top < windowHeight - 100)
			}

			setActiveItem("home")
			setIsInAbout(false)
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
			{/* Desktop Navigation - Hidden when footer is visible */}
			<div 
				className={`fixed bottom-3 left-0 right-0 z-50 px-6 md:px-10 lg:px-12 hidden md:block transition-all duration-300 ${
					isFooterVisible ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0"
				}`}
			>
				<div className="flex items-center justify-between">
					{/* Scroll Button - Desktop only, visible only on hero */}
					{/* Wrapper maintains space for layout even when button is hidden */}
					<div className="min-w-[100px]">
						<ScrollButton
							visible={useHeroStyle}
							useHeroStyle={useHeroStyle}
							onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
						/>
					</div>

					{/* Navigation */}
					<nav
						className={`flex items-center p-1 rounded-full backdrop-blur-sm transition-all duration-300 ${
							useHeroStyle 
								? "bg-white/[0.08]" 
								: "bg-[hsl(154,70%,50%)] shadow-lg"
						}`}
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

			{/* Mobile Navigation - Hidden when footer is visible */}
			<div className="md:hidden">
				{/* Mobile Menu Button - Fixed at bottom, aligned with support button */}
				<div 
					className={`fixed bottom-6 left-0 right-0 z-[70] px-6 transition-all duration-300 ${
						isFooterVisible ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0"
					}`}
				>
					<div className="flex items-center justify-center">
						<MenuButton
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							isOnHero={useHeroStyle}
							useFullGreen={isInAbout}
						/>
					</div>
				</div>

				{/* Support Button - Mobile (fixed position) - Hidden when footer is visible */}
				<div 
					className={`fixed bottom-6 right-6 z-30 transition-all duration-300 ${
						isFooterVisible ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0"
					}`}
				>
					<SupportButton variant="mobile" useHeroStyle={useHeroStyle} />
				</div>

				{/* Full Screen Mobile Menu */}
				<MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
			</div>
		</>
	)
}
