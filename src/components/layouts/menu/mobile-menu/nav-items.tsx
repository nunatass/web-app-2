import { HomeIcon, MessageSquareIcon } from "@/components/icons"
import { CreditCardIcon, DevicePhoneMobileIcon, InformationCircleIcon } from "@heroicons/react/24/outline"

export type NavItem = {
	id: string
	labelKey: string
	icon?: React.ReactNode
	hasDropdown?: boolean
	isExternal?: boolean
	href?: string
	sectionId?: string
}

export const navItems: NavItem[] = [
	{
		id: "home",
		labelKey: "home",
		icon: <HomeIcon className="w-5 h-5" />,
		sectionId: "hero",
	},
	{
		id: "app",
		labelKey: "app",
		icon: <DevicePhoneMobileIcon className="w-5 h-5" />,
		sectionId: "send-section",
	},
	{
		id: "plexosCard",
		labelKey: "plexosCard",
		icon: <CreditCardIcon className="w-5 h-5" />,
		href: "/card",
	},
	{
		id: "faqs",
		labelKey: "faqs",
		icon: <MessageSquareIcon className="w-5 h-5" />,
		href: "/faqs",
	},
	{
		id: "about",
		labelKey: "about",
		icon: <InformationCircleIcon className="w-5 h-5" />,
		href: "/about",
	},
]
