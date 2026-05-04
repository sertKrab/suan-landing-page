# Changelog — Landing Page

All notable changes to the landing page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Added
- **FarmDirectory** — แสดงรายการสวนในระบบ, filter chips, skeleton fallback, ghost CTA card
- **ActivityFeed** — feed บันทึกล่าสุดพร้อม logType filter tabs, sidebar สถิติ + QR promo
- **TimelineTemplates** — static showcase templates (3 items) พร้อม badge free/premium
- **API Service** (`src/services/publicApi.ts`) — `getFarms()` + `getFeed()` with ISR revalidate 60s, error fallback `[]`
- **ScrollAnimations** (`src/components/ScrollAnimations`) — extracted IntersectionObserver + nav scroll เป็น client component แยก
- `.env.local` / `.env.production` — `NEXT_PUBLIC_API_URL` config

### Changed
- `src/app/page.tsx` — refactored จาก `'use client'` เป็น async Server Component, fetch data server-side ด้วย `Promise.all([getFarms(), getFeed(5)])`
- Page section order: Hero → FarmDirectory → ActivityFeed → TimelineTemplates → Pain → Features → HowItWorks → CTA → Footer

- **ActivityFeed — เปลี่ยนเป็น timeline events** (2026-05-04)
  - `FeedItem` type ใหม่: `title`, `imageUrl`, `eventDate`, `eventType`, `contentHtml`
  - ลบ logType tabs/icon mapping — ใช้ 📖/🖼️ แทน
  - แสดง `contentHtml` ด้วย `dangerouslySetInnerHTML` (trusted backend content)
  - `useEffect` ซ่อน broken images ใน contentHtml อัตโนมัติ (data-html-content selector, CSS Modules safe)

- **`publicApi.ts` — เพิ่ม `LandingStats` + `FarmsResponse`** (2026-05-04)
  - `getFarms()` return `{ farms, total, stats }` — เพิ่ม `stats` สำหรับ sidebar สถิติ

---

## [0.1.0] - 2026-04-01

### Added
- Initial landing page (Next.js 16 + TypeScript + CSS Modules)
- Static sections: Hero, Pain, Features, App Preview, HowItWorks, CTA, Footer
- Floating leaf animations
- Scroll reveal animation (`.reveal` / `.visible`)
- Nav shrink on scroll
- Responsive layout (mobile + desktop)
- Font: Kanit (Thai) + Inter
- Design tokens ใน `globals.css` (`--green-main`, `--text`, `--bg`, etc.)
