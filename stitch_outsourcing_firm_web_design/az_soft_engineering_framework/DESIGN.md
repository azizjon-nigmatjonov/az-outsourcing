---
name: AZ Soft Engineering Framework
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#9699ff'
  on-tertiary-container: '#1d17b2'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  code:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  container-max: 1280px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is rooted in the "Precision Engineering" aesthetic. It targets enterprise-level clients seeking technical excellence and reliability in outsourcing. The visual narrative combines the logic of a code editor with the sophistication of high-end aerospace interfaces.

The design style is a hybrid of **Glassmorphism** and **Minimalism**. It utilizes semi-transparent surfaces to create depth without clutter, paired with "Technical Borders"—ultra-thin lines that suggest structural integrity. The emotional response is one of controlled innovation: the UI should feel fast, responsive, and meticulously organized.

## Colors

The palette is anchored in a "Deep Space" dark mode. The background utilizes `#0F172A` for primary canvases and `#1E293B` for elevated containers and cards.

Accent colors are used strategically for high-impact interaction points:

- **Emerald Green (#10B981):** Represents success, system health, and primary action buttons.
- **Cyan (#06B6D4):** Used for data visualization, secondary highlights, and interactive links.
- **Support Tones:** Use low-opacity versions of Emerald and Cyan for hover states and subtle glow effects to simulate a "backlit" hardware feel.

## Typography

This design system pairs **Space Grotesk** for headings and **Inter** for functional text. Space Grotesk provides a technical, geometric edge that reflects engineering precision. Inter ensures maximum readability for complex documentation and project data.

Use the `label-caps` style for small headers, tags, and category labels to reinforce the "instrument panel" look. Line heights are generous in body text to maintain clarity against the dark background, while headlines remain tight and impactful.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop interfaces, transitioning to a fluid layout for mobile. A 12-column grid is standard, with generous 24px gutters to allow the technical borders and glass effects room to breathe.

The spacing rhythm is strictly based on a 4px baseline. Components should use consistent internal padding (e.g., 16px for cards, 12px for buttons) to maintain a rigorous, mathematical alignment throughout the UI.

## Elevation & Depth

Elevation is achieved through **Glassmorphism and Tonal Layering** rather than traditional drop shadows.

1.  **Base Layer:** `#0F172A` (Flat background).
2.  **Raised Layer:** `#1E293B` with a 1px solid border at 10% opacity white.
3.  **Overlay Layer:** Semi-transparent `#1E293B` (80% opacity) with a `backdrop-filter: blur(12px)`.
4.  **Interactive Glow:** Instead of shadows, use a soft outer glow (drop-shadow) using the primary Emerald or Cyan color at 20% opacity for focused or active states to simulate a digital "HUD" light.

## Shapes

The shape language is "Functional-Soft." We use a low corner radius (`roundedness: 1` / 4px) for most components like buttons, inputs, and cards. This maintains a professional, rigid technical feel while avoiding the harshness of 90-degree corners.

Small architectural details, such as "chamfered" corners (angled cuts) on specific call-to-action sections, can be used to emphasize the engineering theme.

## Components

- **Buttons:** Primary buttons use a solid Emerald-to-Cyan gradient with white text. Secondary buttons are "Ghost" style: transparent background with a 1px Cyan border and Cyan text.
- **Cards:** Use the Glassmorphism effect—`#1E293B` at 60% opacity with a top-left 1px highlight border to simulate light hitting a glass edge.
- **Inputs:** Darker background than the card (`#0F172A`) with a subtle 1px border. On focus, the border glows with the Cyan accent.
- **Chips/Tags:** Use the `label-caps` typography. Backgrounds should be low-opacity versions of the status color (e.g., Emerald at 10% for "Success").
- **Data Visualizations:** Use "Neon" line charts. Lines should have a 2px stroke with a soft glow effect in the corresponding accent color.
- **Progress Indicators:** Use thin, 2px "scanning" bars rather than thick circles to maintain the high-tech aesthetic.
