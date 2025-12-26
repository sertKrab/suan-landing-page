'use client'

import { motion } from 'framer-motion'
import styles from './AppMockup.module.css'

export default function AppMockup() {
    return (
        <motion.div
            className={styles.mockupContainer}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.3, ease: 'easeOut' }}
        >
            <div className={styles.phone}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                    {/* App Header */}
                    <div className={styles.appHeader}>
                        <span className={styles.appLogo}>🌱</span>
                        <span className={styles.appTitle}>สวนไม่ลืม</span>
                    </div>

                    {/* Stats Cards */}
                    <div className={styles.statsGrid}>
                        <motion.div
                            className={styles.statCard}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.8, type: 'spring' }}
                        >
                            <span className={styles.statIcon}>🌡️</span>
                            <span className={styles.statValue}>28°C</span>
                            <span className={styles.statLabel}>อุณหภูมิ</span>
                        </motion.div>

                        <motion.div
                            className={styles.statCard}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.0, type: 'spring' }}
                        >
                            <span className={styles.statIcon}>💧</span>
                            <span className={styles.statValue}>65%</span>
                            <span className={styles.statLabel}>ความชื้น</span>
                        </motion.div>

                        <motion.div
                            className={styles.statCard}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.2, type: 'spring' }}
                        >
                            <span className={styles.statIcon}>☀️</span>
                            <span className={styles.statValue}>850</span>
                            <span className={styles.statLabel}>แสง (lux)</span>
                        </motion.div>

                        <motion.div
                            className={styles.statCard}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.4, type: 'spring' }}
                        >
                            <span className={styles.statIcon}>🌱</span>
                            <span className={styles.statValue}>pH 6.5</span>
                            <span className={styles.statLabel}>ดิน</span>
                        </motion.div>
                    </div>

                    {/* Status */}
                    <motion.div
                        className={styles.statusBar}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 3.6 }}
                    >
                        <span className={styles.statusDot} />
                        <span>สวนสมบูรณ์ดี</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
