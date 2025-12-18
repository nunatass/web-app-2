/**
 * Menu Button Animation Configurations
 */

const MENU_EASING = [0.6, 0.01, 0.05, 0.95]

export const menuButtonAnimations = {
	button: {
		whileHover: { scale: 0.94 },
		whileTap: { scale: 0.92 },
		transition: { duration: 0.2, ease: MENU_EASING },
	},
	icon: {
		close: {
			initial: { opacity: 0, rotate: -180, scale: 0.5 },
			animate: { opacity: 1, rotate: 0, scale: 1 },
			exit: { opacity: 0, rotate: 180, scale: 0.5 },
			transition: { duration: 0.35, ease: MENU_EASING },
		},
		menu: {
			initial: { opacity: 0, rotate: 180, scale: 0.5 },
			animate: { opacity: 1, rotate: 0, scale: 1 },
			exit: { opacity: 0, rotate: -180, scale: 0.5 },
			transition: { duration: 0.35, ease: MENU_EASING },
		},
	},
}
