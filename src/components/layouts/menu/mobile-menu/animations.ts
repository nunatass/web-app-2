/**
 * Mobile Menu Animation Configurations
 */

export const MENU_EASING = [0.6, 0.01, 0.05, 0.95]

export const mobileMenuAnimations = {
	overlay: {
		hidden: {
			y: "100%",
		},
		visible: {
			y: 0,
			transition: {
				duration: 0.5,
				ease: MENU_EASING,
				when: "beforeChildren",
			},
		},
		exit: {
			y: "-100%",
			transition: {
				duration: 0.6,
				ease: MENU_EASING,
				delay: 0.4,
			},
		},
	},
}
