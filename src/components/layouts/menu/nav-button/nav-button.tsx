"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { cn } from "@/lib/utils"
import type { NavItem } from "../types"
import { navButtonAnimations } from "./animations"

type NavButtonProps = {
	item: NavItem
	isActive: boolean
	onClick: () => void
}

export function NavButton({ item, isActive, onClick }: NavButtonProps) {
	const t = useTranslations("navigation")
	const hasIconOnly = item.icon && item.id === "home"

	const buttonClasses = cn(
		"flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-full",
		"transition-colors duration-200",
		"focus:outline-none focus:ring-2 focus:ring-black/30 focus:ring-inset",
		isActive ? "bg-[#86efac]/40 text-black" : "text-[#1c1c1c] hover:text-black hover:bg-[#86efac]/20",
		hasIconOnly && "px-3",
	)

	const content = hasIconOnly ? (
		item.icon
	) : (
		<>
			<span>{t(item.labelKey)}</span>
			{item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70 transition-transform duration-200" />}
		</>
	)

	// Always render as button to handle onClick properly
	// The parent (BottomNav) will handle navigation vs scrolling
	return (
		<motion.button
			type="button"
			onClick={onClick}
			{...navButtonAnimations.press}
			className={buttonClasses}
			aria-current={isActive ? "page" : undefined}
		>
			{content}
		</motion.button>
	)
}
