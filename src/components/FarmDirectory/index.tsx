'use client'

import { useState } from 'react'
import type { FarmItem } from '@/services/publicApi'
import styles from './FarmDirectory.module.css'

interface Props {
  farms: FarmItem[]
}

const FILTERS = [
  { key: 'all', label: 'ทั้งหมด' },
  { key: 'veg', label: 'ผัก-ผลไม้' },
  { key: 'tree', label: 'ไม้ยืนต้น' },
  { key: 'grain', label: 'ธัญพืช' },
  { key: 'fruit', label: 'ไม้ผล' },
]

const COVER_CLASSES = [
  undefined,
  styles.coverOrange,
  styles.coverBlue,
  styles.coverPurple,
]

const DELAY_CLASSES = [
  styles.d0,
  styles.d1,
  styles.d2,
  styles.d3,
  styles.d4,
  styles.d5,
]

function getFarmEmoji(farm: FarmItem): string {
  const text = `${farm.farmName} ${farm.description}`.toLowerCase()
  if (text.includes('มะม่วง')) return '🥭'
  if (text.includes('สตรอ')) return '🍓'
  if (text.includes('แตงกวา')) return '🥒'
  if (text.includes('มะนาว')) return '🍋'
  if (text.includes('ทุเรียน')) return '🌵'
  if (text.includes('ลำไย') || text.includes('องุ่น')) return '🍇'
  if (text.includes('บลูเบอร์')) return '🫐'
  if (text.includes('มะพร้าว')) return '🥥'
  if (text.includes('กล้วย')) return '🍌'
  if (text.includes('ข้าว') || text.includes('ธัญ')) return '🌾'
  if (text.includes('มะเขือ') || text.includes('พริก')) return '🌶️'
  return '🌿'
}

function formatLastActive(ts: string | null): string {
  if (!ts) return 'ยังไม่มีกิจกรรม'
  const diffMs = Date.now() - new Date(ts).getTime()
  const hours = diffMs / 3_600_000
  const days = hours / 24
  if (hours < 1) return 'เมื่อกี้'
  if (hours < 24) return `${Math.floor(hours)} ชม.ก่อน`
  if (days < 7) return `${Math.floor(days)} วันก่อน`
  return 'สัปดาห์ที่แล้ว'
}

export function FarmDirectory({ farms }: Props) {
  const [activeFilter, setActiveFilter] = useState('all')
  const isEmpty = farms.length === 0

  return (
    <section className={`section ${styles.wrapper}`}>
      <div className={`${styles.head} reveal`}>
        <div className={styles.label}>สวนที่เข้าร่วม</div>
        <h2 className={styles.title}>สวนในระบบสวนไม่ลืม</h2>
        <p className={styles.sub}>สวนจริงที่ใช้สวนไม่ลืมดูแลผลผลิต</p>
      </div>

      <div className={styles.filterRow}>
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`${styles.chip} ${activeFilter === f.key ? styles.chipActive : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {isEmpty ? (
          <>
            {[0, 1, 2].map((i) => (
              <div key={i} className={styles.skeleton}>
                <div className={styles.skeletonCover} />
                <div className={styles.skeletonBody}>
                  <div className={styles.skeletonLine} />
                  <div className={styles.skeletonShort} />
                </div>
              </div>
            ))}
          </>
        ) : (
          farms.map((farm, i) => {
            const coverExtra = COVER_CLASSES[i % COVER_CLASSES.length]
            const delayClass = DELAY_CLASSES[i % DELAY_CLASSES.length]
            return (
              <div
                key={`${farm.farmName}-${i}`}
                className={`${styles.card} ${delayClass ?? ''} reveal`}
              >
                <div className={`${styles.cover} ${coverExtra ?? ''}`}>
                  {farm.bannerUrl ? (
                    <img
                      src={farm.bannerUrl}
                      alt={farm.farmName}
                      className={styles.farmCoverImg}
                    />
                  ) : (
                    getFarmEmoji(farm)
                  )}
                </div>
                <div className={styles.body}>
                  <p className={styles.farmName}>{farm.farmName}</p>
                  <p className={styles.province}>📍 {farm.province}</p>
                  <div className={styles.stats}>
                    <span className={styles.statItem}>📝 {farm.activityCount} บันทึก</span>
                    <span className={styles.statItem}>🕐 {formatLastActive(farm.lastActiveAt)}</span>
                  </div>
                </div>
              </div>
            )
          })
        )}

        {/* Ghost CTA card — always shown */}
        <div className={styles.ctaCard}>
          <span className={styles.ctaIcon}>🌱</span>
          <p className={styles.ctaText}>สวนของคุณก็ขึ้นตรงนี้ได้</p>
          <p className={styles.ctaSub}>เปิดสวนฟรี ไม่มีค่าใช้จ่าย</p>
          <a
            href="https://suan.nomem.app/mai.luem/quick-register"
            className={styles.ctaBtn}
          >
            🌿 เปิดสวนฟรี
          </a>
        </div>
      </div>
    </section>
  )
}
