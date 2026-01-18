import { BottomNav } from "@/components/layouts/menu"
import { FeaturesSection } from "@/components/layouts/pages/home/features-section"
import { HeroSection } from "@/components/layouts/pages/home/hero-section"
import { SendSection } from "@/components/layouts/pages/home/send-section"
import { SpendingFeatures } from "@/components/layouts/pages/home/spending-features"

export default function Home() {
	return (
		<main className="relative pb-24 md:pb-0">
			<HeroSection />
			<SpendingFeatures />
			<FeaturesSection />
			<SendSection />
			<BottomNav />
		</main>
	)
}
