/**
 * Spending Features Section Animation Configurations
 */

export const spendingFeaturesAnimations = {
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
	scaleIn: {
		hidden: { opacity: 0, scale: 0.95 },
		visible: (delay = 0) => ({
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				delay,
				ease: [0.33, 1, 0.68, 1],
			},
		}),
	},
	staggerContainer: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	},
	cardItem: {
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: [0.33, 1, 0.68, 1],
			},
		},
	},
}
