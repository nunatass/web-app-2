"use client"

import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import { motion } from "framer-motion"
import * as React from "react"

import { cn } from "@/lib/utils"
import { buttonAnimations } from "./animations"

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-black text-white shadow hover:bg-black/95 focus-visible:ring-black",
				destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"bg-transparent text-black border-2 border-black/50 hover:border-black/70 hover:bg-black/10 focus-visible:ring-black/40",
				"outline-primary":
					"bg-transparent text-[hsl(154,50%,25%)] border-2 border-[hsl(154,60%,35%)] hover:border-[hsl(154,60%,25%)] hover:bg-[hsl(154,60%,35%)]/10 focus-visible:ring-[hsl(154,60%,35%)]",
				beta: "bg-[hsl(220,90%,56%)] text-white shadow-lg hover:bg-[hsl(220,90%,50%)] focus-visible:ring-[hsl(220,90%,56%)]",
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
	({ className, variant, size, asChild = false, id, children, onClick, disabled, type = "button", ...props }, ref) => {
		if (asChild) {
			return (
				<Slot
					className={cn(buttonVariants({ variant, size, className }))}
					ref={ref}
					id={id}
					{...props}
				>
					{children}
				</Slot>
			)
		}

		return (
			<motion.button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				id={id}
				onClick={onClick}
				disabled={disabled}
				type={type}
				whileHover={{ scale: 0.97 }}
				whileTap={{ scale: 0.95 }}
				transition={buttonAnimations.press.transition}
			>
				<span className="whitespace-nowrap">{children}</span>
			</motion.button>
		)
	},
)
Button.displayName = "Button"

export { Button, buttonVariants }
