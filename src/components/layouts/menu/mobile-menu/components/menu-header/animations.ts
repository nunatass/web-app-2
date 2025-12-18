/**
 * Menu Header Animation Configurations
 */

const MENU_EASING = [0.6, 0.01, 0.05, 0.95]

export const menuHeaderAnimations = {
	logo: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.4, delay: 0.15, ease: MENU_EASING },
		},
		exit: {
			opacity: 0,
			transition: { duration: 0.25, ease: MENU_EASING },
		},
	},
	buttons: {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, delay: 0.15, ease: MENU_EASING },
		},
		exit: {
			opacity: 0,
			y: -20,
			transition: { duration: 0.25, delay: 0.05, ease: MENU_EASING },
		},
	},
}
