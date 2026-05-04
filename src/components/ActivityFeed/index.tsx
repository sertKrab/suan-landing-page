'use client'

import { useEffect } from 'react'
import type { FeedItem, LandingStats } from '@/services/publicApi'
import styles from './ActivityFeed.module.css'

interface Props {
  feed: FeedItem[]
  stats: LandingStats
}

function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr)
  const diffMs = Date.now() - date.getTime()
  const days = diffMs / 86_400_000
  if (days < 1) return 'วันนี้'
  if (days < 7) return `${Math.floor(days)} วันก่อน`
  return date.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' })
}

export function ActivityFeed({ feed, stats }: Props) {
  const sidebarStats = [
    { emoji: '🌱', label: 'สวนในระบบ', value: String(stats.totalFarms) },
    { emoji: '📝', label: 'บันทึกรวม', value: stats.totalLogs.toLocaleString() },
    { emoji: '🥒', label: 'เก็บเกี่ยวแล้ว', value: `${stats.totalHarvests} ครั้ง` },
    { emoji: '🔥', label: 'active วันนี้', value: `${stats.activeFarmsToday} สวน` },
  ]

  const uniqueFarms = new Set(feed.map((f) => f.farmName)).size

  useEffect(() => {
    const imgs = document.querySelectorAll('[data-html-content] img')
    imgs.forEach((img) => {
      ;(img as HTMLImageElement).onerror = () => {
        ;(img as HTMLImageElement).style.display = 'none'
      }
    })
  }, [feed])

  return (
    <section className={`section ${styles.wrapper}`}>
      <div className={`${styles.head} reveal`}>
        <div className={styles.label}>เรื่องราวจากสวน</div>
        <h2 className={styles.title}>
          เรื่องเล่า {uniqueFarms > 0 ? `จาก ${uniqueFarms} สวน` : ''}
        </h2>
      </div>

      <div className={styles.layout}>
        {/* Main feed */}
        <div>
          {feed.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>🌱</div>
              <p className={styles.emptyText}>ยังไม่มีเรื่องราว</p>
              <p className={styles.emptySub}>สวนแรกกำลังมา รอสักครู่…</p>
            </div>
          ) : (
            <div className={styles.feedList}>
              {feed.map((item, i) => (
                <div key={`${item.plantSlug}-${i}`} className={`${styles.feedItem} reveal`}>
                  <div className={`${styles.feedIcon} ${styles.iconGeneral}`}>
                    {item.producerImageUrl ? (
                      <img
                        src={item.producerImageUrl}
                        alt={item.farmName}
                        className={styles.feedAvatar}
                      />
                    ) : (
                      item.imageUrl ? '🖼️' : '📖'
                    )}
                  </div>
                  <div className={styles.feedContent}>
                    <div className={styles.feedMeta}>
                      <span className={styles.feedFarm}>{item.farmName}</span>
                      <span className={styles.feedBadge}>{item.eventType}</span>
                    </div>
                    <p className={styles.feedNote}>{item.title}</p>
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className={styles.feedThumb}
                      />
                    )}
                    {item.contentHtml && (
                      <div
                        data-html-content
                        className={styles.feedHtmlContent}
                        dangerouslySetInnerHTML={{ __html: item.contentHtml }}
                      />
                    )}
                    <span className={styles.feedTime}>
                      � {formatEventDate(item.eventDate)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.statsCard}>
            <p className={styles.statsTitle}>สถิติระบบ</p>
            {sidebarStats.map((s) => (
              <div key={s.label} className={styles.statRow}>
                <span className={styles.statEmoji}>{s.emoji}</span>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statValue}>{s.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.qrCard}>
            <div className={styles.qrCardIcon}>📱</div>
            <p className={styles.qrCardTitle}>สแกน QR ที่ต้นไม้</p>
            <p className={styles.qrCardSub}>ดูประวัติต้นไม้ได้ทันที ไม่ต้องล็อกอิน</p>
            <a
              href="https://suan.nomem.app/mai.luem/quick-register"
              className={styles.qrCardBtn}
            >
              🌱 เปิดสวนฟรี
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
