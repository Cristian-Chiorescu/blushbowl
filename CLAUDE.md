# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BlushBowl is a Next.js 15 recipe discovery application that integrates with the Spoonacular API. The app features a modern, animated interface with theme support, optimized image loading, and graceful fallback to mock data when the API is unavailable.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Development server runs on http://localhost:3000

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router (React 19)
- **Styling**: Tailwind CSS v4 with custom OKLCH color system
- **State Management**:
  - Zustand for global API status state
  - TanStack Query (React Query) for server state and caching
- **UI Components**: shadcn/ui components (Radix UI primitives)
- **Animations**: Motion (formerly Framer Motion)
- **Theming**: next-themes for dark/light mode support
- **TypeScript**: Strict mode enabled

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts, providers, header/footer
│   ├── page.tsx           # Landing page
│   ├── recipe-list/       # Recipe browsing with filters
│   └── recipes/[slug]/    # Individual recipe details
├── components/            # React components
│   ├── ui/               # shadcn/ui components (badge, button, card, etc.)
│   ├── providers.tsx     # QueryClient and ThemeProvider wrapper
│   ├── recipe-*.tsx      # Recipe-related components
│   └── theme-*.tsx       # Theme switcher components
├── lib/
│   ├── api.ts           # Spoonacular API integration with Zod validation
│   ├── types.ts         # TypeScript type definitions
│   ├── mock-data.ts     # Fallback recipe data
│   └── utils.ts         # Utility functions (cn, slugify, truncate)
└── stores/
    └── apiStatusStore.ts # Zustand store for API status ("live" or "mock")
```

### Key Architectural Patterns

#### API Integration with Graceful Degradation
- `src/lib/api.ts` contains all Spoonacular API calls with Zod schema validation
- Automatically falls back to mock data if API key is missing or requests fail
- API status ("live" or "mock") is tracked in Zustand store and displayed to users
- Environment variable: `NEXT_PUBLIC_SPOONACULAR_API_KEY`

#### Data Fetching Strategy
- TanStack Query handles all server state with 30-second stale time
- Initial data is provided as SSR fallback to avoid loading states on page load
- Recipe list page passes search params (tags, query) to client components
- Individual recipe pages use async server components with `fetchRecipeById`

#### URL and Routing
- Recipe detail pages use slug format: `/recipes/{id}-{slugified-name}`
- Recipe list supports query params: `?tag=vegan&q=pasta`
- Recipe IDs are parsed from slugs: `parseInt(params.slug.split("-")[0])`

#### Performance Optimizations
- First recipe card (LCP) uses `priority` loading and `fetchPriority="high"`
- Next 4 cards use eager loading with low-res images
- Remaining cards use lazy loading
- Turbopack enabled for faster dev builds
- Image domains configured in next.config.ts: Spoonacular, Pexels, Unsplash

#### Styling System
- Uses OKLCH color space for theme colors (better perceptual uniformity)
- Custom CSS properties defined in `globals.css` with Tailwind v4 `@theme inline`
- Two fonts: Poppins (body) and Fredoka (headings)
- Component styling uses `cn()` utility for conditional Tailwind classes
- Custom animations defined for scrolling grid effects

#### Component Patterns
- UI components from shadcn/ui use Radix UI primitives with CVA for variants
- Client components marked with `"use client"` directive
- Server components by default (Next.js 15 App Router)
- Metadata generation for SEO using Next.js `generateMetadata` function

## Important Notes

- Path alias `@/` maps to `src/`
- TypeScript strict mode is enabled
- Mock data is in `src/lib/mock-data.ts` and should match the Recipe type structure
- API responses are validated with Zod schemas before mapping to internal Recipe type
- Theme toggle component uses next-themes with system preference detection
- Analytics from Vercel Analytics included in root layout
