/**
 * Scroll Button Animation Configurations
 */

export const scrollButtonAnimations = {
	entrance: {
		initial: { opacity: 0, y: 10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 10 },
	},
	press: {
		whileHover: { scale: 0.94 },
		whileTap: { scale: 0.92 },
		transition: { duration: 0.2, ease: [0.33, 1, 0.68, 1] },
	},
}
