import styles from '../../../styles/rightSide.module.css'
import {motion } from 'framer-motion'
import { useEffect, useState } from 'react';
export const About = () => {
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
    return (
        <motion.div   
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
                <div 
                    className={styles.about} 
                    style={{
                        fontSize: isMobile ? 16 : 18
                    }}>
                <motion.div   
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
                    <p>
                        I was born and raised in the Upper West Side of New York City. For my undergraduate studies, I attended UMass Amherst and graduated with a major in economics and a minor in philosophy. After graduation, I taught math to middle and high school students for a while before transitioning to software engineering.
                    </p>
                    </motion.div>
                    <motion.div   
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
<p>
                        My interest in software engineering has always been there. Only recently, however, have I been able to pursue that interest. Flatiron School's software engineering program gave me the foundation I needed to begin my journey as a developer. During the course, I found satisfaction in learning how to build webpages from scratch, systematically resolving errors in my code, and being able utilize all aspects of creativity to shape my personal projects. 
                    </p>
            </motion.div>
            <motion.div   
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
                <p>
                        Outside of work-related activities, my hobbies include playing games, cooking, hiking, and spending time with my dogs, Lily and Oaki.
                    </p>
            </motion.div>
                </div>
        </motion.div>
    )
}