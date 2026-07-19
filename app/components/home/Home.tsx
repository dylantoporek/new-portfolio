'use client'
import { MotionConfig } from 'framer-motion'
import { LeftSide } from '../leftSide/LeftSide'
import { RightSide } from '../rightSide/RightSide'
import { ThemeToggle } from '../themeToggle'
import { useIsMobile } from '../../hooks/useIsMobile'
import styles from '../../styles/home.module.css'

export const Home = () => {
    const isMobile = useIsMobile()

    return (
        <MotionConfig reducedMotion="user">
            {/* On mobile the toggle lives in the fixed header bar instead */}
            {isMobile ? null : (
                <div
                    style={{
                        position: 'fixed',
                        top: '24px',
                        right: '24px',
                        zIndex: 20,
                    }}
                >
                    <ThemeToggle />
                </div>
            )}
            <div className={styles.home}>
                <LeftSide />
                <RightSide />
            </div>
        </MotionConfig>
    )
}
