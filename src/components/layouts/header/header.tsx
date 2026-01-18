"use client"

import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { AnimatedLogo } from "@/components/ui/animated-logo"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/ui/language-selector"

export function Header() {
	const t = useTranslations("common")
	const pathname = usePathname()
	
	// Check if we're on the home page (e.g., "/en" or "/pt")
	const isHomePage = pathname === "/en" || pathname === "/pt"

	return (
		<header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 md:px-10 lg:px-12">
			<nav className="flex items-center justify-between" aria-label="Main navigation">
				<AnimatedLogo />

				<div className="flex items-center gap-3">
					{/* Join Beta button - only show on home page, hidden on small screens */}
					{isHomePage && (
						<Button id="header-join-beta" variant="beta" className="hidden md:flex">
							<Link href="/download-app">{t("joinBeta")}</Link>
						</Button>
					)}

					<LanguageSelector />

					<Button id="header-login" variant="outline-primary">
						<Link href="/download-app">{t("login")}</Link>
					</Button>
				</div>
			</nav>
		</header>
	)
}
