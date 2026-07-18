'use client'
import styles from '../../styles/leftSide.module.css'

export const Line = ({isHovered}: {isHovered: boolean}) => {
    return (
        <div className={styles.line}
        style={{
            background: isHovered ? '#FF6F61' : '#4B88A2'
        }}>

        </div>
    )
}