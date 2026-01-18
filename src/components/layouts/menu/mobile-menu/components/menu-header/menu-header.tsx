"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { AnimatedLogo } from "@/components/ui/animated-logo"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/ui/language-selector"
import { menuHeaderAnimations } from "./animations"

export function MenuHeader() {
	const t = useTranslations("common")

	return (
		<div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-6 py-4 bg-[hsl(154,70%,50%)]">
			{/* Logo - same as hero */}
			<motion.div variants={menuHeaderAnimations.logo} initial="hidden" animate="visible" exit="exit">
				<AnimatedLogo />
			</motion.div>

			{/* Right side buttons */}
			<motion.div
				variants={menuHeaderAnimations.buttons}
				initial="hidden"
				animate="visible"
				exit="exit"
				className="flex items-center gap-2"
			>
				<LanguageSelector />
				<Button id="menu-login" variant="outline">
					<Link href="/download-app">{t("login")}</Link>
				</Button>
			</motion.div>
		</div>
	)
}
