'use client'
import styles from '../../styles/leftSide.module.css'

export const Line = ({ isHovered }: { isHovered: boolean }) => {
    return (
        <div
            className={styles.line}
            style={{
                background: isHovered ? 'var(--accent)' : 'var(--muted)',
            }}
        ></div>
    )
}
