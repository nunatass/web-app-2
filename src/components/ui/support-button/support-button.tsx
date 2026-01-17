"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

import { MessageSquareIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import { supportButtonAnimations } from "./animations"

type SupportButtonProps = {
	variant: "desktop" | "mobile"
	useHeroStyle?: boolean
}

export function SupportButton({ variant, useHeroStyle = false }: SupportButtonProps) {
	const t = useTranslations("common")

	if (variant === "mobile") {
		return (
			<motion.button
				type="button"
				{...supportButtonAnimations.press}
				className={cn(
					"flex items-center justify-center p-3",
					"cursor-pointer rounded-full",
					"transition-colors duration-300",
					"focus:outline-none focus:ring-2",
					useHeroStyle
						? "text-black/90 bg-white/[0.08] backdrop-blur-sm hover:bg-white/[0.12] focus:ring-white/20"
						: "text-black bg-[hsl(154,70%,50%)] shadow-lg hover:bg-[hsl(154,70%,45%)] focus:ring-[hsl(154,70%,50%)]",
				)}
				aria-label={t("support")}
			>
				<MessageSquareIcon className="w-5 h-5" />
			</motion.button>
		)
	}

	return (
		<motion.button
			type="button"
			{...supportButtonAnimations.press}
			className={cn(
				"flex items-center gap-2 px-4 py-2.5",
				"text-white/90 text-sm font-medium",
				"bg-neutral-800/50 backdrop-blur-sm rounded-full",
				"hover:bg-neutral-800/70",
				"transition-colors duration-200",
				"focus:outline-none focus:ring-2 focus:ring-neutral-800/50",
				"cursor-pointer",
			)}
			aria-label={t("support")}
		>
			<MessageSquareIcon className="w-4 h-4" />
			<span>{t("support")}</span>
		</motion.button>
	)
}
