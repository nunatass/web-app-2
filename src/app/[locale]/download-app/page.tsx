"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

import { AppleIcon, GooglePlayIcon } from "@/components/icons"
import { AnimatedLogo } from "@/components/ui/animated-logo"

export default function DownloadAppPage() {
	const t = useTranslations("downloadApp")
	const tStore = useTranslations("hero.appStore")

	return (
		<main className="relative min-h-screen bg-black">
			{/* Logo - Top left, same position as hero */}
			<div className="absolute top-0 left-0 right-0 z-50 px-6 py-4 md:px-10 lg:px-12">
				<Link href="/">
					<AnimatedLogo variant="dark" />
				</Link>
			</div>

			{/* Content - Centered */}
			<div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
				{/* Title */}
			<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
				{t("title")}
			</h1>
			
			{/* Subtitle */}
			<p className="text-gray-400 text-base sm:text-lg md:text-xl text-center mt-4 mb-10">
				{t("subtitle")}
			</p>

			{/* QR Code */}
			<div className="bg-white rounded-2xl p-4 mb-6">
				<Image
					src="/qr-code-website.svg"
					alt="QR Code to download the app"
					width={280}
					height={280}
					className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px]"
				/>
			</div>

			{/* Description */}
			<p className="text-gray-400 text-sm sm:text-base text-center max-w-md mb-10">
				{t("description")}
			</p>

			{/* App Store Buttons */}
			<div className="flex flex-col sm:flex-row gap-4">
				{/* Apple App Store */}
				<motion.div
					whileHover={{ scale: 0.97 }}
					whileTap={{ scale: 0.95 }}
					transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
				>
					<Link
						href="https://apps.apple.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 bg-white text-black px-4 sm:px-6 py-3 h-14 rounded-xl border-2 border-white hover:bg-gray-50 transition-colors"
					>
						<AppleIcon className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
						<div className="flex flex-col items-start whitespace-nowrap">
							<span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide">{tStore("downloadOn")}</span>
							<span className="text-sm sm:text-base font-semibold">{tStore("appStore")}</span>
						</div>
					</Link>
				</motion.div>

				{/* Google Play Store */}
				<motion.div
					whileHover={{ scale: 0.97 }}
					whileTap={{ scale: 0.95 }}
					transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
				>
					<Link
						href="https://play.google.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 bg-white text-black px-4 sm:px-6 py-3 h-14 rounded-xl border-2 border-white hover:bg-gray-50 transition-colors"
					>
						<GooglePlayIcon className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
						<div className="flex flex-col items-start whitespace-nowrap">
							<span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide">{tStore("getItOn")}</span>
							<span className="text-sm sm:text-base font-semibold">{tStore("googlePlay")}</span>
						</div>
					</Link>
				</motion.div>
				</div>
			</div>
		</main>
	)
}
