'use client'
import styles from '../../styles/leftSide.module.css'
import { Heading } from './heading/Heading'
import { NavElements } from './navElements/NavElements'
import { SocialLinks } from './socialLinks/SocialLinks'
import { useIsMobile } from '../../hooks/useIsMobile'

export const LeftSide = () => {
    const isMobile = useIsMobile()

    return isMobile ? (
        <div>
            <div
                style={{
                    marginBottom: 40,
                }}
            >
                <Heading />
            </div>
        </div>
    ) : (
        <div className={styles.left}>
            <Heading />
            <NavElements />
            <SocialLinks />
        </div>
    )
}
