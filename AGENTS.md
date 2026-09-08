# VEZZITECH — SYSTEM DESIGN SYSTEM & AI PROMPT ENGINEERING SPECIFICATION

> **Document Type:** AI Agent System Instructions & UI/UX Architecture Manifesto  
> **Brand:** Vezzitech — Engenharia de Crescimento & Alta Performance  
> **Target Audience:** Prompt Engineers, AI Coding Agents, Front-End Architects  

---

## 1. IDENTITY & DESIGN PHILOSOPHY

### Core Aesthetic: "Dark High-Tech Luxury"
Vezzitech does not build generic SaaS interfaces or "AI Slop". The design system operates on **High-Contrast Dark Luxury** combined with **Glassmorphism & Optical Precision**. Every component must reflect technical rigor, authority, and commercial focus.

### Anti-Pattern Directives (Strictly Forbidden)
- ❌ **No Generic Gradients**: Avoid bright cyan-on-black or saturated purple-to-pink consumer gradients.
- ❌ **No Overlapping Navigation**: Headers must use explicit flex-shrink and responsive container boundaries.
- ❌ **No Unnested Radii**: All child containers must calculate nested radii (`R_inner = R_outer - Padding`).
- ❌ **No Raw Borders**: Never use harsh 1px solid white borders. Use subtle translucency (`border-white/[0.08]`) paired with specular top highlights (`h-px bg-gradient-to-r from-transparent via-white/20 to-transparent`).
- ❌ **No Wrapping Badges/Labels**: Button and pill text must fit on a single line (`white-space: nowrap`).

---

## 2. DESIGN TOKENS & COLOR PALETTE

### Color Hierarchy
| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| **Canvas Background** | `#05070A` | Global surface background |
| **Card Glass Primary** | `rgba(16, 23, 42, 0.75)` | Primary container fill with `backdrop-blur-2xl` |
| **Performance Blue** | `#168BFF` / `#69B4FF` | Primary Brand & Growth CTA accent |
| **Tech Violet** | `#7047FF` / `#A78BFA` | Technology & Software architecture accent |
| **Conversion Emerald** | `#00E599` | Results, metrics, and success indicators |
| **Warning / Pitfall Red** | `rgba(239, 68, 68, 0.1)` / `text-red-400` | Problem state callouts & audit badges |
| **Subtle Text** | `#8992A5` | Secondary copy, descriptors, labels |

### Glassmorphism Recipe (Tailwind Standard)
```html
<div className="relative rounded-3xl bg-gradient-to-b from-[#10172A]/70 via-[#0B101E]/75 to-[#060810]/90 backdrop-blur-2xl border border-white/[0.08] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_16px_36px_rgba(0,0,0,0.45)]">
  <!-- Specular highlight line -->
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
</div>
```

---

## 3. TYPOGRAPHY & HIERARCHY

- **Body Font**: `Plus Jakarta Sans` / System Sans-Serif  
- **Heading Font**: Bold Display Sans with tight tracking (`tracking-tight`, `leading-[1.1]`)  

### Scale & Hierarchy Rules
1. **Kicker / Badge**: `text-[11px] font-bold uppercase tracking-[0.2em] text-[#69B4FF]`
2. **Hero Title**: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white`
3. **Section Heading**: `text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight`
4. **Card Title**: `text-xl sm:text-2xl font-bold text-white tracking-tight`
5. **Body Text**: `text-sm sm:text-base text-[#8992A5] leading-relaxed`

---

## 4. COMPONENT ARCHITECTURE & INTERACTION PATTERNS

### A. Navigation & Header (`src/components/Header.tsx`)
- Navigation pills must remain strictly centered or correctly spaced without overlapping the brand logo or action CTAs.
- Use `xl:flex` for desktop pill menu and collapse gracefully to a mobile drawer on `lg:` breakpoints.
- Always include `whitespace-nowrap` and `shrink-0` on critical interactive controls.

### B. Glass Cards & Trinity Grid (`src/sections/ManifestoSection.tsx`, etc.)
- Cards must use ambient back-glow blur bubbles (`w-36 h-36 rounded-full blur-[48px] opacity-20 pointer-events-none`).
- Hover states should elevate slightly (`hover:-translate-y-1.5 transition-all duration-300`).
- Each card should feature a structured breakdown: Header Icon + Tag, Clear Statement, Pitfall Callout, and Resolution Footer.

### C. Buttons & CTAs
- **Primary CTA**: `bg-performance-gradient hover:opacity-95 text-white font-extrabold shadow-performance-glow hover:scale-[1.02] active:scale-95 transition-all`
- **Secondary / Ghost**: `bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/[0.08]`

---

## 5. PROMPT ENGINEERING RULES FOR AI AGENTS

When working on this repository, any AI Agent must strictly obey:

1. **Bilingual Integrity**: All text changes must be mirrored in `src/translations.ts` for both `pt` (Portuguese) and `en` (English) keys.
2. **Type Safety**: Maintain interfaces in `src/translations.ts` and `src/types.ts`. Do not introduce untyped `any`.
3. **No Overlapping UI**: Test layout responsiveness (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) before finalizing changes.
4. **Verification**: Always run `lint_applet` and `compile_applet` to ensure zero compilation or type errors exist.
