"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

import { logoAnimations } from "./animations"

type AnimatedLogoProps = {
	variant?: "light" | "dark"
	className?: string
}

export function AnimatedLogo({ variant = "light", className }: AnimatedLogoProps) {
	// Light variant: black text on light bg, flips to white
	// Dark variant: white text on dark bg, flips to green (hero color)
	const frontTextColor = variant === "light" ? "text-black" : "text-white"
	const backTextColor = variant === "light" ? "text-white" : "text-[hsl(154,70%,50%)]"

	return (
		<motion.div
			className={cn("inline-flex flex-col items-center justify-center cursor-pointer", className)}
			{...logoAnimations.container}
			style={{
				transformStyle: "preserve-3d",
				perspective: "1000px",
			}}
		>
			<motion.div
				className="relative flex flex-col items-center justify-center"
				{...logoAnimations.flipContainer}
				style={{
					transformStyle: "preserve-3d",
				}}
			>
				{/* Front text */}
				<motion.p
					className={cn("text-4xl font-bold tracking-tight pointer-events-none", frontTextColor)}
					{...logoAnimations.frontText}
				>
					Plexos
				</motion.p>

				{/* Back text */}
				<motion.p
					className={cn("absolute text-4xl font-bold tracking-tight pointer-events-none", backTextColor)}
					{...logoAnimations.backText}
				>
					Plexos
				</motion.p>
			</motion.div>
		</motion.div>
	)
}
