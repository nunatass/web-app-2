"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"

import { Bars2Icon, CloseIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import { menuButtonAnimations } from "./animations"

type MenuButtonProps = {
	isOpen: boolean
	onClick: () => void
	isOnHero: boolean
	useFullGreen?: boolean
}

export function MenuButton({ isOpen, onClick, isOnHero, useFullGreen = false }: MenuButtonProps) {
	const t = useTranslations("common")

	return (
		<motion.button
			type="button"
			onClick={onClick}
			{...menuButtonAnimations.button}
			className={cn(
				"flex items-center gap-3 px-6 py-3",
				"text-sm font-medium",
				"rounded-full",
				"transition-colors duration-300",
				isOpen
					? "bg-white/[0.08] backdrop-blur-md text-black"
					: useFullGreen
						? "bg-[hsl(154,70%,50%)] text-black shadow-lg"
						: isOnHero
							? "bg-white/[0.08] backdrop-blur-md text-black"
							: "bg-[hsl(154,70%,50%)] text-black shadow-lg",
			)}
			aria-label={isOpen ? "Close menu" : "Open menu"}
			aria-expanded={isOpen}
		>
			<span>Menu</span>
			<MenuButtonIcon isOpen={isOpen} />
		</motion.button>
	)
}

function MenuButtonIcon({ isOpen }: { isOpen: boolean }) {
	return (
		<div className="relative w-5 h-5">
			<AnimatePresence mode="wait" initial={false}>
				{isOpen ? (
					<motion.span
						key="close"
						{...menuButtonAnimations.icon.close}
						className="absolute inset-0 flex items-center justify-center"
					>
						<CloseIcon className="w-5 h-5" />
					</motion.span>
				) : (
					<motion.span
						key="menu"
						{...menuButtonAnimations.icon.menu}
						className="absolute inset-0 flex items-center justify-center"
					>
						<Bars2Icon className="w-5 h-5" />
					</motion.span>
				)}
			</AnimatePresence>
		</div>
	)
}
