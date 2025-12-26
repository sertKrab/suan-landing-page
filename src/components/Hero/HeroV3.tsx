'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import confetti from 'canvas-confetti'
import dynamic from 'next/dynamic'
import styles from './HeroV3.module.css'
import TypewriterText from './TypewriterText'
import FloatingElements from './FloatingElements'
import AppMockup from './AppMockup'

// Dynamic import for particles (SSR issue fix)
const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
    ssr: false,
})

export default function HeroV3() {
    const [showTaglineEnd, setShowTaglineEnd] = useState(false)

    const handleConfetti = useCallback(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#43A54D', '#A5D6A7', '#81C784', '#FBC02D'],
        })
    }, [])

    return (
        <section className={styles.hero}>
            {/* Animated Background */}
            <ParticlesBackground />
            <FloatingElements />

            {/* Gradient Overlay */}
            <div className={styles.gradientOverlay} />

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.splitLayout}>
                    {/* Left: Content */}
                    <div className={styles.content}>
                        {/* 3D Logo */}
                        <motion.div
                            className={styles.logoWrapper}
                            initial={{ scale: 0, rotateY: -180 }}
                            animate={{ scale: 1, rotateY: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                type: 'spring',
                                stiffness: 200
                            }}
                        >
                            <Image
                                src="/logo.png"
                                alt="สวนไม่ลืม Logo"
                                width={120}
                                height={120}
                                priority
                                className={styles.logo}
                            />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            className={styles.title}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            สวนไม่ลืม
                        </motion.h1>

                        {/* Typewriter Tagline */}
                        <div className={styles.tagline}>
                            <TypewriterText
                                text="คุณอาจจะลืม...แต่ "
                                delay={1000}
                                speed={100}
                                onComplete={() => setShowTaglineEnd(true)}
                            />
                            <AnimatePresence>
                                {showTaglineEnd && (
                                    <motion.strong
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 10
                                        }}
                                        className={styles.taglineStrong}
                                    >
                                        สวนไม่ลืม
                                    </motion.strong>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Subtitle */}
                        <motion.p
                            className={styles.subtitle}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.5 }}
                        >
                            รดน้ำวันไหน ใส่ปุ๋ยอะไร ใช้เงินไปเท่าไหร่<br />
                            จำไม่หมด… สวนก็ขาดทุนโดยไม่รู้ตัว
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className={styles.ctaGroup}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.8 }}
                        >
                            <motion.button
                                className={styles.ctaPrimary}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleConfetti}
                            >
                                🎉 ลองใช้ฟรี
                            </motion.button>

                            <motion.a
                                href="#features"
                                className={styles.ctaSecondary}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                📱 ดูตัวอย่าง
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right: App Mockup */}
                    <div className={styles.mockupSide}>
                        <AppMockup />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 3.5 },
                    y: { duration: 1.5, repeat: Infinity }
                }}
            >
                <span>⬇️</span>
                <span>เลื่อนลง</span>
            </motion.div>
        </section>
    )
}
