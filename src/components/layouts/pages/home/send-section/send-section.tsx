"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

import { sendSectionAnimations } from "./animations"

export function SendSection() {
	const t = useTranslations("sendSection")

	return (
		<section id="send-section" className="relative bg-black overflow-hidden">
			{/* First Part - Text Left, Image Right */}
			<div className="py-16 md:py-24 lg:py-32 flex items-center">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Mobile Layout - Stacked */}
					<div className="md:hidden">
						{/* Title */}
						<motion.h2
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={sendSectionAnimations.fadeInUp}
							custom={0}
							className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4"
						>
							{t("title")}
						</motion.h2>

						{/* Subtitle */}
						<motion.p
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={sendSectionAnimations.fadeInUp}
							custom={0.1}
							className="text-neutral-400 text-base mb-3 max-w-sm"
						>
							{t("subtitle")}
						</motion.p>

						{/* Description */}
						<motion.p
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={sendSectionAnimations.fadeInUp}
							custom={0.15}
							className="text-neutral-500 text-sm mb-8 max-w-sm"
						>
							{t("description")}
						</motion.p>

						{/* Image */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={sendSectionAnimations.scaleIn}
							custom={0.2}
							className="relative w-full flex justify-center"
						>
							<Image
								src="/sent-on-tap.png"
								alt="Send money easily"
								width={400}
								height={500}
								unoptimized
								quality={100}
								className="w-full max-w-[320px] h-auto object-contain"
								priority
							/>
						</motion.div>
					</div>

					{/* Desktop Layout - Side by side */}
					<div className="hidden md:flex items-center justify-between gap-12 lg:gap-20">
						{/* Left - Text Content */}
						<div className="flex-1 max-w-lg">
							<motion.h2
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								variants={sendSectionAnimations.fadeInLeft}
								custom={0}
								className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4 lg:mb-6"
							>
								{t("title")}
							</motion.h2>

							<motion.p
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								variants={sendSectionAnimations.fadeInLeft}
								custom={0.15}
								className="text-neutral-400 text-base lg:text-lg max-w-md mb-4"
							>
								{t("subtitle")}
							</motion.p>

							<motion.p
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								variants={sendSectionAnimations.fadeInLeft}
								custom={0.2}
								className="text-neutral-500 text-sm lg:text-base max-w-md"
							>
								{t("description")}
							</motion.p>
						</div>

						{/* Right - Image */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={sendSectionAnimations.fadeInRight}
							custom={0.1}
							className="flex-1 flex justify-center lg:justify-end"
						>
							<Image
								src="/sent-on-tap.png"
								alt="Send money easily"
								width={600}
								height={750}
								unoptimized
								quality={100}
								className="h-auto object-contain max-w-[280px] lg:max-w-[340px] xl:max-w-[400px] 2xl:max-w-[460px]"
								priority
							/>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Second Part - Image Left, Text Right */}
			<div className="py-16 md:py-24 lg:py-32 flex items-center">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Mobile Layout - Stacked */}
					<div className="md:hidden">
						{/* Title */}
						<motion.h2
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={sendSectionAnimations.fadeInUp}
							custom={0}
							className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4"
						>
							{t("global.title")}
						</motion.h2>

						{/* Subtitle */}
						<motion.p
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={sendSectionAnimations.fadeInUp}
							custom={0.1}
							className="text-neutral-400 text-base mb-3 max-w-sm"
						>
							{t("global.subtitle")}
						</motion.p>

						{/* Description */}
						<motion.p
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={sendSectionAnimations.fadeInUp}
							custom={0.15}
							className="text-neutral-500 text-sm mb-8 max-w-sm"
						>
							{t("global.description")}
						</motion.p>

						{/* Image */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={sendSectionAnimations.scaleIn}
							custom={0.2}
							className="relative w-full flex justify-center"
						>
							<Image
								src="/send-globally.png"
								alt="Send money globally"
								width={500}
								height={500}
								unoptimized
								quality={100}
								className="w-full max-w-[320px] h-auto object-contain"
							/>
						</motion.div>
					</div>

					{/* Desktop Layout - Image Left, Text Right */}
					<div className="hidden md:flex items-center justify-between gap-12 lg:gap-20">
						{/* Left - Image */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={sendSectionAnimations.fadeInLeft}
							custom={0.1}
							className="flex-1 flex justify-center lg:justify-start"
						>
							<Image
								src="/send-globally.png"
								alt="Send money globally"
								width={600}
								height={600}
								unoptimized
								quality={100}
								className="h-auto object-contain max-w-[380px] lg:max-w-[450px] xl:max-w-[550px] 2xl:max-w-[650px]"
							/>
						</motion.div>

						{/* Right - Text Content */}
						<div className="flex-1 max-w-lg">
							<motion.h2
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								variants={sendSectionAnimations.fadeInRight}
								custom={0}
								className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4 lg:mb-6"
							>
								{t("global.title")}
							</motion.h2>

							<motion.p
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								variants={sendSectionAnimations.fadeInRight}
								custom={0.15}
								className="text-neutral-400 text-base lg:text-lg max-w-md mb-4"
							>
								{t("global.subtitle")}
							</motion.p>

							<motion.p
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								variants={sendSectionAnimations.fadeInRight}
								custom={0.2}
								className="text-neutral-500 text-sm lg:text-base max-w-md"
							>
								{t("global.description")}
							</motion.p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
