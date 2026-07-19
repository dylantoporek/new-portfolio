'use client'
import styles from '../../../styles/leftSide.module.css'
import SideMenu from '../../sideMenu'
import { ThemeToggle } from '../../themeToggle'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../../hooks/useIsMobile'

export const Heading = () => {
    const isMobile = useIsMobile()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', // Optional: Use "auto" for instant scroll
        })
    }

    return isMobile ? (
        <div>
            <div
                style={{
                    backgroundColor: 'var(--bg)',
                    zIndex: 10,
                    width: '100%',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--border)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                    padding: '14px 0',
                    transition: 'background-color 0.3s ease',
                }}
            >
                <motion.div whileHover={{ scale: 1.05, y: -2 }}>
                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        style={{
                            fontSize: 26,
                            fontWeight: 600,
                            cursor: 'pointer',
                            marginLeft: '20px',
                            background: 'none',
                            border: 'none',
                            color: 'inherit',
                            fontFamily: 'inherit',
                            padding: 0,
                        }}
                    >
                        Dylan Toporek
                    </button>
                </motion.div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ThemeToggle />
                    <SideMenu />
                </div>
            </div>
        </div>
    ) : (
        <div className={styles.heading}>
            <div>
                <p style={{ fontSize: 48, fontWeight: 600 }}>Dylan Toporek</p>
            </div>

            <div>
                <h2 className={styles.title}>Full Stack Engineer</h2>
                <p className={styles.text}>
                    I create precise, captivating, and accessible digital
                    experiences.
                </p>
            </div>
        </div>
    )
}
