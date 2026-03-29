# Design System Specification

## 1. Creative North Star: "The Cinematic Pulse"
This design system is built on the philosophy of **Cinematic AI Architecture**. We are moving away from the "SaaS-standard" of flat boxes and rigid borders. Instead, we treat the UI as a high-end digital film—where depth is created through light, and focus is directed through high-contrast typography and neon "pulses." 

The interface should feel like a premium command center: deep, expansive, and intelligent. We break the grid using intentional asymmetry and "Hero Accents" that bleed across sections, ensuring the experience feels bespoke rather than templated.

---

## 2. Color & Tonal Depth
Our palette is rooted in the "Void"—a true black base (`#000000`)—allowing our tech-forward purples and AI-inspired oranges to vibrate with intensity.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define layout sections. Structure must be achieved through:
1.  **Background Shifts:** Transitioning from `surface_container_lowest` (#000000) to `surface_container_low` (#131313).
2.  **Tonal Transitions:** Using subtle gradients to suggest a change in context.
3.  **Negative Space:** Using the Spacing Scale (specifically `12` and `16`) to create breathing room.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-translucent materials.
*   **Base Layer:** `surface` (#0e0e0e) for the main viewport.
*   **Secondary Layer:** `surface_container_low` (#131313) for large content areas.
*   **Interactive Layer:** `surface_container_high` (#20201f) for cards and floating panels.
*   **Signature Textures:** For high-impact components, use a linear gradient transition from `primary` (#e1c3ff) to `primary_container` (#d6b2fc) at a 45-degree angle to provide a "metallic" purple sheen.

### The Glass & AI Accent Rule
Utilize Glassmorphism for floating overlays. Use `surface_variant` at 40% opacity with a `20px` backdrop-blur. 
*   **AI Hero Pulse:** In sections involving AI processing, utilize the neon orange tokens (`rgba(255, 145, 50, 0.9)`) as a blurred background glow (blur radius: 120px) to signify "intelligence" behind the glass.

---

## 3. Typography: Editorial Authority
We utilize a triple-font system to create a sophisticated, high-end editorial feel.

*   **Display & Headlines (Space Grotesk):** This is our "Tech-Forward" voice. Large, wide, and modern. Use `display-lg` (3.5rem) with tighter letter spacing (-0.02em) for hero sections to create a cinematic impact.
*   **Titles & UI Support (Manrope):** Our "Human" voice. Used for readability in functional areas. `title-lg` provides a premium, balanced feel for card headers.
*   **Data & Labels (Inter):** Our "Instrument" voice. Used for technical metadata and small labels. It is functional, crisp, and high-contrast.

**Hierarchy Strategy:** Always pair a `display-lg` headline in `on_background` (#e8e5e4) with a `body-md` description in `secondary_text` (rgba(255, 255, 255, 0.7)) to create a drastic, high-end contrast scale.

---

## 4. Elevation & Depth
We abandon traditional "drop shadows" in favor of **Ambient Tonal Layering**.

*   **The Layering Principle:** To lift a card, do not add a shadow. Instead, place a `surface_container_highest` (#262626) element inside a `surface_container_low` (#131313) section. The contrast creates a "natural" lift.
*   **Ambient Shadows:** If an element must float (e.g., a modal), use a shadow tinted with the `primary` color: `0px 24px 48px rgba(216, 180, 254, 0.06)`. This mimics the glow of the screen rather than a gray shadow.
*   **The Ghost Border:** If accessibility requires a stroke, use `outline_variant` (#484848) at **15% opacity**. Anything higher is too heavy for this system.

---

## 5. Components

### Buttons: The High-Contrast Trigger
*   **Primary:** Solid `white` (#FFFFFF) with `black` (#000000) text. Roundedness: `md` (0.375rem). This is the highest contrast point on the screen.
*   **Secondary:** `surface_container_highest` background with `primary` (#e1c3ff) text. No border.
*   **Tertiary/Ghost:** `on_surface` text with no background. On hover, apply a `primary_dim` (#c8a5ed) underline of 2px.

### Cards & Lists: Editorial Grouping
*   **Card Style:** Zero borders. Use `surface_container_low` (#131313) backgrounds.
*   **Spacing over Lines:** Forbid the use of divider lines in lists. Use `spacing-4` (1.4rem) between items to define separation.
*   **The "AI-Edge" Card:** For featured AI content, apply a top-border-only "light leak" using the `tertiary` (#ffb783) sunset accent at 1px thickness.

### Inputs & Interaction
*   **Field Style:** Use `surface_container_highest` (#262626). The label should use `label-md` in `accent_muted` (#71717A).
*   **Active State:** When focused, the input should not just change border color; it should trigger a subtle `primary` (#e1c3ff) outer glow (4px spread).
*   **Selection Chips:** Use `secondary` (Parrot Green) at 10% opacity for the background and 100% opacity for the text to indicate a "System Active" state.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use extreme vertical whitespace. If you think there is enough space, add 20% more.
*   **Do** use the `secondary` (Parrot Green) color sparingly—only for "success" or "active" states to keep its impact high.
*   **Do** overlap elements. Allow images or AI visualizations to bleed slightly into the next background section to break the "boxed" layout.

### Don't
*   **Don’t** use 100% opaque white for body text. Use `body_text` (#F1F1F3) to reduce eye strain against the black background.
*   **Don’t** use standard 45-degree corner radii for everything. Mix `none` (0px) for large section containers and `md` (0.375rem) for interactive components to create a custom architectural feel.
*   **Don’t** use gray shadows. If a shadow is needed, it must be tinted with the brand's purple or orange to maintain the "cinematic" atmosphere.