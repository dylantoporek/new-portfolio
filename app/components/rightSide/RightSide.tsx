import styles from '../../styles/rightSide.module.css'
import { About } from './about/About'
import { Experience } from './experience/Experience'
import { useRef, useEffect } from 'react'
import {motion} from 'framer-motion'


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
            <div id='about' ref={aboutRef}>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    About
                </motion.h2>
                <About/>
            </div>
            <div id='experience' ref={experienceRef}>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    Experience
                </motion.h2>
                <Experience/>
            </div>
            <div id='projects' ref={projectsRef}>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    Projects
                </motion.h2>
            </div>
        </div>
    )
}