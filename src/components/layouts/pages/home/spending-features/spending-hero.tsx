"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

import { spendingFeaturesAnimations } from "./animations"

// Credit cards image
const CARD_IMAGE_URL = "/cards-herod.png"

export function SpendingHero() {
	const t = useTranslations("spendingFeatures")

	return (
		<div className="relative py-8 md:py-24 lg:py-32 flex flex-col justify-center">
			{/* Decorative Lines - Desktop only */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
				<svg
					className="absolute w-full h-full"
					viewBox="0 0 1440 900"
					fill="none"
					preserveAspectRatio="xMidYMid slice"
					aria-hidden="true"
				>
					<path
						d="M-100 600 Q 400 200, 800 400 T 1600 300"
						stroke="url(#line-gradient)"
						strokeWidth="2"
						fill="none"
						className="opacity-30"
					/>
					<path
						d="M-100 700 Q 500 300, 900 500 T 1700 400"
						stroke="url(#line-gradient)"
						strokeWidth="1"
						fill="none"
						className="opacity-20"
					/>
					<defs>
						<linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="white" stopOpacity="0" />
							<stop offset="50%" stopColor="white" stopOpacity="0.5" />
							<stop offset="100%" stopColor="white" stopOpacity="0" />
						</linearGradient>
					</defs>
				</svg>
			</div>

			{/* Mobile Layout - Text above image, left aligned */}
			<div className="md:hidden px-4 sm:px-6">
				<div className="max-w-[480px] mx-auto">
					{/* Title - Left aligned */}
					<motion.h2
						id="spending-features-title-mobile"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={spendingFeaturesAnimations.fadeInUp}
						custom={0.3}
						className="text-2xl sm:text-3xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-3"
					>
						{t("hero.line1")}
						<br />
						{t("hero.line2")}
					</motion.h2>

					{/* Subtitle - Left aligned */}
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={spendingFeaturesAnimations.fadeInUp}
						custom={0.4}
						className="text-neutral-400 text-sm mb-6"
					>
						{t("hero.subtitle")}
					</motion.p>

					{/* Image below text */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={spendingFeaturesAnimations.scaleIn}
						custom={0.5}
						className="relative w-full rounded-2xl overflow-hidden flex justify-center"
					>
						<Image
							src={CARD_IMAGE_URL}
							alt="Credit cards"
							width={600}
							height={400}
							unoptimized
							quality={100}
							className="w-auto h-auto object-contain max-w-[200px] sm:max-w-[260px]"
							priority
						/>
					</motion.div>
				</div>
			</div>

			{/* Desktop Layout - Centered below image */}
			<div className="hidden md:block container mx-auto">
				{/* Credit Cards Image */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={spendingFeaturesAnimations.scaleIn}
					custom={0}
					className="relative w-full flex justify-center items-center mb-6"
				>
					<Image
						src={CARD_IMAGE_URL}
						alt="Credit cards"
						width={600}
						height={400}
						unoptimized
						quality={100}
						className="h-auto object-contain max-w-[240px] lg:max-w-[280px] xl:max-w-[400px] 2xl:max-w-[500px]"
						priority
					/>
				</motion.div>

				{/* Hero Title */}
				<motion.h2
					id="spending-features-title"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={spendingFeaturesAnimations.fadeInUp}
					custom={0.5}
					className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center leading-[1.1] tracking-[-0.02em] mb-4 lg:mb-6"
				>
					{t("hero.line1")}
					<br />
					{t("hero.line2")}
				</motion.h2>

				{/* Hero Subtitle */}
				<motion.p
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={spendingFeaturesAnimations.fadeInUp}
					custom={0.6}
					className="text-neutral-400 text-sm md:text-base lg:text-lg text-center max-w-md mx-auto"
				>
					{t("hero.subtitle")}
				</motion.p>
			</div>
		</div>
	)
}
