import { BottomNav } from "@/components/layouts/menu"
import { HeroSection } from "@/components/layouts/pages/home/hero-section"

export default function Home() {
	return (
		<main className="relative pb-24 md:pb-0">
			<HeroSection />
			<BottomNav />
		</main>
	)
}
