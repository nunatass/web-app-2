"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

import { Header } from "@/components/layouts/header/header"
import { BottomNav } from "@/components/layouts/menu/bottom-nav"

export function FeesHero() {
	const t = useTranslations("fees")

	return (
		<section
			id="fees-hero"
			className="relative min-h-dvh md:min-h-screen bg-[hsl(154,70%,50%)] px-6 py-4 md:px-10 lg:px-12 flex flex-col"
			aria-label="Fees"
		>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
				<Header />
			</motion.div>

			<div className="flex flex-col items-center justify-end flex-1 pb-24 lg:flex-col lg:h-full lg:justify-center">
				{/* Title - Top on mobile/md, bottom left on lg */}
				<div className="w-full flex items-start justify-start lg:hidden">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-[2rem] sm:text-5xl md:text-6xl font-bold text-black leading-[1.02] tracking-[-0.02em] pr-12 mb-8"
					>
						{t("hero.title.line1")}
						<br />
						{t("hero.title.line2")}
					</motion.h1>
				</div>

				{/* Content wrapper */}
				<div className="flex flex-col items-start justify-center gap-6 sm:flex-row md:gap-12 lg:relative lg:flex-row lg:justify-center lg:items-end lg:flex-1 lg:w-full lg:pb-16">
					{/* Title - Bottom left on lg */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="hidden lg:block lg:absolute lg:left-0 lg:bottom-40 lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black leading-[1.1] tracking-[-0.02em] lg:max-w-xl xl:max-w-2xl"
					>
						{t("hero.title.line1")}
						<br />
						{t("hero.title.line2")}
					</motion.h1>

					{/* Image - Left on mobile, centered on lg */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="lg:flex-shrink-0 lg:mb-24"
					>
						<Image
							src="/fees.png"
							alt="Team working together"
							width={400}
							height={400}
							className="w-full h-auto rounded-2xl max-w-[240px] md:max-w-[200px] lg:max-w-[280px] 2xl:max-w-[340px]"
							priority
						/>
					</motion.div>

					{/* Subtitle - Left on mobile, bottom right on lg */}
					<div className="flex flex-col items-start justify-center gap-2 md:items-start md:justify-end lg:absolute lg:right-0 lg:bottom-40 lg:items-end lg:max-w-xs">
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="text-base text-black leading-relaxed text-left lg:text-right"
						>
							{t("hero.subtitle")}
						</motion.p>
					</div>
				</div>
			</div>

			<BottomNav />
		</section>
	)
}
