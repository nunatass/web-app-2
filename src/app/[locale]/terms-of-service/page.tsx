import type { Metadata } from "next"
import { AnimatedLogo } from "@/components/ui/animated-logo"
import Link from "next/link"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { BottomNav } from "@/components/layouts/menu/bottom-nav"

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "terms" })

	return {
		title: `${t("meta.title")} | Plexos`,
		description: t("meta.description"),
	}
}

export default async function TermsPage({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "terms" })

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
			<div className="relative container mx-auto px-6 py-20 md:py-32 max-w-4xl">
				{/* Image */}
				<div className="flex justify-center mb-8 md:mb-12">
					<Image
						src="/Terms of Service.png"
						alt="Terms of Service"
						width={600}
						height={450}
						className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
					/>
				</div>

				{/* Title */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
					{t("title")}
				</h1>

				{/* Last Updated */}
				<p className="text-sm text-white/50 text-center mb-12 md:mb-16">
					{t("lastUpdated")}
				</p>

			{/* Terms Content */}
			<div className="max-w-none">
				<div className="space-y-8 text-white">
						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. Introduction</h2>
							<p className="leading-relaxed mb-4">Welcome to Plexos.</p>
							<p className="leading-relaxed mb-4">
								These Terms of Service ("Terms") govern your access to and use of the Plexos mobile application, 
								website, cards, and related services ("Services"). By creating an account or using Plexos, you agree 
								to be bound by these Terms.
							</p>
							<p className="leading-relaxed">If you do not agree, you must not use our Services.</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. About Plexos</h2>
							<p className="leading-relaxed mb-4">
								Plexos is a fintech platform designed to help users access global financial services, including 
								international debit cards and digital payments.
							</p>
							<p className="leading-relaxed">
								Plexos is not a bank. Financial services, card issuance, and safeguarding of funds are provided 
								through licensed and regulated third-party financial institutions ("Partners"). Plexos manages the 
								user experience, technology, and customer interface.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3. Eligibility</h2>
							<p className="leading-relaxed mb-4">To use Plexos, you must:</p>
							<ul className="list-disc pl-6 space-y-2 mb-4">
								<li>Be at least 18 years old</li>
								<li>Have legal capacity to enter into a contract</li>
								<li>Reside in a supported country</li>
								<li>Provide accurate and truthful information</li>
							</ul>
							<p className="leading-relaxed">
								We may refuse or suspend access if eligibility requirements are not met.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">4. Account Registration & KYC</h2>
							<p className="leading-relaxed mb-4">
								To use Plexos, you must create an account and complete identity verification ("KYC").
							</p>
							<p className="leading-relaxed mb-4">You agree to:</p>
							<ul className="list-disc pl-6 space-y-2 mb-4">
								<li>Provide accurate personal information</li>
								<li>Keep your details up to date</li>
								<li>Use your account only for lawful purposes</li>
							</ul>
							<p className="leading-relaxed">
								We may suspend or close accounts that contain false, misleading, or incomplete information.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">5. Plexos Services</h2>
							<p className="leading-relaxed mb-4">Plexos may provide access to the following services:</p>
							<ul className="list-disc pl-6 space-y-2 mb-4">
								<li>Virtual international debit cards</li>
								<li>Physical debit cards</li>
								<li>Card payments (online and in-store)</li>
								<li>Wallet balance management</li>
								<li>Peer-to-peer transfers between Plexos users</li>
								<li>Currency exchange (where available)</li>
							</ul>
							<p className="leading-relaxed">Services may vary by country and are subject to availability.</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">6. Cards</h2>
							<h3 className="text-xl font-semibold text-white mb-3">Virtual Cards</h3>
							<p className="leading-relaxed mb-4">
								Virtual cards are issued instantly and can be used for online payments and subscriptions.
							</p>
							
							<h3 className="text-xl font-semibold text-white mb-3">Physical Cards</h3>
							<p className="leading-relaxed mb-4">
								Physical cards can be ordered and delivered to eligible addresses. Delivery times and fees may apply.
							</p>
							
							<h3 className="text-xl font-semibold text-white mb-3">Card Controls</h3>
							<p className="leading-relaxed mb-4">
								You can manage your cards directly in the app, including:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Freezing or unfreezing cards</li>
								<li>Viewing transactions</li>
								<li>Setting limits (where available)</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">7. Adding and Using Funds</h2>
							<p className="leading-relaxed mb-4">
								You may add money to your Plexos account using available methods, which may include:
							</p>
							<ul className="list-disc pl-6 space-y-2 mb-4">
								<li>Bank transfers</li>
								<li>Debit or credit cards</li>
								<li>Digital wallets (e.g. Apple Pay)</li>
								<li>Local payment methods</li>
							</ul>
							<p className="leading-relaxed">
								Funds are held by our regulated Partners, not directly by Plexos.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">8. Fees</h2>
							<p className="leading-relaxed mb-4">Plexos is committed to transparent pricing.</p>
							<p className="leading-relaxed mb-4">
								Any applicable fees (such as card issuance, currency exchange, or premium features) will be clearly 
								displayed before you complete a transaction.
							</p>
							<p className="leading-relaxed">
								Up-to-date fee information is available on our <Link href="/fees" className="text-[hsl(154,70%,50%)] underline hover:text-[hsl(154,70%,60%)]">Fees page</Link>.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">9. Prohibited Activities</h2>
							<p className="leading-relaxed mb-4">You must not use Plexos for:</p>
							<ul className="list-disc pl-6 space-y-2 mb-4">
								<li>Illegal activities</li>
								<li>Fraud, money laundering, or terrorism financing</li>
								<li>Circumventing sanctions or regulations</li>
								<li>Misuse of cards or accounts</li>
								<li>Providing services to third parties without authorization</li>
							</ul>
							<p className="leading-relaxed">
								We may suspend or terminate accounts involved in prohibited activity.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">10. Security & Responsibility</h2>
							<p className="leading-relaxed mb-4">You are responsible for:</p>
							<ul className="list-disc pl-6 space-y-2 mb-4">
								<li>Keeping your login details secure</li>
								<li>Not sharing your account with others</li>
								<li>Reporting suspicious activity immediately</li>
							</ul>
							<p className="leading-relaxed">
								Plexos is not responsible for losses resulting from your failure to protect your account credentials.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">11. Suspensions & Account Closure</h2>
							<p className="leading-relaxed mb-4">We may suspend or close your account if:</p>
							<ul className="list-disc pl-6 space-y-2 mb-4">
								<li>Required by law or regulators</li>
								<li>You breach these Terms</li>
								<li>Suspicious or fraudulent activity is detected</li>
							</ul>
							<p className="leading-relaxed">
								You may close your account at any time, subject to settlement of outstanding balances.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">12. Data Protection & Privacy</h2>
							<p className="leading-relaxed mb-4">
								Your personal data is processed in accordance with our Privacy Policy.
							</p>
							<p className="leading-relaxed">
								By using Plexos, you consent to the collection and processing of your data for the purpose of 
								providing our Services, complying with legal obligations, and preventing fraud.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">13. Limitation of Liability</h2>
							<p className="leading-relaxed mb-4">To the maximum extent permitted by law:</p>
							<ul className="list-disc pl-6 space-y-2 mb-4">
								<li>Plexos is not liable for indirect or consequential losses</li>
								<li>Plexos is not responsible for failures caused by third-party providers, networks, or force majeure events</li>
							</ul>
							<p className="leading-relaxed">
								Nothing in these Terms limits liability where it cannot be excluded by law.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">14. Changes to These Terms</h2>
							<p className="leading-relaxed mb-4">
								We may update these Terms from time to time. If changes are material, we will notify you through 
								the app or website.
							</p>
							<p className="leading-relaxed">
								Continued use of Plexos after updates means you accept the revised Terms.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">15. Governing Law</h2>
							<p className="leading-relaxed">
								These Terms are governed by the laws applicable to Plexos' operating jurisdiction, without regard 
								to conflict of law principles.
							</p>
						</section>

						<section>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">16. Contact Us</h2>
							<p className="leading-relaxed mb-4">
								If you have questions or concerns about these Terms, you can contact us at:
							</p>
							<p className="leading-relaxed">
								📧 <a href="mailto:support@plexos.finance" className="text-[hsl(154,70%,50%)] underline hover:text-[hsl(154,70%,60%)]">support@plexos.finance</a>
							</p>
							<p className="leading-relaxed">
								🌐 <a href="https://www.plexos.finance" className="text-[hsl(154,70%,50%)] underline hover:text-[hsl(154,70%,60%)]">www.plexos.finance</a>
							</p>
						</section>
					</div>
				</div>
			</div>

			<BottomNav forceGreenStyle />
		</main>
	)
}
