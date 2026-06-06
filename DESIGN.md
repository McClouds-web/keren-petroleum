---
name: Keren Corporate Identity
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#404751'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#717882'
  outline-variant: '#c0c7d3'
  surface-tint: '#0061a3'
  primary: '#005894'
  on-primary: '#ffffff'
  primary-container: '#0071bc'
  on-primary-container: '#eaf1ff'
  inverse-primary: '#9ecaff'
  secondary: '#ad3300'
  on-secondary: '#ffffff'
  secondary-container: '#ff642d'
  on-secondary-container: '#5a1600'
  tertiary: '#565555'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e6d6d'
  on-tertiary-container: '#f3f0ef'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#9ecaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497c'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59e'
  on-secondary-fixed: '#3a0b00'
  on-secondary-fixed-variant: '#842500'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: IBM Plex Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
spacing:
  grid-columns: '12'
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 64px
---

## Brand & Style

This design system is engineered for a leading industrial presence in the energy sector. It conveys reliability, precision, and institutional strength through a **Corporate / Modern** aesthetic infused with **Geometric Structuralism**. 

The brand personality is authoritative yet forward-looking. To achieve this, the UI utilizes a high-contrast foundation of solid white backgrounds paired with aggressive, angular structural dividers that echo the "K" geometry from the brand mark. The visual language favors sharp edges and clear demarcations over soft gradients, ensuring every interface feels intentional and engineered.

## Colors

The palette is anchored by **KP Blue** (Primary), symbolizing stability and corporate depth, and **KP Orange** (Secondary), representing energy and action. 

- **Primary (KP Blue):** Used for primary navigation, structural headers, and essential branding elements.
- **Secondary (KP Orange):** Reserved strictly for high-priority Call-to-Actions (CTAs), alerts, and key interactive focal points.
- **Tertiary/Text:** A deep charcoal (#1A1A1A) is used for body text to maintain better readability than pure black while appearing equally serious.
- **Background:** A clinical white (#FFFFFF) is mandatory for the main canvas to maintain a premium, high-contrast feel.

## Typography

The design system utilizes **IBM Plex Sans** across all levels. This typeface was chosen for its industrial heritage and technical precision, balancing grotesque efficiency with human readability.

Headlines should be set with tight letter-spacing to appear "impactful" and "solid." Labels and small UI elements should utilize uppercase styling with increased tracking to maintain a sophisticated, institutional feel. All headings must be bold (600+) to command authority within the white-space-heavy layout.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy on desktop to ensure content remains centered and structured, transitioning to a fluid model for mobile devices.

- **Desktop (1440px+):** 12-column grid with 24px gutters and generous 80px side margins. 
- **Tablet (768px - 1439px):** 8-column grid with 24px gutters.
- **Mobile (320px - 767px):** 4-column grid with 16px gutters and 20px side margins.

Horizontal dividers and container edges should align strictly to the grid. Use "Geometric Structural Dividers"—thick 4px vertical or diagonal lines in KP Blue—to separate major content sections, creating a sense of architectural blueprinting.

## Elevation & Depth

To maintain a "crisp" and "modern" feel, this design system rejects soft shadows and blurs. Depth is achieved through **Low-contrast outlines** and **Tonal Layering**.

- **Surface Tiers:** Backgrounds are pure white. Secondary surfaces (like sidebars) use a very light neutral gray (#F2F2F2).
- **Outlines:** Cards and containers use a subtle 1px solid border (#E0E0E0) instead of shadows.
- **Active State Depth:** Instead of a shadow, an active card is indicated by a 4px solid KP Blue border on the left side or a full-width thickness increase.

## Shapes

The shape language is strictly **Sharp (0px)**. 

To reinforce the corporate and industrial nature of the brand, no rounded corners are permitted. This applies to buttons, input fields, cards, and image containers. The 90-degree angle is a core brand asset, conveying "precision engineering." Where diagonal geometry is used (for decorative dividers), it must maintain a consistent 45-degree or 30-degree angle.

## Components

### Buttons
- **Primary:** KP Orange background, white text, bold, all-caps. No border. Sharp corners.
- **Secondary:** White background, KP Blue text, 2px KP Blue solid border.
- **Tertiary:** Text-only in KP Blue with a 2px bottom border that appears on hover.

### Cards
- **Construction:** Pure white background, 1px light gray border, sharp corners.
- **Header:** Optional KP Blue top-border (4px) for emphasis.
- **Content:** Strict alignment to internal 24px padding.

### Input Fields
- **Default:** White background, 1px gray border, sharp corners.
- **Active/Focus:** 2px KP Blue border. Label sits above the field in "label-bold" typography.

### Data Grids
- **Header:** KP Blue background with white bold text.
- **Rows:** Alternate row colors (White and #F9F9F9) for readability. Vertical lines should be omitted; use horizontal dividers only (1px).

### Chips/Status Indicators
- Rectangular, sharp-edged blocks. Use high-contrast background colors with white text for status (e.g., "Active" in KP Blue, "Alert" in KP Orange).