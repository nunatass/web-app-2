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
		<Button id={`app-store-${store}`} variant="outline" className={cn("w-16 md:max-w-36 px-12 ", className)}>
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 h-5 w-16 md:w-36 justify-center"
			>
				<Icon className="md:w-5 md:h-5 w-4 h-4 flex" />
				<div className="flex flex-col items-start">
					<span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide">{label}</span>
					<span className="text-xs font-semibold">{storeName}</span>
				</div>
			</Link>
		</Button>
	)
}
