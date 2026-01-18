"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

import PortugalFlag from "@/assets/images/countries/portugal.svg"
import UKFlag from "@/assets/images/countries/united-kingdom.svg"
import CapeVerdeFlag from "@/assets/images/countries/cape-verde.svg"

// Feature slides data (actionKey is used for translation lookup)
const featureSlides = [
	{
		id: 1,
		src: "/sent-slide.png",
		alt: "Send money",
		flag: UKFlag,
		actionKey: "sent",
		amount: "8.50",
		currency: "GBP",
		objectPosition: "center",
	},
	{
		id: 2,
		src: "/recieved-slide.png",
		alt: "Receive money",
		flag: PortugalFlag,
		actionKey: "received",
		amount: "1,030.95",
		currency: "EUR",
		objectPosition: "center",
	},
	{
		id: 3,
		src: "/paid-slide.png",
		alt: "Pay",
		flag: CapeVerdeFlag,
		actionKey: "paid",
		amount: "200.25",
		currency: "ECV",
		objectPosition: "center 30%",
	},
]

export function FeaturesSection() {
	const t = useTranslations("featuresSection")
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)
	const sliderRef = useRef<HTMLDivElement>(null)
	const indicatorRef = useRef<HTMLDivElement>(null)

	const nextIndex = (currentIndex + 1) % featureSlides.length

	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating(true)
		}, 2000)

		return () => clearInterval(interval)
	}, [currentIndex])

	useEffect(() => {
		if (!isAnimating) return

		const slider = sliderRef.current
		const indicator = indicatorRef.current
		if (!slider || !indicator) return

		// Animate image slider
		slider.style.transition = "transform 1.5s cubic-bezier(0.4, 0, 0.1, 1)"
		slider.style.transform = "translateX(0%)"
		
		// Animate indicator content (same as main carousel)
		indicator.style.transition = "transform 1.5s cubic-bezier(0.4, 0, 0.1, 1)"
		indicator.style.transform = "translateX(0%)"

		const timeout = setTimeout(() => {
			// Reset image slider position instantly
			slider.style.transition = "none"
			slider.style.transform = "translateX(-50%)"
			
			// Reset indicator content position instantly
			indicator.style.transition = "none"
			indicator.style.transform = "translateX(-50%)"

			setCurrentIndex(nextIndex)
			setIsAnimating(false)
		}, 1500)

		return () => clearTimeout(timeout)
	}, [isAnimating, nextIndex])

	// Initialize positions
	useEffect(() => {
		const slider = sliderRef.current
		const indicator = indicatorRef.current
		if (slider) {
			slider.style.transform = "translateX(-50%)"
		}
		if (indicator) {
			indicator.style.transform = "translateX(-50%)"
		}
	}, [])

	const currentSlide = featureSlides[currentIndex]
	const nextSlide = featureSlides[nextIndex]

	return (
		<section className="relative bg-black py-16 md:py-24 overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 xl:gap-32">
					{/* Image Slider - Portrait mode */}
					<div className="relative w-[320px] md:w-[360px] lg:w-[420px] aspect-[3/4] rounded-[40px] overflow-hidden flex-shrink-0">
						<div
							ref={sliderRef}
							className="flex h-full"
							style={{ width: "200%" }}
						>
							{/* Next image (on left) */}
							<div className="relative w-1/2 h-full flex-shrink-0">
								<Image
									src={nextSlide.src}
									alt={nextSlide.alt}
									fill
									className="object-cover"
									style={{ objectPosition: nextSlide.objectPosition }}
								/>
							</div>
							{/* Current image (on right, visible initially) */}
							<div className="relative w-1/2 h-full flex-shrink-0">
								<Image
									src={currentSlide.src}
									alt={currentSlide.alt}
									fill
									className="object-cover"
									style={{ objectPosition: currentSlide.objectPosition }}
									priority
								/>
							</div>
						</div>
					</div>

					{/* Custom Indicator - Above on mobile, Right side on desktop */}
					<div className="flex flex-col items-center justify-center gap-6">
						<div className="bg-white rounded-full shadow-xl relative overflow-hidden w-[280px] md:w-[380px] h-[56px] md:h-[68px]">
							{/* Content slider - same effect as main carousel */}
							<div
								ref={indicatorRef}
								className="flex h-full"
								style={{ width: "200%" }}
							>
								{/* Next content (on left) */}
								<div className="w-1/2 h-full flex-shrink-0 flex items-center gap-2 md:gap-4 px-3 md:px-5">
									<div className="w-9 h-9 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
										<Image
											src={nextSlide.flag}
											alt="Flag"
											width={48}
											height={48}
											className="w-full h-full object-cover"
										/>
									</div>
									<span className="text-black font-bold text-base md:text-xl whitespace-nowrap uppercase">
										{t(nextSlide.actionKey)}
									</span>
									<span className="text-black font-bold text-sm md:text-lg whitespace-nowrap">
										{nextSlide.amount} {nextSlide.currency}
									</span>
								</div>
								{/* Current content (on right, visible initially) */}
								<div className="w-1/2 h-full flex-shrink-0 flex items-center gap-2 md:gap-4 px-3 md:px-5">
									<div className="w-9 h-9 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
										<Image
											src={currentSlide.flag}
											alt="Flag"
											width={48}
											height={48}
											className="w-full h-full object-cover"
										/>
									</div>
									<span className="text-black font-bold text-base md:text-xl whitespace-nowrap uppercase">
										{t(currentSlide.actionKey)}
									</span>
									<span className="text-black font-bold text-sm md:text-lg whitespace-nowrap">
										{currentSlide.amount} {currentSlide.currency}
									</span>
								</div>
							</div>
						</div>
						{/* Try it now button - Desktop only */}
						<Link href="/download-app">
							<motion.span 
								className="hidden md:inline-flex items-center justify-center bg-[hsl(154,70%,50%)] text-black font-medium py-3 px-8 rounded-full hover:bg-[hsl(154,70%,45%)] transition-colors cursor-pointer"
								whileHover={{ scale: 0.97 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
							>
								Try it now
							</motion.span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
