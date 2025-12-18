# Menu Components

Clean, simple navigation menu system for desktop and mobile with smart visibility.

## Structure

```
menu/
├── mobile-menu/              # Full screen mobile menu
│   ├── mobile-menu.tsx      # Full screen menu overlay
│   ├── animations.ts        # Menu animations
│   └── index.ts             # Exports
├── mobile-menu-button/       # Mobile menu toggle button
│   ├── mobile-menu-button.tsx  # Button with hamburger/X icon
│   ├── animations.ts          # Button animations
│   └── index.ts               # Exports
├── nav-button/               # Navigation button component
│   ├── nav-button.tsx        # Button UI & logic
│   ├── animations.ts         # Button animations
│   └── index.ts              # Exports
├── bottom-nav/               # Bottom navigation bar
│   ├── bottom-nav.tsx        # Nav bar with scroll detection
│   └── index.ts              # Exports
├── nav-items.tsx             # Navigation items configuration
├── types.ts                  # TypeScript types
└── index.ts                  # Main exports
```

## Components

### MobileMenu
Full screen overlay menu for mobile navigation.

```tsx
import { MobileMenu } from "@/components/layouts/menu"

<MobileMenu 
  isOpen={isMenuOpen}
  onClose={() => setIsMenuOpen(false)}
  activeItem={activeItem}
  onNavClick={(id) => handleClick(id)}
  useHeroStyle={true}
/>
```

**Features:**
- Full screen overlay with green background
- Centered navigation items
- Smooth slide animations (up from bottom, exit to top)
- Auto-closes on item selection

### MobileMenuButton
Toggle button for mobile navigation with animated icon change.

```tsx
import { MobileMenuButton } from "@/components/layouts/menu"

<MobileMenuButton 
  isOpen={isMenuOpen}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  useHeroStyle={true}
/>
```

**Features:**
- Shows "Menu" text on left
- Shows 2-bar hamburger icon on right when closed
- Shows X icon when open
- Animated transitions
- Positioned closer to bottom (bottom-3)

### NavButton
Navigation button with active state and animations.

```tsx
import { NavButton } from "@/components/layouts/menu"

<NavButton 
  item={navItem}
  isActive={true}
  onClick={() => handleClick()}
/>
```

### BottomNav
Smart bottom navigation bar with responsive behavior.

```tsx
import { BottomNav } from "@/components/layouts/menu"

<BottomNav />
```

**Features:**

#### Desktop (md+)
- Always visible
- Full navigation buttons
- Bottom center of screen

#### Mobile
- Hidden by default on hero section
- Appears after scrolling 100px
- Shows "Menu" button with hamburger/X icon
- Clicking opens vertical menu with all nav items
- Animated entrance/exit
- Automatically closes when item selected

## Behavior

### Visibility
- **Hero section (top):** Hidden on mobile, visible on desktop
- **After scrolling:** Appears on mobile with smooth animation
- **Always visible:** On desktop screens

### Mobile Menu Flow
1. User scrolls down 100px → Menu button slides up from bottom
2. User taps "Menu" → 2-bar hamburger changes to X, full screen menu slides up
3. User sees centered nav items on green background
4. User selects item → Full screen menu slides away, smooth scroll to section
5. User taps X → Menu closes with smooth animation

### Scroll Detection
The nav tracks scroll position to:
- Show/hide on mobile
- Update active section
- Change background style (hero vs other sections)

## Styling

The navigation adapts its background:
- **Hero/App/About sections:** Semi-transparent with backdrop blur
- **White sections (Unify):** Green background for visibility

## Animations

### Hero Section Entrance
All elements animate on page load:
- **Header:** Fade in (0s delay)
- **Title:** Fade up (0.2s delay)
- **iPhone:** Scale in (0.4s delay)
- **Description:** Fade up (0.6s delay)
- **Buttons:** Fade up (0.8s delay)

### Mobile Menu
- Button: Scale on hover/tap
- Menu: Fade + scale animation
- Items: Staggered appearance

## Configuration

### Nav Items
Define navigation items in `nav-items.tsx`:

```tsx
export const navItems: NavItem[] = [
  {
    id: "home",
    labelKey: "home",
    icon: <Home />,
    sectionId: "hero"
  },
  {
    id: "about",
    labelKey: "about",
    hasDropdown: true
  }
]
```

## Usage Example

```tsx
// In your layout
import { BottomNav } from "@/components/layouts/menu"

export default function Layout() {
  return (
    <>
      <main>{children}</main>
      <BottomNav />
    </>
  )
}
```

## Adding New Nav Items

1. Update `nav-items.tsx`
2. Add translation in `i18n/translations/`
3. Add section ID to your component

## Mobile Best Practices

- Menu button only shows after scrolling (better UX on hero)
- Hamburger/X icon provides clear visual feedback
- Menu auto-closes after selection
- Smooth animations for better feel
- Backdrop blur maintains readability

## Accessibility

- ✅ ARIA labels for screen readers
- ✅ Proper button roles and states
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Semantic HTML
