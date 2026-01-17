import type { Variants } from "framer-motion"

export const cardsSectionAnimations = {
	fadeInUp: {
		hidden: { opacity: 0, y: 30 },
		visible: (delay: number = 0) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		}),
	} satisfies Variants,

	fadeIn: {
		hidden: { opacity: 0 },
		visible: (delay: number = 0) => ({
			opacity: 1,
			transition: {
				duration: 0.5,
				delay,
				ease: "easeOut",
			},
		}),
	} satisfies Variants,

	staggerContainer: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	} satisfies Variants,

	cardItem: {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	} satisfies Variants,
}
