'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  useEffect(() => {
    // Reveal on scroll
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))

    // Nav shrink on scroll
    const handleScroll = () => {
      const nav = document.getElementById('navbar')
      if (nav) {
        nav.style.padding = window.scrollY > 60 ? '10px 5vw' : '14px 5vw'
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Floating Leaves */}
      <div className={styles.leaf} style={{ left: '8%', fontSize: '24px', animationDuration: '14s', animationDelay: '0s' }}>🍃</div>
      <div className={styles.leaf} style={{ left: '22%', fontSize: '18px', animationDuration: '18s', animationDelay: '4s' }}>🌿</div>
      <div className={styles.leaf} style={{ left: '68%', fontSize: '20px', animationDuration: '16s', animationDelay: '8s' }}>🍃</div>
      <div className={styles.leaf} style={{ left: '88%', fontSize: '16px', animationDuration: '20s', animationDelay: '2s' }}>🌿</div>

      {/* ===== NAV ===== */}
      <nav id="navbar" className={styles.nav}>
        <div className={styles.navLogo}>
          <div className={styles.navLogoIcon}>
            <Image 
              src="/logo.PNG" 
              alt="Logo" 
              width={28} 
              height={28}
              style={{ objectFit: 'contain' }}
            />
          </div>
          สวนไม่ลืม
        </div>
        <a href="https://suan.nomem.app/mai.luem/quick-register" className={styles.navCta}>ใช้งานฟรี →</a>
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroGlass}>
            <div className={styles.heroBadge}>🌾 ระบบจัดการสวนผลไม้ไทย · PWA</div>
            <h1 className={styles.heroTitle}>
              คนอาจลืม…<br />
              <span className={styles.heroTitleAccent}>แต่สวนไม่ลืม</span>
            </h1>
            <p className={styles.heroSubtitle}>
              จดงานสวนง่ายๆ ไม่ต้องจำ<br />
              ปล่อยให้ระบบดูแลคุณ
            </p>
            <div className={styles.heroBtns}>
              <a href="https://suan.nomem.app/mai.luem/quick-register" className={styles.btnGreen}>🌱 เริ่มต้นใช้งานฟรี</a>
              <a href="#features" className={styles.btnOutline}>ดูฟีเจอร์</a>
            </div>
            <div className={styles.heroPills}>
              <div className={styles.appPill}>💧 รดน้ำ &nbsp;·&nbsp; 🌿 ใส่ปุ๋ย &nbsp;·&nbsp; 🧪 ฉีดพ่นสาร</div>
              <div className={styles.appPill}>📱 ไม่ต้องติดตั้ง · ใช้ได้ทันที</div>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.scrollBar}></div>
        </div>
      </section>

      {/* ===== PAIN ===== */}
      <section id="pain" className={`section ${styles.painSection}`}>
        <div className={`${styles.painHead} reveal`}>
          <div className="section-label">ปัญหาที่เจอทุกวัน</div>
          <h2 className="section-title">คุ้นๆ ไหมกับสิ่งเหล่านี้?</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            เกษตรกรทุกคนผ่านปัญหาเหล่านี้มาแล้ว เราสร้างสวนไม่ลืมเพื่อแก้ตรงนี้
          </p>
        </div>
        <div className={styles.painGrid}>
          <div className={`${styles.painCard} reveal`} style={{ transitionDelay: '.1s' }}>
            <span className={styles.painIcon}>🌧️</span>
            <h3>ลืมว่าใส่ปุ๋ยวันไหน</h3>
            <p>จำไม่ได้ว่าใส่ปุ๋ยไปแล้วหรือยัง ต้องนับวันเอง กลัวใส่ซ้ำหรือข้ามรอบไป</p>
          </div>
          <div className={`${styles.painCard} reveal`} style={{ transitionDelay: '.2s' }}>
            <span className={styles.painIcon}>📦</span>
            <h3>สรุปยอดผลผลิตไม่ได้</h3>
            <p>จดกระดาษไว้แต่หาย ไม่รู้ว่าปีนี้ได้กำไรเท่าไหร่ ขาดทุนตรงไหน</p>
          </div>
          <div className={`${styles.painCard} reveal`} style={{ transitionDelay: '.3s' }}>
            <span className={styles.painIcon}>🤔</span>
            <h3>ลูกค้าถามที่มา ตอบไม่ได้</h3>
            <p>ผู้ซื้อรายใหญ่ถามว่าใช้สารอะไร เก็บเกี่ยวเมื่อไหร่ แต่ตอบไม่ได้เพราะไม่มีข้อมูล</p>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className={`section ${styles.featuresSection}`}>
        <div className={`${styles.featHead} reveal`}>
          <div className="section-label">ฟีเจอร์หลัก</div>
          <h2 className="section-title">ครบ ในที่เดียว</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            ออกแบบมาสำหรับเกษตรกรไทย ใช้งานได้ทันทีจากมือถือ ไม่ต้องติดตั้ง
          </p>
        </div>
        <div className={styles.featGrid}>
          <div className={`${styles.featCard} reveal`} style={{ transitionDelay: '.1s' }}>
            <div className={`${styles.featIcon} ${styles.featIconBlue}`}>📋</div>
            <h3>Timeline ดูแลรายต้น</h3>
            <p>บันทึกทุกขั้นตอนตั้งแต่ปลูกจนเก็บเกี่ยว ดูย้อนหลังได้ไม่จำกัด</p>
            <span className={styles.featTag}>ติดตามรายต้น</span>
          </div>
          <div className={`${styles.featCard} reveal`} style={{ transitionDelay: '.2s' }}>
            <div className={`${styles.featIcon} ${styles.featIconGreen}`}>📱</div>
            <h3>QR Code ติดต้น</h3>
            <p>สแกนปุ๊บ รู้ประวัติต้นไม้ปั๊บ เพิ่มความไว้วางใจให้ลูกค้าและผู้ซื้อ</p>
            <span className={styles.featTag}>Traceability ระดับสากล</span>
          </div>
          <div className={`${styles.featCard} reveal`} style={{ transitionDelay: '.3s' }}>
            <div className={`${styles.featIcon} ${styles.featIconOrange}`}>💰</div>
            <h3>สรุปรายรับ-รายจ่าย</h3>
            <p>รู้กำไรชัดเจน ไม่ต้องเดา ดูกราฟรายเดือน รายปีได้ทันที</p>
            <span className={styles.featTag}>บัญชีสวน</span>
          </div>
          <div className={`${styles.featCard} reveal`} style={{ transitionDelay: '.4s' }}>
            <div className={`${styles.featIcon} ${styles.featIconPurple}`}>👥</div>
            <h3>ทีมงานสวน</h3>
            <p>มอบหมายงาน แบ่งแปลงรับผิดชอบ ลูกน้องจดงานได้เองผ่านมือถือ</p>
            <span className={styles.featTag}>จัดการทีม</span>
          </div>
        </div>
      </section>

      {/* ===== APP PREVIEW ===== */}
      <section id="preview" className={`section ${styles.previewSection}`}>
        <div className={styles.previewInner}>
          <div className={`${styles.previewText} reveal`}>
            <div className="section-label">ตัวอย่างการใช้งาน</div>
            <h2 className="section-title">ง่ายเหมือนจดโน้ตในมือถือ</h2>
            <p className="section-sub">ออกแบบให้ใช้ได้กลางสวน แดดจ้า มือเปื้อนดิน ก็ยังกดได้สบาย</p>
            <div className={styles.previewFeatureList}>
              <div className={styles.pfItem}>
                <div className={styles.pfIco} style={{ background: '#E3F2FD' }}>💧</div>
                <div className={styles.pfText}>
                  <strong>บันทึกงานรายวัน</strong>
                  <span>รดน้ำ ใส่ปุ๋ย ฉีดพ่นสาร กดเลือกแล้วบันทึกได้เลย</span>
                </div>
              </div>
              <div className={styles.pfItem}>
                <div className={styles.pfIco} style={{ background: '#E8F5E9' }}>🗺️</div>
                <div className={styles.pfText}>
                  <strong>จัดการแปลงและต้น</strong>
                  <span>เพิ่มแปลง ตั้งชื่อต้น กำหนดรอบปลูกได้</span>
                </div>
              </div>
              <div className={styles.pfItem}>
                <div className={styles.pfIco} style={{ background: '#FFF3E0' }}>✅</div>
                <div className={styles.pfText}>
                  <strong>งานที่ต้องทำวันนี้</strong>
                  <span>ระบบแจ้งเตือนงานค้างอัตโนมัติ ไม่ลืมแน่นอน</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.previewPhone} reveal`} style={{ transitionDelay: '.2s' }}>
            <div className={styles.phoneMock}>
              <div className={styles.phoneTopbar}>
                <span className={styles.phoneLogo}>🌿 สวนไม่ลืม</span>
                <div className={styles.phoneDot}>คน</div>
              </div>
              <div className={styles.phoneStatus}>
                <span className={styles.phoneStatusDot}></span>
                <span className={styles.phoneStatusText}>แปลง สวนแตง</span>
                <span className={styles.phoneStatusSub}>🥒 แตงกวา</span>
              </div>
              <p className={styles.phoneQuestion}>วันนี้ทำอะไรไปบ้าง?</p>
              <div className={styles.phoneGrid}>
                <div className={styles.phoneAction}>
                  <div className={styles.paIconWrap} style={{ background: '#BBDEFB' }}>💧</div>
                  <div className={styles.paLabel}>รดน้ำ</div>
                </div>
                <div className={styles.phoneAction}>
                  <div className={styles.paIconWrap} style={{ background: '#C8E6C9' }}>🌿</div>
                  <div className={styles.paLabel}>ใส่ปุ๋ย</div>
                </div>
                <div className={styles.phoneAction}>
                  <div className={styles.paIconWrap} style={{ background: '#FFE0B2' }}>🧪</div>
                  <div className={styles.paLabel}>ฉีดพ่นสาร</div>
                </div>
                <div className={styles.phoneAction}>
                  <div className={styles.paIconWrap} style={{ background: '#E8EAF6' }}>✂️</div>
                  <div className={styles.paLabel}>ตัดแต่ง</div>
                </div>
              </div>
              <div className={styles.phoneNav}>
                <div className={`${styles.pnItem} ${styles.pnItemActive}`}>📋<br />วันนี้</div>
                <div className={styles.pnItem}>🌱<br />สวน</div>
                <div className={styles.pnItem}>📦<br />คลัง</div>
                <div className={styles.pnItem}>💵<br />การเงิน</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== HOW IT WORKS ===== */}
      <section id="how" className={`section ${styles.howSection}`}>
        <div className={`${styles.howHead} reveal`}>
          <div className="section-label">เริ่มต้นง่ายมาก</div>
          <h2 className="section-title">3 ขั้นตอน เริ่มได้เลย</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            ไม่ต้องมีความรู้ด้านเทคโนโลยี ใช้อีเมลสมัครได้ทันที
          </p>
        </div>
        <div className={styles.stepsWrap}>
          <div className={styles.stepsConnector}></div>
          <div className={styles.stepsGrid}>
            <div className={`${styles.step} reveal`} style={{ transitionDelay: '.1s' }}>
              <div className={styles.stepCircle}>📱</div>
              <span className={styles.stepBadge}>ขั้นตอนที่ 1</span>
              <h3>สมัครฟรี </h3>
              <p>ใช้อีเมลสมัครได้เลย</p>
            </div>
            <div className={`${styles.step} reveal`} style={{ transitionDelay: '.2s' }}>
              <div className={styles.stepCircle}>🗺️</div>
              <span className={styles.stepBadge}>ขั้นตอนที่ 2</span>
              <h3>เพิ่มแปลง เพิ่มต้นไม้</h3>
              <p>ตั้งชื่อแปลง เพิ่มต้นไม้แต่ละต้น ติด QR Code ที่ต้นได้ทันที</p>
            </div>
            <div className={`${styles.step} reveal`} style={{ transitionDelay: '.3s' }}>
              <div className={styles.stepCircle}>✅</div>
              <span className={styles.stepBadge}>ขั้นตอนที่ 3</span>
              <h3>จดงาน สแกน QR ดูย้อนหลัง</h3>
              <p>บันทึกการดูแลรายวัน scan QR ดูประวัติ และสรุปรายงานได้ตลอดเวลา</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="cta" className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <span className={`${styles.ctaIcon} reveal`}>🌿</span>
          <h2 className={`${styles.ctaTitle} reveal`}>
            พร้อมจัดการสวน<br />
            <span className={styles.ctaTitleAccent}>ให้เนี้ยบแล้วหรือยัง?</span>
          </h2>
          <p className={`${styles.ctaSub} reveal`}>
            เริ่มต้นวันนี้ ไม่มีค่าใช้จ่ายซ่อน<br />
            ใช้งานได้ทันทีจากมือถือ ไม่ต้องติดตั้งแอป
          </p>
          <a href="https://suan.nomem.app/mai.luem/quick-register" className={`${styles.btnCtaBig} reveal`}>🌱 เปิดสวนใหม่ ฟรี!</a>
          <br />
          <div className={`${styles.ctaNote} reveal`}>
            <span className={styles.ctaNoteInner}>ใช้งานได้ทันที · ไม่ต้องติดตั้ง · รองรับทุกมือถือ</span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div className={styles.fLogo}>🌿 สวนไม่ลืม</div>
        <div className={styles.fCopy}>© 2025 สวนไม่ลืม · คนอาจลืม…แต่สวนไม่ลืม</div>
      </footer>
    </>
  )
}
