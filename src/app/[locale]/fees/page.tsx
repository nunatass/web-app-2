import type { Metadata } from "next"
import { AnimatedLogo } from "@/components/ui/animated-logo"
import Link from "next/link"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { BottomNav } from "@/components/layouts/menu/bottom-nav"
import { AccountFeesSection } from "@/components/layouts/pages/fees"

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "fees" })

	return {
		title: `${t("meta.title")} | Plexos`,
		description: t("meta.description"),
	}
}

export default async function FeesPage({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "fees" })

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
						src="/fees-low.png"
						alt="Transparent fees"
						width={600}
						height={450}
						className="w-full max-w-md md:max-w-lg lg:max-w-2xl object-contain"
						priority
					/>
				</div>

				{/* Title */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 md:mb-8 leading-[1.1] tracking-[-0.02em]">
					{t("hero.title.line1")}
					<br />
					{t("hero.title.line2")}
				</h1>

				{/* Subtitle */}
				<p className="text-base md:text-lg text-white/70 leading-relaxed text-center max-w-3xl mx-auto">
					{t("hero.subtitle")}
				</p>
			</div>

			{/* Account Fees Section */}
			<AccountFeesSection locale={locale} />

			<BottomNav forceGreenStyle />
		</main>
	)
}
