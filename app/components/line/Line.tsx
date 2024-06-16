'use client'
import styles from '../../styles/leftSide.module.css'

export const Line = ({isHovered}: {isHovered: boolean}) => {
    console.log(isHovered)
    return (
        <div className={styles.line}
        style={{
            background: isHovered ? 'white' : '#4B88A2'
        }}>

        </div>
    )
}