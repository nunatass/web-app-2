"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

import { AnimatedLogo } from "@/components/ui/animated-logo"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/ui/language-selector"

export function Header() {
	const t = useTranslations("common")

	return (
		<header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 md:px-10 lg:px-12">
			<nav className="flex items-center justify-between" aria-label="Main navigation">
				<AnimatedLogo />

				<div className="flex items-center gap-3">
					<LanguageSelector className="hidden sm:flex" />

					<Button id="header-login" variant="outline">
						<Link href="/login">{t("login")}</Link>
					</Button>

					{/* Sign up button - hidden on very small screens */}
					<Button id="header-signup" variant="default" className="hidden sm:flex">
						<Link href="/signup">{t("signup")}</Link>
					</Button>
				</div>
			</nav>
		</header>
	)
}
