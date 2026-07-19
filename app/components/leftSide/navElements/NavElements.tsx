'use client'
import styles from '../../../styles/leftSide.module.css'
import { Line } from '../../line/Line'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../../hooks/useIsMobile'
import { SECTIONS, useActiveSection } from '../../../hooks/useActiveSection'

export const NavElements = () => {
    const [target, setTarget] = useState('')
    const activeSection = useActiveSection()

    const isMobile = useIsMobile()

    const handleScroll = (section: string) => {
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
            {SECTIONS.map((section) => (
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
                        // accent text on a soft highlight pill
                        background:
                            activeSection === section
                                ? 'var(--surface)'
                                : 'none',
                        color:
                            activeSection === section || target === section
                                ? 'var(--accent)'
                                : 'var(--text)',
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
