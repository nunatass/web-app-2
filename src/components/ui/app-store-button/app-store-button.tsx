"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

import { AppleIcon, GooglePlayIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type AppStoreButtonProps = {
	store: "apple" | "google"
	href: string
	className?: string
}

export function AppStoreButton({ store, href, className }: AppStoreButtonProps) {
	const t = useTranslations("hero.appStore")

	const label = store === "apple" ? t("downloadOn") : t("getItOn")
	const storeName = store === "apple" ? t("appStore") : t("googlePlay")

	const Icon = store === "apple" ? AppleIcon : GooglePlayIcon

	return (
		<Button id={`app-store-${store}`} variant="outline" className={cn("px-3 sm:px-4 md:px-6 h-12", className)}>
			<Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
				<Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
				<div className="flex flex-col items-start whitespace-nowrap">
					<span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide">{label}</span>
					<span className="text-xs sm:text-sm font-semibold">{storeName}</span>
				</div>
			</Link>
		</Button>
	)
}
