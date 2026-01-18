import { Home, CreditCard, MessageSquare, Smartphone, Info } from "lucide-react"
import type { NavItem } from "./types"

export const navItems: NavItem[] = [
	{
		id: "home",
		labelKey: "home",
		icon: <Home className="w-5 h-5" />,
		sectionId: "hero",
	},
	{
		id: "app",
		labelKey: "app",
		icon: <Smartphone className="w-5 h-5" />,
		sectionId: "send-section",
	},
	{
		id: "plexosCard",
		labelKey: "plexosCard",
		icon: <CreditCard className="w-5 h-5" />,
		href: "/card",
	},
	{
		id: "faqs",
		labelKey: "faqs",
		icon: <MessageSquare className="w-5 h-5" />,
		href: "/faqs",
	},
	{
		id: "about",
		labelKey: "about",
		icon: <Info className="w-5 h-5" />,
		href: "/about",
	},
]
