import styles from '../../styles/rightSide.module.css'
import { About } from './about/About'
import { Experience } from './experience/Experience'
export const RightSide = () => {
    return (
        <div className={styles.right}>
            <About/>
            <Experience/>
        </div>
    )
}