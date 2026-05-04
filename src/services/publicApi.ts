export interface FarmItem {
  farmName: string
  province: string
  description: string
  activityCount: number
  lastActiveAt: string | null
  featuredSlugs: string[]
  bannerUrl?: string
  producerImageUrl?: string
}

export interface FeedItem {
  farmName: string
  plantSlug: string
  plantCode: string
  title: string
  imageUrl?: string
  eventDate: string
  eventType: string
  contentHtml?: string
  producerImageUrl?: string
}

export interface LandingStats {
  totalFarms: number
  totalLogs: number
  totalHarvests: number
  activeFarmsToday: number
}

export interface FarmsResponse {
  farms: FarmItem[]
  total: number
  stats: LandingStats
}

const BASE = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/v2'

const EMPTY_STATS: LandingStats = { totalFarms: 0, totalLogs: 0, totalHarvests: 0, activeFarmsToday: 0 }

export async function getFarms(): Promise<FarmsResponse> {
  try {
    const res = await fetch(`${BASE}/public/farms`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return { farms: [], total: 0, stats: EMPTY_STATS }
    const json = await res.json()
    return {
      farms: (json.data?.farms as FarmItem[]) ?? [],
      total: json.data?.total ?? 0,
      stats: (json.data?.stats as LandingStats) ?? EMPTY_STATS,
    }
  } catch {
    return { farms: [], total: 0, stats: EMPTY_STATS }
  }
}

export async function getFeed(limit = 5): Promise<FeedItem[]> {
  try {
    const res = await fetch(`${BASE}/public/farms/feed?limit=${limit}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    const json = await res.json()
    return (json.data?.items as FeedItem[]) ?? []
  } catch {
    return []
  }
}
