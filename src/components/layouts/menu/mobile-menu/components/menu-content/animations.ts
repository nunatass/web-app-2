/**
 * Menu Content Animation Configurations
 */

const MENU_EASING = [0.6, 0.01, 0.05, 0.95]

export const menuContentAnimations = {
	item: (totalItems: number) => ({
		hidden: { opacity: 0, x: -20 },
		visible: (itemIndex: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
				delay: 0.15 + itemIndex * 0.06,
				ease: MENU_EASING,
			},
		}),
		exit: (itemIndex: number) => ({
			opacity: 0,
			x: -20,
			transition: {
				duration: 0.2,
				delay: (totalItems - 1 - itemIndex) * 0.04,
				ease: MENU_EASING,
			},
		}),
	}),
	hover: {
		whileHover: { scale: 0.98, x: 4 },
		whileTap: { scale: 0.96 },
	},
}
