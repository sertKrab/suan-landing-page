'use client'

import { motion } from 'framer-motion'

const leaves = [
    { id: 1, size: 20, x: '10%', delay: 0, duration: 15 },
    { id: 2, size: 15, x: '25%', delay: 2, duration: 18 },
    { id: 3, size: 25, x: '75%', delay: 4, duration: 12 },
    { id: 4, size: 18, x: '85%', delay: 6, duration: 20 },
    { id: 5, size: 22, x: '50%', delay: 8, duration: 16 },
]

export default function FloatingElements() {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1
        }}>
            {leaves.map((leaf) => (
                <motion.div
                    key={leaf.id}
                    style={{
                        position: 'absolute',
                        left: leaf.x,
                        top: '-50px',
                        fontSize: leaf.size,
                        opacity: 0.6,
                    }}
                    initial={{ y: -50, rotate: 0, opacity: 0 }}
                    animate={{
                        y: ['0vh', '110vh'],
                        rotate: [0, 360, 180, 360],
                        opacity: [0, 0.6, 0.6, 0],
                        x: [0, 30, -20, 10, 0],
                    }}
                    transition={{
                        duration: leaf.duration,
                        delay: leaf.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    🍃
                </motion.div>
            ))}

            {/* Water droplets */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={`drop-${i}`}
                    style={{
                        position: 'absolute',
                        left: `${20 + i * 25}%`,
                        top: '-20px',
                        fontSize: 12,
                        opacity: 0.4,
                    }}
                    animate={{
                        y: ['0vh', '110vh'],
                        opacity: [0, 0.4, 0.4, 0],
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        delay: i * 3,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    💧
                </motion.div>
            ))}
        </div>
    )
}
