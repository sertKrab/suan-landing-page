import React from 'react';
import Image from 'next/image';
import styles from './Screenshots.module.css';

interface Screenshot {
    src: string;
    alt: string;
    title: string;
    description: string;
}

const screenshots: Screenshot[] = [
    {
        src: '/screenshots/home.png',
        alt: 'หน้าแรก - Dashboard',
        title: '📊 ดูสรุปสวนได้ทันที',
        description: 'เปิดดูแป๊บเดียว ก็รู้สถานะสวน อากาศ และงานล่าสุด',
    },
    {
        src: '/screenshots/worklog.png',
        alt: 'จดบันทึกงาน',
        title: '📝 บันทึกงานง่าย 3 วินาที',
        description: 'เลือกประเภทงาน กรอกรายละเอียด กดบันทึก เสร็จ!',
    },
    {
        src: '/screenshots/finance.png',
        alt: 'การเงิน',
        title: '💰 รู้ต้นทุนจริง ไม่ต้องเดา',
        description: 'ดูรายรับ-รายจ่าย รู้ว่าสวนกำไรหรือขาดทุน',
    },
    {
        src: '/screenshots/timeline.png',
        alt: 'งานวันนี้',
        title: '📅 งานที่ต้องทำวันนี้',
        description: 'ระบบแจ้งเตือนว่าวันนี้ต้องทำอะไร ไม่ต้องจำเอง',
    },
];

export const Screenshots: React.FC = () => {
    return (
        <section className={styles.screenshotsSection}>
            <div className="container">
                <h2 className="text-center">ลองดูหน้าจอจริง</h2>
                <p className={styles.subtitle}>
                    ไม่ต้องเดา ดูก่อนใช้ ง่ายจริง
                </p>

                <div className={styles.screenshotsGrid}>
                    {screenshots.map((screenshot, index) => (
                        <div key={index} className={styles.screenshotCard}>
                            <div className={styles.screenshotImage}>
                                <Image
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    width={400}
                                    height={711}
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.screenshotContent}>
                                <h3>{screenshot.title}</h3>
                                <p>{screenshot.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
