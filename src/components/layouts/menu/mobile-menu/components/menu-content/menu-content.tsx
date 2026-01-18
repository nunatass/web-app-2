"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { ArrowUpRightIcon, ChevronDownIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import { type NavItem, navItems } from "../../nav-items"
import { menuContentAnimations } from "./animations"

type MenuContentProps = {
	onItemClick?: () => void
}

const totalItems = navItems.length

export function MenuContent({ onItemClick }: MenuContentProps) {
	const [activeItem, setActiveItem] = useState("home")

	const handleNavClick = (item: NavItem) => {
		setActiveItem(item.id)

		// Close menu
		onItemClick?.()

		// If item has href, navigate to it
		if (item.href) {
			window.location.href = item.href
			return
		}

		setTimeout(() => {
			if (item.sectionId) {
				const section = document.getElementById(item.sectionId)
				if (section) {
					section.scrollIntoView({ behavior: "smooth" })
				}
			} else if (item.id === "home") {
				window.scrollTo({ top: 0, behavior: "smooth" })
			}
		}, 300)
	}

	const itemVariants = menuContentAnimations.item(totalItems)

	return (
		<div className="px-6 pb-32">
			<nav className="space-y-2">
				{navItems.map((item, index) => (
					<MenuNavItem
						key={item.id}
						item={item}
						isActive={activeItem === item.id}
						itemIndex={index}
						variants={itemVariants}
						onClick={() => handleNavClick(item)}
					/>
				))}
			</nav>
		</div>
	)
}

type MenuNavItemProps = {
	item: NavItem
	isActive: boolean
	itemIndex: number
	variants: any
	onClick: () => void
}

function MenuNavItem({ item, isActive, itemIndex, variants, onClick }: MenuNavItemProps) {
	const t = useTranslations("navigation")

	return (
		<motion.button
			type="button"
			onClick={onClick}
			variants={variants}
			initial="hidden"
			animate="visible"
			exit="exit"
			custom={itemIndex}
			{...menuContentAnimations.hover}
			className={cn(
				"w-full flex items-center gap-4 px-4 py-4 rounded-2xl",
				"transition-colors duration-200",
				isActive ? "bg-[#86efac]/20" : "hover:bg-[#86efac]/10",
			)}
		>
			{item.icon && (
				<div className="w-10 h-10 rounded-xl bg-[#86efac]/30 flex items-center justify-center text-black">
					{item.icon}
				</div>
			)}
			<span className={cn("font-medium flex-1 text-left text-lg", isActive ? "text-black" : "text-[#1c1c1c]")}>
				{t(item.labelKey)}
			</span>
			{item.hasDropdown && <ChevronDownIcon className="w-5 h-5 text-black/50" />}
			{item.isExternal && <ArrowUpRightIcon className="w-5 h-5 text-black/50" />}
			{isActive && <div className="w-2 h-2 rounded-full bg-black" />}
		</motion.button>
	)
}
