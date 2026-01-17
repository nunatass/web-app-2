"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { footerConfig } from "@/config/footer"

export function Footer() {
	const t = useTranslations("footer")

	return (
		<footer className="bg-black text-white">
			{/* Large PLEXOS Text - Full width, min half screen height on desktop */}
			<div className="relative w-full min-h-[22vh] md:min-h-[50vh] flex items-center justify-center py-8 md:py-12">
				<h2 className="text-[26vw] font-bold leading-[0.85] tracking-[-0.04em] text-center select-none whitespace-nowrap">
					PLEXOS
				</h2>
			</div>

			{/* Footer Content */}
			<div className="container mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-16">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
					{/* Get Started */}
					<div>
						<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
							{t("sections.getStarted")}
						</h3>
						<ul className="space-y-2">
							{footerConfig.getStarted.map((item) => (
								<li key={item.key}>
									<Link
										href={item.href}
										className="text-sm text-white hover:text-gray-300 transition-colors"
									>
										{t(`links.${item.key}`)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Discover */}
					<div>
						<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
							{t("sections.discover")}
						</h3>
						<ul className="space-y-2">
							{footerConfig.discover.map((item) => (
								<li key={item.key}>
									<Link
										href={item.href}
										className="text-sm text-white hover:text-gray-300 transition-colors"
									>
										{t(`links.${item.key}`)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
							{t("sections.company")}
						</h3>
						<ul className="space-y-2">
							{footerConfig.companyLinks.map((item) => (
								<li key={item.key}>
									<Link
										href={item.href}
										className="text-sm text-white hover:text-gray-300 transition-colors"
									>
										{t(`links.${item.key}`)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
							{t("legal")}
						</h3>
						<ul className="space-y-2">
							{footerConfig.legal.map((item) => (
								<li key={item.key}>
									<Link
										href={item.href}
										className="text-sm text-white hover:text-gray-300 transition-colors"
									>
										{t(`legalLinks.${item.key}`)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Help */}
					<div>
						<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
							{t("sections.help")}
						</h3>
						<ul className="space-y-2">
							{footerConfig.help.map((item) => (
								<li key={item.key}>
									<Link
										href={item.href}
										className="text-sm text-white hover:text-gray-300 transition-colors"
									>
										{t(`links.${item.key}`)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Social Media */}
					<div>
						<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
							{t("socialMedia")}
						</h3>
						<ul className="space-y-2">
							{footerConfig.social.twitter && (
								<li>
									<Link
										href={footerConfig.social.twitter}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-white hover:text-gray-300 transition-colors"
									>
										X/Twitter
									</Link>
								</li>
							)}
							{footerConfig.social.instagram && (
								<li>
									<Link
										href={footerConfig.social.instagram}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-white hover:text-gray-300 transition-colors"
									>
										Instagram
									</Link>
								</li>
							)}
							{footerConfig.social.linkedin && (
								<li>
									<Link
										href={footerConfig.social.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-white hover:text-gray-300 transition-colors"
									>
										LinkedIn
									</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>

			{/* Regulatory Information */}
			<div className="border-t border-gray-800">
				<div className="container mx-auto px-6 md:px-10 lg:px-12 py-10 md:py-12">
					<p className="text-xs text-gray-500 mb-4">
						© {footerConfig.company.name} {new Date().getFullYear()}
					</p>
					<div className="space-y-4 text-xs text-gray-500 leading-relaxed">
						<p>{t("regulatory.paragraph1")}</p>
						<p>{t("regulatory.paragraph2")}</p>
						<p>{t("regulatory.paragraph3")}</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
