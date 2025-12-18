import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

export function MouseIcon(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<rect x="5" y="2" width="14" height="20" rx="7" />
			<path d="M12 6v4" />
		</svg>
	)
}
