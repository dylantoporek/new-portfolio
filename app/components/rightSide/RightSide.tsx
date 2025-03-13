import styles from '../../styles/rightSide.module.css'
import { About } from './about/About'
import { Experience } from './experience/Experience'
import { Projects } from './Projects/Projects'
import { useRef, useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Wave from '../wave'
import Divider from '../divider'


export const RightSide = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check screen width
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile = <768px
        };
 
        checkScreenSize(); // Check once on mount
        window.addEventListener("resize", checkScreenSize); // Listen for window resize
 
        return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
    }, []);
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
                    // marginBottom: isMobile ? 40: 0
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
            {/* <Wave/> */}
            {isMobile ? null : <Wave/>}
            
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
                        marginBottom: isMobile ? '20px':'50px'
                    }}>
                    Experience
                </motion.h2>
                <Experience/>
            </div>
            {isMobile ? null : <Wave/>}
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
                        marginBottom: isMobile ? '20px':'50px'
                    }}>
                    Projects
                </motion.h2>
                <Projects/>
            </div>
        </div>
    )
}