'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
    text: string
    delay?: number
    speed?: number
    onComplete?: () => void
    className?: string
}

export default function TypewriterText({
    text,
    delay = 0,
    speed = 80,
    onComplete,
    className
}: TypewriterTextProps) {
    const [displayText, setDisplayText] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            let currentIndex = 0

            const interval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayText(text.slice(0, currentIndex + 1))
                    currentIndex++
                } else {
                    clearInterval(interval)
                    setIsComplete(true)
                    onComplete?.()
                }
            }, speed)

            return () => clearInterval(interval)
        }, delay)

        return () => clearTimeout(timeout)
    }, [text, delay, speed, onComplete])

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: delay / 1000 }}
        >
            {displayText}
            {!isComplete && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    style={{ marginLeft: 2 }}
                >
                    |
                </motion.span>
            )}
        </motion.span>
    )
}
