import type { Metadata } from "next"
import { AnimatedLogo } from "@/components/ui/animated-logo"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import faqsData from "@/data/faqs.json"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { BottomNav } from "@/components/layouts/menu/bottom-nav"

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "navigation" })

	return {
		title: `${t("faqsTitle")} | Plexos`,
		description: t("faqsTitle"),
	}
}

// Helper function to convert markdown links to JSX
function renderAnswer(text: string) {
	const parts = text.split(/(\[.*?\]\(.*?\))/)
	
	return parts.map((part, index) => {
		const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
		if (linkMatch) {
			const [, linkText, href] = linkMatch
			return (
				<Link 
					key={index} 
					href={href} 
					className="text-[hsl(154,70%,50%)] underline hover:text-[hsl(154,70%,60%)] transition-colors"
				>
					{linkText}
				</Link>
			)
		}
		return part
	})
}

export default async function FAQsPage({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "navigation" })

	// Get FAQs for the current locale
	const faqs = faqsData[locale as keyof typeof faqsData] || faqsData.en

	return (
		<main className="relative min-h-screen bg-black overflow-hidden">
			{/* Radial gradient overlay for lighting effect */}
			<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" />
			
			{/* Header with Logo */}
			<div className="absolute top-0 left-0 right-0 z-50 px-6 py-4 md:px-10 lg:px-12">
				<Link href="/">
					<AnimatedLogo variant="dark" className="w-32 md:w-40" />
				</Link>
			</div>

			{/* Content */}
			<div className="relative container mx-auto px-6 py-20 md:py-32">
			{/* Image */}
			<div className="flex justify-center mb-8 md:mb-12">
				<Image
					src="/word-coin.png"
					alt="Global payments"
					width={400}
					height={300}
					className="w-full max-w-md md:max-w-lg object-contain"
					priority
				/>
			</div>

				{/* Subtitle */}
				<p className="text-base md:text-lg text-white/70 text-center max-w-3xl mx-auto mb-6 md:mb-8">
					{t("faqsSubtitle")}
				</p>

				{/* Title */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-16">
					{t("faqsTitle")}
				</h1>

				<div className="max-w-4xl mx-auto">
					<Accordion type="single" collapsible className="w-full space-y-4">
						{faqs.map((faq) => (
							<AccordionItem key={faq.id} value={faq.id}>
								<AccordionTrigger>{faq.question}</AccordionTrigger>
								<AccordionContent>{renderAnswer(faq.answer)}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>

			<BottomNav forceGreenStyle />
		</main>
	)
}
