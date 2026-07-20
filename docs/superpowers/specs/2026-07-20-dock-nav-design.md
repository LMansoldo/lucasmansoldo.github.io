# Dock-style nav (desktop + mobile) — design

## Context

`Nav.svelte` currently renders one fixed pill at the top of the page (`.nav.glass`)
containing: a text logo (`.mark`), four text links (`#work #experience #stack #contact`),
and a language-toggle button. At `max-width:820px` the links are hidden outright
(`.nav nav{display:none}`) — there is currently **no navigation at all** on mobile.

## Goal

Replace the text links with a macOS-dock-style row of square icon buttons, on both
desktop and mobile, with no navigation gap on small screens.

## Design

### Layout

- **Desktop (>820px):** the top pill keeps its current position/shape. The four text
  links are replaced by four square icon buttons, placed between the logo and the
  language toggle — same slot the `<nav>` occupies today.
- **Mobile (≤820px):** the top pill drops the icon row and shows only the logo and
  language toggle. A second, separate floating dock — reusing the existing `.glass`
  treatment — is fixed to the bottom-center of the viewport, containing the same four
  icon buttons. It stays visible while scrolling (`position:fixed`), like an iOS home
  dock.
- Both docks render the same icon-button markup/styles; only the wrapping container
  (top pill vs. bottom floating bar) differs, so there is one visual language and one
  place to change icon styling.

### Icon set

Four outline SVGs, 24×24 viewBox, same convention as the existing icons in
`Chip.svelte` / `Contact.svelte` (`fill`, no stroke):

| Section | Icon |
|---|---|
| Work (`#work`) | briefcase |
| Experience (`#experience`) | timeline / line-chart |
| Stack (`#stack`) | stacked layers |
| Contact (`#contact`) | paper plane / envelope |

Each button is a squircle (`border-radius` ~30%, not a full circle), ~44px square on
desktop, ~46px on the mobile dock (bigger tap target).

### Interaction

- **Hover (desktop only, pointer devices):** the hovered icon scales up smoothly
  (`transform:scale(...)`) and a small tooltip with the section's localized label
  rises above it. Only the hovered icon grows — neighbors do not shift (no full-dock
  wave), keeping the pill's width stable.
- **Active section indicator:** a small dot renders under the icon whose section is
  currently in view, on both docks. Driven by an `IntersectionObserver` watching the
  four section elements (`#work #experience #stack #contact`), reusing the same ids
  the pill's anchor links already target. Whichever section crosses a mid-viewport
  threshold becomes "active"; ties resolve to the most recently intersecting one.
- **Mobile:** no hover/tooltip (no pointer). Tap navigates via the existing anchor
  `href`. `aria-label` (localized) carries the accessible name in place of the
  tooltip.
- Icons remain plain `<a href="#...">` elements — scrolling behavior (`scroll-behavior:smooth`
  already set globally) is unchanged.

### Component structure

- `Nav.svelte` gains an inline list of `{ id, href, label, icon }` built from the
  existing `t.nav` i18n strings (no new content keys — labels are reused as tooltip
  text and `aria-label`).
- A small shared icon-button snippet/markup (Svelte `{#snippet}` or a tiny child
  component) renders one dock button; both the desktop pill and the new mobile dock
  loop over the same four entries with it, so the SVG paths and the active/hover
  logic live in one place.
- The `IntersectionObserver` setup lives in `Nav.svelte`'s `onMount`, mirroring the
  pointer-tracking effect pattern already used for `.glass` in `+layout.svelte`
  (guarded, cleaned up on unmount).
- CSS additions go in `app.css` under the existing `NAV` section, following the
  file's current single-global-stylesheet convention (components have no local
  `<style>` blocks today).

### Out of scope

- No changes to `.mark` (logo) or `.lang` (language toggle) beyond their new
  position relative to the icon row.
- No changes to section content, ids, or the `i18n` data shape.
- No "wave" magnification affecting neighboring icons — only the hovered icon
  scales, to avoid destabilizing the pill's layout.
