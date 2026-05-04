import styles from './TimelineTemplates.module.css'

interface Task {
  icon: string
  text: string
  day: number
}

interface Template {
  cropIcon: string
  name: string
  author: string
  days: number
  isFree: boolean
  price?: number
  usage?: number
  tasks: Task[]
}

const TEMPLATES: Template[] = [
  {
    cropIcon: '🥒',
    name: 'แตงกวาญี่ปุ่น ไฮโดรโปนิกส์',
    author: 'สวนเสริฐ',
    days: 55,
    isFree: true,
    usage: 234,
    tasks: [
      { icon: '✅', text: 'เตรียมดินและระบบน้ำ', day: 1 },
      { icon: '🌱', text: 'ปลูกต้นกล้า', day: 7 },
      { icon: '💧', text: 'รดน้ำแรก — ตั้งรอบ', day: 10 },
    ],
  },
  {
    cropIcon: '🍓',
    name: 'สตรอว์เบอร์รี Premium',
    author: 'ไร่สุขใจ',
    days: 90,
    isFree: false,
    price: 299,
    tasks: [
      { icon: '✅', text: 'ปรับ pH ดิน 5.5–6.5', day: 1 },
      { icon: '🌿', text: 'ใส่ปุ๋ยรากแรก', day: 14 },
      { icon: '🌸', text: 'เด็ดดอกชุดแรก', day: 60 },
    ],
  },
  {
    cropIcon: '🫐',
    name: 'บลูเบอร์รีออร์แกนิก ปีแรก',
    author: 'สวนภูดอย',
    days: 365,
    isFree: true,
    usage: 89,
    tasks: [
      { icon: '✅', text: 'ปลูกต้นกล้า', day: 1 },
      { icon: '💧', text: 'รดน้ำสม่ำเสมอ', day: 7 },
      { icon: '🌿', text: 'ปุ๋ยกรด — ปรับ pH', day: 30 },
    ],
  },
]

const DELAY_CLASSES = [styles.d1, styles.d2, styles.d3]

export function TimelineTemplates() {
  return (
    <section className={`section ${styles.wrapper}`}>
      <div className={`${styles.head} reveal`}>
        <div className={styles.label}>Knowledge Marketplace</div>
        <h2 className={styles.title}>Timeline Templates จากผู้เชี่ยวชาญ</h2>
        <p className={styles.sub}>แผนการดูแลพืชที่ทดสอบแล้ว — นำไปใช้ได้ทันที</p>
      </div>

      <div className={styles.grid}>
        {TEMPLATES.map((tmpl, i) => (
          <div key={tmpl.name} className={`${styles.card} ${DELAY_CLASSES[i]} reveal`}>
            <div className={styles.cardHeader}>
              <div className={styles.cropIcon}>{tmpl.cropIcon}</div>
              <div className={styles.cardMeta}>
                <p className={styles.templateName}>{tmpl.name}</p>
                <div className={styles.authorRow}>
                  <span>{tmpl.author}</span>
                </div>
              </div>
            </div>

            <div className={styles.badges}>
              <span className={`${styles.badge} ${tmpl.isFree ? styles.badgeFree : styles.badgePremium}`}>
                {tmpl.isFree ? 'ฟรี' : 'Premium'}
              </span>
              <span className={`${styles.badge} ${styles.badgeDays}`}>
                {tmpl.days} วัน
              </span>
            </div>

            <div className={styles.taskList}>
              {tmpl.tasks.map((task) => (
                <div key={task.text} className={styles.taskItem}>
                  <span className={styles.taskDot}>{task.icon}</span>
                  <span className={styles.taskText}>{task.text}</span>
                  <span className={styles.taskDay}>วัน {task.day}</span>
                </div>
              ))}
            </div>

            <div className={styles.cardFooter}>
              {tmpl.isFree ? (
                <span className={styles.usageText}>🌱 {tmpl.usage} สวนใช้อยู่</span>
              ) : (
                <span className={styles.priceText}>฿{tmpl.price}</span>
              )}
              <a
                href="https://suan.nomem.app/mai.luem/quick-register"
                className={styles.ctaBtn}
              >
                {tmpl.isFree ? 'ใช้ฟรี' : 'ซื้อ Template'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
