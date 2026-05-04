'use client'

import { useEffect } from 'react'

export function ScrollAnimations() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))

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

  return null
}
