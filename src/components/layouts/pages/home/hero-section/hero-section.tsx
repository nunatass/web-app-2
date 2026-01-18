"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

import { Header } from "@/components/layouts/header/header"
import { AppStoreButton } from "@/components/ui/app-store-button"
import { IPhoneFrame } from "@/components/ui/iphone-frame"
import { heroSectionAnimations } from "./animations"

export function HeroSection() {
	const t = useTranslations("hero")

	return (
		<section
			id="hero"
			className="relative min-h-dvh md:min-h-screen bg-[hsl(154,70%,50%)] px-6 py-4 md:px-10 lg:px-12 flex flex-col"
			aria-label={`${t("title.line1")} ${t("title.line2")}`}
		>
			<motion.div initial="hidden" animate="visible" variants={heroSectionAnimations.fadeIn} custom={0}>
				<Header />
			</motion.div>

			<div className="flex flex-col items-center justify-center flex-1 py-8 lg:flex-col lg:h-full lg:justify-end lg:pb-20">
				{/* Title - Top on mobile/md, bottom left on lg */}
				<div className="w-full flex items-start justify-start lg:hidden">
					<motion.h1
						initial="hidden"
						animate="visible"
						variants={heroSectionAnimations.fadeInUp}
						custom={0.2}
						className="text-[2rem] sm:text-5xl md:text-6xl font-bold text-black leading-[1.02] tracking-[-0.02em] pr-12 my-8"
					>
						{t("title.line1")}
						<br />
						{t("title.line2")}
					</motion.h1>
				</div>

				{/* Content wrapper */}
				<div className="flex flex-col items-center justify-center gap-6 sm:flex-row md:gap-12 lg:relative lg:flex-row lg:justify-center lg:items-end lg:w-full">
					{/* Title - Bottom left on lg, aligned with iPhone bottom */}
					<motion.h1
						initial="hidden"
						animate="visible"
						variants={heroSectionAnimations.fadeInUp}
						custom={0.2}
						className="hidden lg:block lg:absolute lg:left-0 lg:bottom-0 lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-black leading-[1.02] tracking-[-0.02em] lg:max-w-sm xl:max-w-md 2xl:max-w-lg"
					>
						{t("title.line1")}
						<br />
						{t("title.line2")}
					</motion.h1>

					{/* iPhone Frame - Centered */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={heroSectionAnimations.scaleIn}
						custom={0.4}
						className="lg:flex-shrink-0"
					>
						<IPhoneFrame videoSrc="/hero-video.mp4" className="md:max-w-[200px] lg:max-w-[280px] 2xl:max-w-[340px]" />
					</motion.div>

					{/* Description and Buttons - Bottom Right, aligned with iPhone bottom */}
					<div className="flex flex-col items-center justify-center gap-2 md:items-start md:justify-end lg:absolute lg:right-0 lg:bottom-0 lg:items-end lg:max-w-xs">
						<motion.p
							initial="hidden"
							animate="visible"
							variants={heroSectionAnimations.fadeInUp}
							custom={0.6}
							className="text-base text-black/90 leading-relaxed text-center md:text-left lg:text-right"
						>
							{t("subtitle")}
						</motion.p>

						<motion.div
							initial="hidden"
							animate="visible"
							variants={heroSectionAnimations.fadeInUp}
							custom={0.8}
							className="flex gap-4 mx-auto md:mx-0"
						>
							<AppStoreButton store="apple" href="https://apps.apple.com" />
							<AppStoreButton store="google" href="https://play.google.com" />
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}
