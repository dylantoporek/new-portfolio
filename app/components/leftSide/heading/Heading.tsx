import styles from '../../../styles/leftSide.module.css'
export const Heading = () => {
    return (
        <div className={styles.heading}>
            <a className={styles.name}>Dylan Toporek</a>
            <h2 className={styles.title}>Full Stack Engineer</h2>
            <p className={styles.text}>I create precise, captivating, and accessible digital experiences.</p>
        </div>
    )
}