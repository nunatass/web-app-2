"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"

import { MouseIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import { scrollButtonAnimations } from "./animations"

type ScrollButtonProps = {
	visible?: boolean
	onClick?: () => void
	useHeroStyle?: boolean
}

export function ScrollButton({ visible = true, onClick, useHeroStyle = true }: ScrollButtonProps) {
	const t = useTranslations("common")

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					type="button"
					{...scrollButtonAnimations.entrance}
					{...scrollButtonAnimations.press}
					onClick={onClick}
					className={cn(
						"flex items-center gap-2 px-4 py-2.5",
						"text-sm font-medium",
						"backdrop-blur-sm rounded-full",
						"transition-colors duration-300",
						"focus:outline-none focus:ring-2",
						useHeroStyle
							? "text-black/50 bg-white/[0.08] hover:bg-white/[0.12] hover:text-black/70 focus:ring-white/20"
							: "text-white/70 bg-white/[0.08] hover:bg-white/[0.15] hover:text-white focus:ring-white/20",
					)}
					aria-label="Scroll down"
				>
					<MouseIcon className="w-4 h-4" />
					<span>{t("scroll")}</span>
				</motion.button>
			)}
		</AnimatePresence>
	)
}
