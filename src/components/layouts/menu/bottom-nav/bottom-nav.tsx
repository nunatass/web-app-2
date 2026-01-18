"use client"

import { ScrollButton } from "@/components/ui/scroll-button"
import { SupportButton } from "@/components/ui/support-button"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "@/i18n"
import { MenuButton, MobileMenu } from "../mobile-menu"
import { NavButton } from "../nav-button"
import { navItems } from "../nav-items"

interface BottomNavProps {
	forceGreenStyle?: boolean
}

export function BottomNav({ forceGreenStyle = false }: BottomNavProps) {
	const pathname = usePathname()
	const router = useRouter()
	const [activeItem, setActiveItem] = useState("home")
	const [useHeroStyle, setUseHeroStyle] = useState(!forceGreenStyle)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isInAbout, setIsInAbout] = useState(false)
	const [isFooterVisible, setIsFooterVisible] = useState(false)

	// Determine active item based on current pathname
	useEffect(() => {
		// Remove locale prefix from pathname
		const pathWithoutLocale = pathname.split('/').slice(2).join('/') || ''
		
		// Find matching nav item by href
		const matchingItem = navItems.find(item => {
			if (!item.href) return false
			const itemPath = item.href.replace(/^\//, '')
			return pathWithoutLocale === itemPath || pathname.endsWith(item.href)
		})

		if (matchingItem) {
			setActiveItem(matchingItem.id)
		} else {
			// Default to home if on home page or no match
			setActiveItem("home")
		}
	}, [pathname])

	// Detect active section on scroll for home page sections
	useEffect(() => {
		// Parse pathname to check if we're on home page
		const segments = pathname.split('/').filter(Boolean)
		const hasLocalePrefix = segments.length > 0 && ['en', 'pt'].includes(segments[0])
		const pathWithoutLocale = hasLocalePrefix ? segments.slice(1).join('/') : segments.join('/')
		const isHomePage = pathWithoutLocale === ''

		if (!isHomePage) return

		// Check if there's a stored section to scroll to (from navigation)
		const storedSection = sessionStorage.getItem('scrollToSection')
		if (storedSection) {
			sessionStorage.removeItem('scrollToSection')
			// Wait for Lenis to initialize
			const scrollToSection = () => {
				const section = document.getElementById(storedSection)
				if (section) {
					// Try to get Lenis instance from window
					const lenis = (window as any).lenis
					if (lenis) {
						// Use Lenis scrollTo for smooth scroll that respects the smooth scroll provider
						lenis.scrollTo(section, { 
							offset: 0,
							immediate: false,
							duration: 1.2
						})
					} else {
						// Fallback to native scroll if Lenis not available
						const yOffset = section.getBoundingClientRect().top + window.pageYOffset
						window.scrollTo({ top: yOffset, behavior: "smooth" })
					}
					
					// Update active item
					const matchingItem = navItems.find(item => item.sectionId === storedSection)
					if (matchingItem) {
						setActiveItem(matchingItem.id)
					}
				}
			}
			
			// Wait a bit for Lenis to initialize
			setTimeout(scrollToSection, 500)
			return // Exit early to prevent observer from running immediately
		}

		// Also check URL hash
		const hash = window.location.hash.replace('#', '')
		if (hash && !storedSection) {
			// Small delay to ensure DOM is ready
			setTimeout(() => {
				const section = document.getElementById(hash)
				if (section) {
					section.scrollIntoView({ behavior: "smooth" })
				}
			}, 100)
		}

		const observerOptions = {
			root: null,
			rootMargin: '-40% 0px -40% 0px', // Trigger when section is closer to center
			threshold: 0.1
		}

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			// Find the most visible section
			let mostVisibleEntry: IntersectionObserverEntry | null = null
			let maxRatio = 0
			
			entries.forEach(entry => {
				if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
					mostVisibleEntry = entry
					maxRatio = entry.intersectionRatio
				}
			})
			
			// Update active item based on most visible section
			if (mostVisibleEntry) {
				const sectionId = mostVisibleEntry.target.id
				const matchingItem = navItems.find(item => item.sectionId === sectionId)
				if (matchingItem) {
					setActiveItem(matchingItem.id)
				}
			}
		}

		const observer = new IntersectionObserver(observerCallback, observerOptions)

		// Observe all sections that have corresponding nav items
		navItems.forEach(item => {
			if (item.sectionId) {
				const section = document.getElementById(item.sectionId)
				if (section) {
					observer.observe(section)
				}
			}
		})

		return () => observer.disconnect()
	}, [pathname])

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

			setIsInAbout(false)
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		handleScroll()

		return () => window.removeEventListener("scroll", handleScroll)
	}, [forceGreenStyle])

	const handleNavClick = (itemId: string) => {
		setActiveItem(itemId)
		setIsMobileMenuOpen(false)

		const item = navItems.find(nav => nav.id === itemId)
		
		// Parse pathname to get locale and path
		const segments = pathname.split('/').filter(Boolean)
		const hasLocalePrefix = segments.length > 0 && ['en', 'pt'].includes(segments[0])
		const currentLocale = hasLocalePrefix ? segments[0] : 'en'
		const pathWithoutLocale = hasLocalePrefix ? segments.slice(1).join('/') : segments.join('/')
		const isHomePage = pathWithoutLocale === ''

		// Handle items with href (navigate to other pages)
		if (item?.href) {
			const targetPath = item.href.replace(/^\//, '')
			// Check if we're already on this page
			if (pathWithoutLocale === targetPath) {
				// Already on this page, do nothing
				return
			}
			// Navigate to the page
			window.location.href = `/${currentLocale}${item.href}`
			return
		}

		// Handle items with sectionId (scroll to sections on home page)
		if (item?.sectionId) {
			if (!isHomePage) {
				// Store the target section in sessionStorage
				sessionStorage.setItem('scrollToSection', item.sectionId)
				// Navigate to home
				window.location.href = `/${currentLocale}`
			} else {
				// Already on home page, just scroll to section
				const section = document.getElementById(item.sectionId)
				if (section) {
					section.scrollIntoView({ behavior: "smooth" })
				}
			}
		} else if (itemId === "home") {
			if (!isHomePage) {
				// Navigate to home page
				window.location.href = `/${currentLocale}`
			} else {
				// Already on home, scroll to top
				window.scrollTo({ top: 0, behavior: "smooth" })
			}
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
