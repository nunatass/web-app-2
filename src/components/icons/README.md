# Icons

Centralized icon exports - combining Heroicons and custom SVG icons.

## Structure

```
icons/
├── apple-icon.tsx        # Apple logo SVG
├── google-play-icon.tsx  # Google Play logo SVG
├── mouse-icon.tsx        # Mouse/scroll icon SVG
└── index.ts              # Centralized exports
```

## Usage

### Import from centralized location

```tsx
import { AppleIcon, GooglePlayIcon, HomeIcon, ChevronDownIcon } from "@/components/icons"

// Use anywhere
<AppleIcon className="w-5 h-5" />
<HomeIcon className="w-6 h-6 text-black" />
```

## Available Icons

### Heroicons (24 outline)
- `GlobeIcon` (re-exported from GlobeAltIcon)
- `ChevronDownIcon`
- `ChevronUpIcon`
- `HomeIcon`
- `ArrowUpRightIcon`
- `MessageSquareIcon` (re-exported from ChatBubbleLeftIcon)
- `MenuIcon` (re-exported from Bars2Icon)
- `CloseIcon` (re-exported from XMarkIcon)

### Custom Brand Icons
- `AppleIcon` - Apple logo
- `GooglePlayIcon` - Google Play logo
- `MouseIcon` - Mouse/scroll indicator

## Adding New Icons

### For Heroicons
Add to `index.ts`:
```ts
export { NewIcon } from "@heroicons/react/24/outline"
```

### For Custom SVG Icons
1. Create new file: `new-icon.tsx`
```tsx
import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

export function NewIcon(props: IconProps) {
  return (
    <svg {...props}>
      {/* SVG path */}
    </svg>
  )
}
```

2. Export in `index.ts`:
```ts
export { NewIcon } from "./new-icon"
```

## Icon Props

All icons accept standard SVG props:
- `className` - Tailwind classes for styling
- `width` / `height` - Size (defaults provided)
- `fill` / `stroke` - Colors
- Standard HTML attributes

## Examples

```tsx
// Basic usage
<AppleIcon className="w-5 h-5 text-black" />

// With custom props
<GooglePlayIcon 
  className="w-6 h-6" 
  fill="currentColor" 
/>

// In components
<Button>
  <HomeIcon className="w-4 h-4" />
  Home
</Button>
```

## Notes

- All custom icons include `aria-hidden="true"` by default
- Icons inherit `currentColor` for easy theming
- Separate files make tree-shaking more efficient
- Centralized exports provide single import source
