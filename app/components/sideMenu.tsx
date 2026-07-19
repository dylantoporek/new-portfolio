'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SocialLinks } from './leftSide/socialLinks/SocialLinks'
const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
]

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('about')
    // Section to scroll to once the menu closes — scrolling can't happen
    // while the body scroll lock is still active
    const pendingSection = useRef<string | null>(null)

    // Toggle Menu
    const toggleMenu = () => setIsOpen(!isOpen)

    // Lock body scroll while the menu is open, and perform any deferred
    // section scroll once the lock is released
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''

        if (!isOpen && pendingSection.current) {
            const section = pendingSection.current
            pendingSection.current = null

            // "About" is the first section, so go to the very top;
            // the others land per the sections' scroll-margin-top
            if (section === 'about') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: 'smooth' })
            }
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    // Close the menu and scroll to the section once the lock releases
    const handleScroll = (section: string) => {
        pendingSection.current = section
        setIsOpen(false)
    }

    // Detect active section while scrolling
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 }
        )

        document
            .querySelectorAll('section')
            .forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <div
            style={{
                marginRight: '20px',
            }}
        >
            {/* Hamburger Button */}
            <motion.div whileHover={{ y: -2, scale: 1.1 }}>
                <button
                    onClick={toggleMenu}
                    aria-label="Open navigation menu"
                    aria-expanded={isOpen}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        display: 'flex',
                    }}
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden="true"
                    >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Dimmed backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                backgroundColor: 'rgba(4, 10, 18, 0.6)',
                                backdropFilter: 'blur(2px)',
                                zIndex: 39,
                            }}
                        />

                        {/* Side Menu */}
                        <motion.div
                            id="side-menu"
                            role="dialog"
                            aria-label="Navigation menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                            style={{
                                zIndex: 40,
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                height: '100%',
                                width: 'min(280px, 80vw)',
                                padding: '16px 24px 32px',
                                backgroundColor: '#132435',
                                borderLeft:
                                    '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '-16px 0 40px rgba(0, 0, 0, 0.5)',
                                color: '#F5F5F4',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <button
                                onClick={toggleMenu}
                                aria-label="Close navigation menu"
                                style={{
                                    alignSelf: 'flex-end',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#AAB2C6',
                                    cursor: 'pointer',
                                    fontSize: '24px',
                                    padding: '8px',
                                    lineHeight: 1,
                                }}
                            >
                                ✕
                            </button>

                            <nav
                                aria-label="Section navigation"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginTop: '24px',
                                    gap: '8px',
                                }}
                            >
                                {navItems.map(({ id, label }) => (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => handleScroll(id)}
                                        aria-current={
                                            activeSection === id
                                                ? 'true'
                                                : undefined
                                        }
                                        style={{
                                            cursor: 'pointer',
                                            fontSize: '20px',
                                            textAlign: 'left',
                                            padding: '14px 16px',
                                            borderRadius: '12px',
                                            background:
                                                activeSection === id
                                                    ? 'rgba(255, 255, 255, 0.08)'
                                                    : 'none',
                                            border: 'none',
                                            fontFamily: 'inherit',
                                            fontWeight: 300,
                                            color:
                                                activeSection === id
                                                    ? '#FF6F61'
                                                    : '#F5F5F4',
                                            transition:
                                                'color 0.2s ease, background 0.2s ease',
                                        }}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </nav>

                            <div
                                style={{
                                    marginTop: 'auto',
                                    paddingTop: '24px',
                                    borderTop:
                                        '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <SocialLinks />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SideMenu
