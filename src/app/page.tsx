import styles from './page.module.css'
import HeroV3 from '@/components/Hero'
import { Screenshots } from '@/components/Screenshots'


export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section V3 - Full Premium */}
      <HeroV3 />

      {/* Pain Points Section */}
      <section id="pain" className={`section ${styles.painSection}`}>
        <div className="container">
          <h2 className="text-center">คุณเคยเป็นแบบนี้ไหม</h2>

          <div className={styles.painGrid}>
            <div className={styles.painCard}>
              <span className={styles.painIcon}>❌</span>
              <h3>ลืมว่ารดน้ำล่าสุดวันไหน</h3>
              <p>จำแค่ &quot;เมื่อวาน&quot; แต่ว่าเมื่อวานวันไหน?</p>
            </div>

            <div className={styles.painCard}>
              <span className={styles.painIcon}>💸</span>
              <h3>ใส่ปุ๋ยไปเรื่อย ๆ แต่ไม่รู้หมดเงินเท่าไหร่</h3>
              <p>สิ้นเดือนถึงรู้ว่า... ขาดทุน</p>
            </div>

            <div className={styles.painCard}>
              <span className={styles.painIcon}>📊</span>
              <h3>มีของวัด มีเซนเซอร์ แต่ดูไม่เป็น</h3>
              <p>ตัวเลขเต็มไปหมด แต่ไม่รู้ว่าดีหรือแย่</p>
            </div>

            <div className={styles.painCard}>
              <span className={styles.painIcon}>🤯</span>
              <h3>ทำตามความเคยชิน ไม่รู้ว่าดีจริงไหม</h3>
              <p>วันนี้รดมั้ย? เดาเอาไป!</p>
            </div>
          </div>

          <p className={styles.painSummary}>
            ทำสวนไม่ยาก<br />
            แต่การจำทุกอย่างเอง…<strong>มันเหนื่อย</strong>
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className={`section ${styles.solutionSection}`}>
        <div className="container">
          <h2 className="text-center">เราช่วยจำแทนคุณ</h2>

          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <span className={styles.checkIcon}>✔️</span>
              <h3>จดงานในสวนแทน</h3>
              <p>รดน้ำ ใส่ปุ๋ย เก็บเกี่ยว เราจำให้หมด</p>
            </div>

            <div className={styles.solutionCard}>
              <span className={styles.checkIcon}>✔️</span>
              <h3>บอกว่าวันนี้สวนเป็นยังไง</h3>
              <p>เปิดดูแป๊บเดียว ก็รู้ว่าดินแห้งหรือชื้น</p>
            </div>

            <div className={styles.solutionCard}>
              <span className={styles.checkIcon}>✔️</span>
              <h3>รู้ว่าใช้เงินไปกับอะไรบ้าง</h3>
              <p>ต้นทุนทุกบาท ดูได้ชัดเจน</p>
            </div>

            <div className={styles.solutionCard}>
              <span className={styles.checkIcon}>✔️</span>
              <h3>ดูย้อนหลังได้ ไม่ต้องเดา</h3>
              <p>ข้อมูลทุกอย่างเก็บไว้ให้</p>
            </div>
          </div>

          <p className={styles.solutionSummary}>
            เปิดมือถือ ดูแป๊บเดียว ก็เข้าใจ
          </p>
        </div>
      </section>

      {/* Features Section - NEW VERSION */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
            ระบบช่วยเกษตรกรได้อย่างไร
          </h2>
          <div className={styles.featuresGrid}>
            {/* Feature 1: Work Log */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📝</div>
              <h3>จดบันทึกงานสวนให้</h3>
              <p className={styles.featureSubtitle}>
                รดน้ำ ใส่ปุ๋ย ฉีดยา เก็บเกี่ยว
              </p>
              <ul className={styles.featureList}>
                <li>💧 รดน้ำ - บันทึกครั้งละกี่ลิตร ใช้เวลานานแค่ไหน</li>
                <li>🌱 ใส่ปุ๋ย - จำได้ว่าใส่สูตรไหน กี่กิโล</li>
                <li>🧪 ฉีดยา - ติดตามว่าฉีดไปเมื่อไหร่ ปลอดภัยหรือยัง</li>
                <li>🌾 เก็บเกี่ยว - รู้ปริมาณผลผลิตจริง</li>
              </ul>
            </div>

            {/* Feature 2: Garden Management */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏡</div>
              <h3>ดูสรุปสวนทุกแปลง</h3>
              <p className={styles.featureSubtitle}>
                ภาพรวมสวนในหนึ่งหน้าจอ
              </p>
              <ul className={styles.featureList}>
                <li>🌿 ดูสถานะแปลง (กำลังปลูก/ว่าง)</li>
                <li>📍 แยกตามพืชที่ปลูก</li>
                <li>📊 ดูอายุพืช และวันเก็บเกี่ยว</li>
                <li>🌤️ อุณหภูมิ-ความชื้น (ถ้ามี sensor)</li>
              </ul>
            </div>

            {/* Feature 3: Finance */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>รู้ต้นทุนจริง</h3>
              <p className={styles.featureSubtitle}>
                ไม่ต้องเดา ดูได้ชัดเจน
              </p>
              <ul className={styles.featureList}>
                <li>💸 รายจ่าย (ปุ๋ย, ยา, ค่าแรง)</li>
                <li>💵 รายรับ (ขาย, กำไร)</li>
                <li>📈 รายงานทางการเงิน</li>
                <li>🧾 Export CSV ได้</li>
              </ul>
            </div>

            {/* Feature 4: Inventory */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📦</div>
              <h3>ติดตามสต็อกปุ๋ย/ยา</h3>
              <p className={styles.featureSubtitle}>
                รู้ว่าเหลือเท่าไหร่ ซื้อเมื่อไหร่
              </p>
              <ul className={styles.featureList}>
                <li>📋 คลังข้อมูลปุ๋ย/ยา</li>
                <li>📊 สต็อกคงเหลือ (FIFO)</li>
                <li>💳 ประวัติการซื้อ</li>
                <li>⚠️ แจ้งเตือนของใกล้หมด</li>
              </ul>
            </div>

            {/* Feature 5: Timeline */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📅</div>
              <h3>แจ้งเตือนงานที่ต้องทำ</h3>
              <p className={styles.featureSubtitle}>
                ไม่ต้องจำเอง ระบบบอกให้
              </p>
              <ul className={styles.featureList}>
                <li>📌 งานวันนี้ต้องทำอะไร</li>
                <li>🔔 แจ้งเตือนถึงเวลา</li>
                <li>📝 Template แผนงาน (เช่น มะนาว 90 วัน)</li>
                <li>✅ เช็คลิสต์ ทำแล้วหรือยัง</li>
              </ul>
            </div>

            {/* Feature 6: Team */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>ทำงานร่วมกันทั้งทีม</h3>
              <p className={styles.featureSubtitle}>
                สวนใหญ่มีหลายคน ร่วมงานได้
              </p>
              <ul className={styles.featureList}>
                <li>👤 เชิญสมาชิก (Invite Code)</li>
                <li>👔 กำหนดบทบาท (Owner, Manager, Worker)</li>
                <li>🔐 แยกสิทธิ์เข้าถึงแปลง</li>
                <li>📊 ดูสรุปงานของทีม</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <Screenshots />

      {/* How It Works - NEW VERSION */}
      <section className={`section ${styles.howItWorksSection}`}>
        <div className="container text-center">
          <h2>ใช้งานยังไง (ง่ายมาก)</h2>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>📱</div>
              <h3>สมัครใช้งาน</h3>
              <p>ใส่เบอร์โทร + OTP เสร็จ! ไม่ต้องกรอกเยอะ</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>🏡</div>
              <h3>สร้างแปลงสวนแรก</h3>
              <p>บอกว่าปลูกอะไร กี่ไร่ เท่านั้น</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>📝</div>
              <h3>บันทึกงานแรก</h3>
              <p>รดน้ำ ใส่ปุ๋ย หรืออะไรก็ได้ กดบันทึก 3 วินาที</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepIcon}>📊</div>
              <h3>ดูสรุปและต้นทุน</h3>
              <p>ระบบคำนวณต้นทุนให้อัตโนมัติ ดูได้ทันที</p>
            </div>
          </div>

          <p className={styles.howItWorksSummary}>
            จากเคยต้องจำทุกอย่างเอง<br />
            <strong>ตอนนี้ระบบจำให้หมดแล้ว</strong>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className={`section ${styles.pricingSection}`}>
        <div className="container">
          <h2 className="text-center">แพ็กเกจที่เหมาะกับทุกขนาดสวน</h2>

          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingIcon}>🌱</div>
              <h3>ใช้ฟรี</h3>
              <div className={styles.price}>ฟรี</div>
              <ul>
                <li>✅ จดสวน 1 แปลง</li>
                <li>✅ ใช้งานพื้นฐาน</li>
                <li>✅ ดูข้อมูลย้อนหลัง</li>
              </ul>
              <button className="btn btn-outline">เริ่มใช้เลย</button>
            </div>

            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.badge}>เร็ว ๆ นี้</div>
              <div className={styles.pricingIcon}>🚜</div>
              <h3>แบบเต็ม</h3>
              <div className={styles.price}>เร็ว ๆ นี้</div>
              <ul>
                <li>✅ หลายแปลง ไม่จำกัด</li>
                <li>✅ ดูข้อมูลละเอียดขึ้น</li>
                <li>✅ ระบบช่วยวิเคราะห์</li>
                <li>✅ Export ข้อมูล</li>
              </ul>
              <button className="btn btn-primary">แจ้งเตือนเมื่อเปิดตัว</button>
            </div>
          </div>

          <p className={styles.pricingSummary}>
            ลองใช้ฟรีก่อน ค่อยตัดสินใจ
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="start" className={`section ${styles.ctaSection}`}>
        <div className="container text-center">
          <h2>ทำสวนให้สบายขึ้น</h2>
          <p className={styles.ctaSubtitle}>
            ไม่ต้องจำทุกอย่างเอง<br />
            ให้ <strong>สวนไม่ลืม</strong> ช่วยคุณ
          </p>

          <div className={styles.ctaButtons}>
            <button className="btn btn-primary btn-lg">
              ✅ เริ่มใช้งานฟรี
            </button>
            <button className="btn btn-outline btn-lg">
              📞 ติดต่อเรา (LINE)
            </button>
          </div>

          <p className={styles.trustBadge}>
            ✓ ไม่ต้องใส่บัตร  ✓ ใช้ได้ทันที  ✓ ยกเลิกได้ตลอด
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container text-center">
          <div className={styles.footerBrand}>
            <h3 className={styles.brandName}>สวนไม่ลืม</h3>
            <p className={styles.poweredBy}>
              Powered by{' '}
              <a
                href="https://nomem.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                nomem.app
              </a>
            </p>
          </div>

          <p className={styles.footerCopyright}>
            © 2025 สวนไม่ลืม - Smart Agriculture System
          </p>
        </div>
      </footer>
    </main>
  )
}
