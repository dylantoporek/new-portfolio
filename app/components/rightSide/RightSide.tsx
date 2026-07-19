import styles from '../../styles/rightSide.module.css'
import { About } from './about/About'
import { Experience } from './experience/Experience'
import { Projects } from './Projects/Projects'
import {motion} from 'framer-motion'
import LavaLamp from '../lavaLamp'
import { useIsMobile } from '../../hooks/useIsMobile'

export const RightSide = () => {
    const isMobile = useIsMobile();

    const sectionStyle = {
        display: 'flex',
        flexDirection: 'column',
    } as const

    const headingStyle = {
        marginBottom: isMobile ? '20px' : '50px',
    }

    return (
        <div className={styles.right}>
            <section id='about' aria-labelledby='about-heading' style={sectionStyle}>
                <motion.h2
                    id='about-heading'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={headingStyle}>
                    About
                </motion.h2>
                <About/>
            </section>
            {isMobile ? null : <LavaLamp/>}

            <section id='experience' aria-labelledby='experience-heading' style={sectionStyle}>
                <motion.h2
                    id='experience-heading'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={headingStyle}>
                    Experience
                </motion.h2>
                <Experience/>
            </section>
            {isMobile ? null : <LavaLamp/>}
            <section id='projects' aria-labelledby='projects-heading' style={sectionStyle}>
                <motion.h2
                    id='projects-heading'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={headingStyle}>
                    Projects
                </motion.h2>
                <Projects/>
            </section>
        </div>
    )
}
