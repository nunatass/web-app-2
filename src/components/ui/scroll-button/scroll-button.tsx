"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"

import { MouseIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import { scrollButtonAnimations } from "./animations"

type ScrollButtonProps = {
	visible?: boolean
	onClick?: () => void
}

export function ScrollButton({ visible = true, onClick }: ScrollButtonProps) {
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
						"text-black/50 text-sm font-medium",
						"bg-white/[0.08] backdrop-blur-sm rounded-full",
						"hover:bg-white/[0.12] hover:text-black/70",
						"transition-colors duration-200",
						"focus:outline-none focus:ring-2 focus:ring-white/20",
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
