import styles from '../../styles/rightSide.module.css'
import { About } from './about/About'
import { Experience } from './experience/Experience'
import { Projects } from './Projects/Projects'
import {motion} from 'framer-motion'
import Wave from '../wave'
import { useIsMobile } from '../../hooks/useIsMobile'

export const RightSide = () => {
    const isMobile = useIsMobile();

    return (
        <div className={styles.right}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <motion.h2 
                    id='about'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        marginBottom: isMobile ? '20px':'50px'
                    }}>
                    About
                </motion.h2>
                <About/>
            </div>
            {isMobile ? null : <Wave/>}

            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <motion.h2 
                    id='experience'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        marginBottom: isMobile ? '20px':'50px'
                    }}>
                    Experience
                </motion.h2>
                <Experience/>
            </div>
            {isMobile ? null : <Wave/>}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <motion.h2 
                    id='projects' 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        marginBottom: isMobile ? '20px':'50px'
                    }}>
                    Projects
                </motion.h2>
                <Projects/>
            </div>
        </div>
    )
}