import { Home } from "lucide-react"
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
		sectionId: "app",
	},
	{
		id: "about",
		labelKey: "about",
		hasDropdown: true,
	},
]
