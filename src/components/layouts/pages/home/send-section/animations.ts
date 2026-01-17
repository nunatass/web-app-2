import type { Variants } from "framer-motion"

export const sendSectionAnimations = {
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

	fadeInLeft: {
		hidden: { opacity: 0, x: -30 },
		visible: (delay: number = 0) => ({
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				delay,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		}),
	} satisfies Variants,

	fadeInRight: {
		hidden: { opacity: 0, x: 30 },
		visible: (delay: number = 0) => ({
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				delay,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		}),
	} satisfies Variants,

	scaleIn: {
		hidden: { opacity: 0, scale: 0.95 },
		visible: (delay: number = 0) => ({
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				delay,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		}),
	} satisfies Variants,
}
