"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { BuildingLibraryIcon, CreditCardIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import accountFeesData from "@/data/account-fees.json"
import { RegionSelector } from "@/components/ui/region-selector"
import type { RegionId } from "@/data/regions"

interface AccountFeesProps {
	locale: string
}

export function AccountFeesSection({ locale }: AccountFeesProps) {
	const [activeTab, setActiveTab] = useState<"deposit" | "withdraw">("deposit")
	const [selectedRegion, setSelectedRegion] = useState<RegionId>("portugal")
	const data = accountFeesData[locale as keyof typeof accountFeesData] || accountFeesData.en

	const methods = activeTab === "deposit" ? data.deposit : data.withdraw

	const getIcon = (iconName: string) => {
		switch (iconName) {
			case "bank":
				return <BuildingLibraryIcon className="w-full h-full" />
			case "card":
				return <CreditCardIcon className="w-full h-full" />
			case "plexos":
				return <BuildingLibraryIcon className="w-full h-full" />
			case "atm":
				return <CreditCardIcon className="w-full h-full" />
			default:
				return <BuildingLibraryIcon className="w-full h-full" />
		}
	}

	return (
		<section className="relative py-12 md:py-16 bg-black">
			<div className="px-6 md:px-10 lg:px-12">
				<div className="bg-[#0a0a0a] rounded-[40px] p-6 md:p-10">
				{/* Header */}
				<div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{data.title}</h2>

					<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
						{/* Tabs */}
						<div className="relative flex items-center gap-2 bg-[#141414] rounded-full p-1 flex-1 sm:flex-initial">
							<button
								onClick={() => setActiveTab("deposit")}
								className={`relative z-10 flex-1 sm:flex-initial px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
									activeTab === "deposit"
										? "text-black"
										: "text-white/70 hover:text-white"
								}`}
							>
								{data.tabs.deposit}
							</button>
							<button
								onClick={() => setActiveTab("withdraw")}
								className={`relative z-10 flex-1 sm:flex-initial px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
									activeTab === "withdraw"
										? "text-black"
										: "text-white/70 hover:text-white"
								}`}
							>
								{data.tabs.withdraw}
							</button>
							{/* Animated indicator */}
							<motion.div
								layoutId="activeTab"
								className="absolute inset-y-1 rounded-full bg-[hsl(154,70%,50%)] shadow-lg"
								initial={false}
								transition={{
									type: "spring",
									stiffness: 500,
									damping: 30
								}}
								style={{
									left: activeTab === "deposit" ? "4px" : "50%",
									right: activeTab === "deposit" ? "50%" : "4px"
								}}
							/>
						</div>

						{/* Region Selector */}
						<RegionSelector value={selectedRegion} onChange={setSelectedRegion} className="w-full sm:w-auto" />
					</div>
				</div>

					{/* Payment Methods Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{methods.map((method) => (
							<motion.div
								key={method.id}
								className="bg-white/5 rounded-[24px] md:rounded-[32px] p-5 md:p-6 hover:bg-white/10 transition-colors border border-white/10"
							>
								{/* Method Header */}
								<div className="flex items-center gap-3 mb-5">
									<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[hsl(154,70%,50%)]/20 flex items-center justify-center text-[hsl(154,70%,50%)]">
										<div className="w-6 h-6 md:w-7 md:h-7">
											{getIcon(method.icon)}
										</div>
									</div>
									<h3 className="text-lg md:text-xl font-semibold text-white">{method.name}</h3>
								</div>

								{/* Method Details */}
								<div className="space-y-3">
									<div className="flex justify-between items-center">
										<span className="text-xs md:text-sm text-white/70">{data.labels.duration}</span>
										<span className="text-sm md:text-base font-semibold text-white">{method.duration}</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-xs md:text-sm text-white/70">{data.labels.senderFee}</span>
										<span className="text-sm md:text-base font-semibold text-white">{method.senderFee}</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-xs md:text-sm text-white/70">{data.labels.receiverFee}</span>
										<span className="text-sm md:text-base font-semibold text-white">{method.receiverFee}</span>
									</div>
									<div className="flex justify-between items-center pt-3 border-t border-white/10">
										<span className="text-xs md:text-sm text-white/70">{data.labels.limits}</span>
										<span className="text-sm md:text-base font-semibold text-white">{method.limits}</span>
									</div>
								</div>
								</motion.div>
							))}
						</div>
				</div>
			</div>
		</section>
	)
}
