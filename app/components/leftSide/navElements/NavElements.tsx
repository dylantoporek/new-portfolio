'use client'
import styles from '../../../styles/leftSide.module.css'
import { Line } from '../../line/Line'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../../hooks/useIsMobile'

const sections = ['about', 'experience', 'projects']

export const NavElements = () => {
    const [target, setTarget] = useState('')
    const [activeSection, setActiveSection] = useState('')

    const isMobile = useIsMobile()

    useEffect(() => {
        const handleScrollEvent = () => {
            let maxVisible = { section: '', visibility: 0 }

            sections.forEach((section) => {
                const el = document.getElementById(section)
                if (!el) return

                const rect = el.getBoundingClientRect()
                const visibleHeight = Math.max(
                    0,
                    Math.min(rect.bottom, window.innerHeight) -
                        Math.max(rect.top, 0)
                )

                if (visibleHeight > maxVisible.visibility) {
                    maxVisible = { section, visibility: visibleHeight }
                }
            })

            if (maxVisible.section) {
                setActiveSection(maxVisible.section)
            }
        }

        window.addEventListener('scroll', handleScrollEvent)
        handleScrollEvent() // Trigger on mount

        return () => window.removeEventListener('scroll', handleScrollEvent)
    }, [])

    const handleScroll = (section: string) => {
        setActiveSection(section)

        // "About" is the first section, so go to the very top of the page;
        // the others land per the sections' scroll-margin-top
        if (section === 'about') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    }

    return isMobile ? null : (
        <nav className={styles.nav_elements} aria-label="Section navigation">
            {sections.map((section) => (
                <motion.button
                    key={section}
                    type="button"
                    className={styles.nav_element}
                    onMouseEnter={() => {
                        setTarget(section)
                    }}
                    onMouseLeave={() => {
                        setTarget('')
                    }}
                    onFocus={() => setTarget(section)}
                    onBlur={() => setTarget('')}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    onClick={() => handleScroll(section)}
                    aria-current={
                        activeSection === section ? 'true' : undefined
                    }
                    style={{
                        cursor: 'pointer',
                        // Same active treatment as the mobile menu:
                        // coral text on a soft highlight pill
                        background:
                            activeSection === section
                                ? 'rgba(255, 255, 255, 0.08)'
                                : 'none',
                        color:
                            activeSection === section || target === section
                                ? '#FF6F61'
                                : '#fff', // Highlight active section
                    }}
                >
                    <Line isHovered={target === section} />
                    <span>
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                </motion.button>
            ))}
        </nav>
    )
}
