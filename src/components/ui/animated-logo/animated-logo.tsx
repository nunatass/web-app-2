"use client"

import { motion } from "framer-motion"

import { logoAnimations } from "./animations"

export function AnimatedLogo() {
	return (
		<motion.div
			className="inline-flex flex-col items-center justify-center cursor-pointer"
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
				{/* Front text - Black */}
				<motion.p
					className="text-4xl font-bold text-black tracking-tight pointer-events-none uppercase"
					{...logoAnimations.frontText}
				>
					Plexo
				</motion.p>

				{/* Back text - White */}
				<motion.p
					className="absolute text-4xl font-bold text-white tracking-tight pointer-events-none uppercase"
					style={logoAnimations.backText.style}
					{...logoAnimations.backText}
				>
					Plexo
				</motion.p>
			</motion.div>
		</motion.div>
	)
}
