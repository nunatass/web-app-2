"use client"

import { createContext, useContext, useState, useCallback } from "react"

type LocaleTransitionContextType = {
	isTransitioning: boolean
	startTransition: () => void
}

const noop = () => {
	// Default empty function for context
}

const LocaleTransitionContext = createContext<LocaleTransitionContextType>({
	isTransitioning: false,
	startTransition: noop,
})

export function useLocaleTransition() {
	return useContext(LocaleTransitionContext)
}

type LocaleTransitionProviderProps = {
	children: React.ReactNode
}

export function LocaleTransitionProvider({ children }: LocaleTransitionProviderProps) {
	const [isTransitioning, setIsTransitioning] = useState(false)

	const startTransition = useCallback(() => {
		setIsTransitioning(true)
		// Reset after navigation completes
		setTimeout(() => setIsTransitioning(false), 800)
	}, [])

	return (
		<LocaleTransitionContext.Provider value={{ isTransitioning, startTransition }}>
			<div
				className="transition-opacity duration-300 ease-in-out"
				style={{ opacity: isTransitioning ? 0 : 1 }}
			>
				{children}
			</div>
		</LocaleTransitionContext.Provider>
	)
}
