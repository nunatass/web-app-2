"use client"

import { SpendingHero } from "./spending-hero"

export function SpendingFeatures() {
	return (
		<section
			id="spending-features"
			className="relative bg-black overflow-hidden"
			aria-labelledby="spending-features-title"
		>
			{/* Hero Section with Cards */}
			<SpendingHero />
		</section>
	)
}
