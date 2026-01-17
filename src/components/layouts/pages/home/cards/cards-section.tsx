"use client"

import { motion, useInView } from "framer-motion"
import { CreditCard, Smartphone, Wallet } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useRef } from "react"

import { cardsSectionAnimations } from "./animations"

// Placeholder card images - will be replaced with actual cards
// Using credit card aspect ratio: 85.6mm × 53.98mm ≈ 1.586:1
const cardPairs = [
	{
		id: "green",
		blackCard: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=252&fit=crop",
		colorCard: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=252&fit=crop",
	},
	{
		id: "dark",
		blackCard: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=252&fit=crop",
		colorCard: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=252&fit=crop",
	},
	{
		id: "pattern",
		blackCard: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=252&fit=crop",
		colorCard: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=252&fit=crop",
	},
]

export function CardsSection() {
	const t = useTranslations("cardsSection")
	const sectionRef = useRef<HTMLElement>(null)
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

	return (
		<section
			ref={sectionRef}
			id="cards-section"
			className="relative bg-[#0a0a0a] py-16 md:py-24 overflow-hidden"
			aria-labelledby="cards-section-title"
		>
			{/* Mobile Layout */}
			<div className="md:hidden px-4 sm:px-6">
				<div className="max-w-[480px] mx-auto">
					{/* Title - Left aligned, uppercase on mobile */}
					<motion.h2
						id="cards-section-title-mobile"
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={cardsSectionAnimations.fadeInUp}
						custom={0}
						className="text-2xl sm:text-3xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-3 uppercase"
					>
						{t("title")}
					</motion.h2>

					{/* Subtitle */}
					<motion.p
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={cardsSectionAnimations.fadeInUp}
						custom={0.1}
						className="text-neutral-400 text-sm mb-6"
					>
						{t("subtitle")} <span className="text-neutral-500">{t("terms")}</span>
					</motion.p>

					{/* Features list */}
					<motion.div
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={cardsSectionAnimations.fadeInUp}
						custom={0.15}
						className="flex flex-col gap-3 mb-8"
					>
						<div className="flex items-center gap-2 text-neutral-300 text-sm">
							<Wallet className="w-4 h-4 text-[hsl(154,70%,50%)]" />
							<span>{t("features.cashback")}</span>
						</div>
						<div className="flex items-center gap-2 text-neutral-300 text-sm">
							<CreditCard className="w-4 h-4 text-[hsl(154,70%,50%)]" />
							<span>{t("features.virtual")}</span>
						</div>
					</motion.div>

					{/* Card Pairs - Stacked vertically on mobile in containers */}
					<motion.div
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={cardsSectionAnimations.staggerContainer}
						className="flex flex-col gap-4 mb-8"
					>
						{cardPairs.map((pair) => (
							<motion.div
								key={pair.id}
								variants={cardsSectionAnimations.cardItem}
								className="relative bg-[#1a1a1a] rounded-2xl p-4 flex items-center justify-center"
							>
								{/* Card pair container */}
								<div className="relative flex items-center">
									{/* Black card (back) */}
									<div className="relative w-[130px] h-[82px] sm:w-[150px] sm:h-[95px] rounded-lg overflow-hidden shadow-xl">
										<Image
											src={pair.blackCard}
											alt="Black card"
											fill
											className="object-cover"
										/>
									</div>
									{/* Color card (front, overlapping) */}
									<div className="relative w-[130px] h-[82px] sm:w-[150px] sm:h-[95px] rounded-lg overflow-hidden shadow-xl -ml-14 sm:-ml-16">
										<Image
											src={pair.colorCard}
											alt="Color card"
											fill
											className="object-cover"
										/>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Virtual wallet info */}
					<motion.div
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={cardsSectionAnimations.fadeInUp}
						custom={0.5}
						className="flex items-start gap-3 bg-[#1a1a1a] rounded-xl p-4 mb-6"
					>
						<Smartphone className="w-5 h-5 text-[hsl(154,70%,50%)] mt-0.5 flex-shrink-0" />
						<p className="text-neutral-300 text-sm leading-relaxed">{t("features.wallet")}</p>
					</motion.div>

					{/* Footer text */}
					<motion.p
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						variants={cardsSectionAnimations.fadeIn}
						custom={0.6}
						className="text-neutral-500 text-xs text-center"
					>
						{t("footer")}
					</motion.p>
				</div>
			</div>

			{/* Desktop Layout */}
			<div className="hidden md:block container mx-auto px-6">
				{/* Title - Centered on desktop */}
				<motion.h2
					id="cards-section-title"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={cardsSectionAnimations.fadeInUp}
					custom={0}
					className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-[1.1] tracking-[-0.02em] mb-4"
				>
					{t("title")}
				</motion.h2>

				{/* Subtitle */}
				<motion.p
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={cardsSectionAnimations.fadeInUp}
					custom={0.1}
					className="text-neutral-400 text-lg text-center max-w-2xl mx-auto mb-6"
				>
					{t("subtitle")} <span className="text-neutral-500">{t("terms")}</span>
				</motion.p>

				{/* Features row */}
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={cardsSectionAnimations.fadeInUp}
					custom={0.15}
					className="flex items-center justify-center gap-8 mb-12"
				>
					<div className="flex items-center gap-2 text-neutral-300">
						<Wallet className="w-5 h-5 text-[hsl(154,70%,50%)]" />
						<span>{t("features.cashback")}</span>
					</div>
					<div className="flex items-center gap-2 text-neutral-300">
						<CreditCard className="w-5 h-5 text-[hsl(154,70%,50%)]" />
						<span>{t("features.virtual")}</span>
					</div>
				</motion.div>

				{/* Card Pairs - Row on desktop */}
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={cardsSectionAnimations.staggerContainer}
					className="flex justify-center items-center gap-6 lg:gap-10 mb-12"
				>
					{cardPairs.map((pair) => (
						<motion.div
							key={pair.id}
							variants={cardsSectionAnimations.cardItem}
							className="relative flex items-center"
						>
							{/* Black card (back) */}
							<div className="relative w-[160px] h-[100px] lg:w-[200px] lg:h-[126px] xl:w-[240px] xl:h-[151px] rounded-xl overflow-hidden shadow-2xl">
								<Image
									src={pair.blackCard}
									alt="Black card"
									fill
									className="object-cover"
								/>
							</div>
							{/* Color card (front, overlapping) */}
							<div className="relative w-[160px] h-[100px] lg:w-[200px] lg:h-[126px] xl:w-[240px] xl:h-[151px] rounded-xl overflow-hidden shadow-2xl -ml-16 lg:-ml-20 xl:-ml-24">
								<Image
									src={pair.colorCard}
									alt="Color card"
									fill
									className="object-cover"
								/>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Virtual wallet info */}
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={cardsSectionAnimations.fadeInUp}
					custom={0.5}
					className="flex items-center justify-center gap-3 mb-10"
				>
					<Smartphone className="w-5 h-5 text-[hsl(154,70%,50%)]" />
					<p className="text-neutral-300 text-base">{t("features.wallet")}</p>
				</motion.div>

				{/* Footer text */}
				<motion.p
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={cardsSectionAnimations.fadeIn}
					custom={0.6}
					className="text-neutral-500 text-sm text-center"
				>
					{t("footer")}
				</motion.p>
			</div>
		</section>
	)
}
