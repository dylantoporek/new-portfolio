import styles from '../../styles/rightSide.module.css'
import { About } from './about/About'
import { Experience } from './experience/Experience'
import { Projects } from './Projects/Projects'
import { useRef, useEffect } from 'react'
import {motion} from 'framer-motion'
import Wave from '../wave'
import Divider from '../divider'


export const RightSide = () => {

    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    
    useEffect(() => {
        const handleScrollEvent = (event: any) => {
          const refs = { about: aboutRef, experience: experienceRef, projects: projectsRef };
          //@ts-ignore
          if (refs[event.detail]?.current) {
            //@ts-ignore
            refs[event.detail].current.scrollIntoView({ behavior: "smooth" });
          }
        };
    
        window.addEventListener("scrollToSection", handleScrollEvent);
        return () => window.removeEventListener("scrollToSection", handleScrollEvent);
    }, []);

    return (
        <div className={styles.right}>
            <div 
                // id='about'
                ref={aboutRef}
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
                        marginBottom: '50px'
                    }}>
                    About
                </motion.h2>
                <About/>
            </div>
            <Wave/>
            <div 
            // id='experience' 
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
            ref={experienceRef}>
                <motion.h2 
                    id='experience'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        marginBottom: '50px'
                    }}>
                    Experience
                </motion.h2>
                <Experience/>
            </div>
            <Wave/>
            <div
                ref={projectsRef}
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
                        marginBottom: '50px'
                    }}>
                    Projects
                </motion.h2>
                <Projects/>
            </div>
        </div>
    )
}