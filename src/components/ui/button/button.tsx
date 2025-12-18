"use client"

import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import { motion } from "framer-motion"
import * as React from "react"
import { useLayoutEffect, useRef } from "react"

import { cn } from "@/lib/utils"
import { buttonAnimations } from "./animations"

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-black text-white shadow hover:bg-black/95 focus-visible:ring-black",
				destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"bg-transparent text-black border-2 border-black/50 hover:border-black/70 hover:bg-black/10 focus-visible:ring-black/40",
				secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-auto py-3 px-6",
				sm: "h-auto py-2 px-4 text-xs",
				lg: "h-auto py-4 px-8",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, id, children, ...props }, ref) => {
		const buttonRef = useRef<HTMLButtonElement>(null)
		const textRef = useRef<HTMLSpanElement>(null)

		useLayoutEffect(() => {
			if (asChild || !buttonRef.current || !textRef.current || !id) return

			const button = buttonRef.current
			const textWidth = textRef.current.offsetWidth
			const computedStyle = window.getComputedStyle(button)
			const paddingLeft = Number.parseFloat(computedStyle.paddingLeft)
			const paddingRight = Number.parseFloat(computedStyle.paddingRight)
			const newWidth = textWidth + paddingLeft + paddingRight

			// Get previous width from sessionStorage
			const storageKey = `btn-width-${id}`
			const previousWidth = sessionStorage.getItem(storageKey)

			if (previousWidth && previousWidth !== String(newWidth)) {
				// Animate from previous width to new width
				button.style.width = `${previousWidth}px`
				button.style.transition = "none"

				// Force reflow
				button.offsetHeight

				// Enable transition and set new width
				button.style.transition = "width 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
				button.style.width = `${newWidth}px`
			} else {
				// First load - set width without animation
				button.style.width = `${newWidth}px`
			}

			// Store current width for next change
			sessionStorage.setItem(storageKey, String(newWidth))
		}, [children, id, asChild])

		const Comp = asChild ? Slot : motion.button

		// Animation props for framer-motion
		const motionProps = asChild ? {} : buttonAnimations.press

		// Merge refs
		const mergedRef = React.useCallback(
			(node: HTMLButtonElement) => {
				buttonRef.current = node
				if (typeof ref === "function") {
					ref(node)
				} else if (ref) {
					ref.current = node
				}
			},
			[ref],
		)

		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={mergedRef}
				id={id}
				{...motionProps}
				{...props}
			>
				<span ref={textRef} className="whitespace-nowrap">
					{children}
				</span>
			</Comp>
		)
	},
)
Button.displayName = "Button"

export { Button, buttonVariants }
