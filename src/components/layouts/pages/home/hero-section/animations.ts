/**
 * Hero Section Animation Configurations
 */

export const heroSectionAnimations = {
	fadeInUp: {
		hidden: { opacity: 0, y: 40 },
		visible: (delay = 0) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay,
				ease: [0.33, 1, 0.68, 1],
			},
		}),
	},
	fadeIn: {
		hidden: { opacity: 0 },
		visible: (delay = 0) => ({
			opacity: 1,
			transition: {
				duration: 0.8,
				delay,
				ease: [0.33, 1, 0.68, 1],
			},
		}),
	},
	fadeInDown: {
		hidden: { opacity: 0, y: -20 },
		visible: (delay = 0) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay,
				ease: [0.33, 1, 0.68, 1],
			},
		}),
	},
	scaleIn: {
		hidden: { opacity: 0, scale: 0.9 },
		visible: (delay = 0) => ({
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.7,
				delay,
				ease: [0.33, 1, 0.68, 1],
			},
		}),
	},
}
