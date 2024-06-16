import styles from '../../styles/leftSide.module.css'
import { Heading } from './heading/Heading'
import { NavElements } from './navElements/NavElements'
import { SocialLinks } from './socialLinks/SocialLinks'
export const LeftSide = () => {
    return (
        <div className={styles.left}>
           <Heading/>
           <NavElements/>
           <SocialLinks/>
        </div>
    )
}