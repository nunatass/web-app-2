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
			className="relative h-dvh md:min-h-screen bg-background px-6 py-4 md:px-10 lg:px-12"
			aria-label={`${t("title.line1")} ${t("title.line2")}`}
		>
			<motion.div initial="hidden" animate="visible" variants={heroSectionAnimations.fadeIn} custom={0}>
				<Header />
			</motion.div>

			<div className="flex flex-col items-center justify-between mt-20 gap-6 pb-20 md:pb-6 h-full">
				{/* Title */}
				<motion.h1
					initial="hidden"
					animate="visible"
					variants={heroSectionAnimations.fadeInUp}
					custom={0.2}
					className="text-[2.75rem] sm:text-5xl font-bold text-black leading-[1.02] tracking-[-0.02em] pr-20"
				>
					{t("title.line1")} {t("title.line2")}
				</motion.h1>

				<div className="flex flex-col items-center justify-center gap-6">
					{/* iPhone Frame */}
					<motion.div initial="hidden" animate="visible" variants={heroSectionAnimations.scaleIn} custom={0.4}>
						<IPhoneFrame videoSrc="/hero-video.mp4" />
					</motion.div>

					{/* Description and Buttons */}
					<div className="flex flex-col items-center justify-center gap-2">
						<motion.p
							initial="hidden"
							animate="visible"
							variants={heroSectionAnimations.fadeInUp}
							custom={0.6}
							className="text-base text-black/90 leading-relaxed text-center sm:text-left"
						>
							{t("subtitle")}
						</motion.p>

						<motion.div
							initial="hidden"
							animate="visible"
							variants={heroSectionAnimations.fadeInUp}
							custom={0.8}
							className="md:hidden flex gap-4 mx-auto"
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
