'use client'
import styles from '../../../styles/leftSide.module.css'
import SideMenu from '../../sideMenu'
import {useState, useEffect} from 'react'
import { motion} from 'framer-motion'
export const Heading = () => {
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

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth", // Optional: Use "auto" for instant scroll
        });
      };
    
    return isMobile ?  (
        <div>
            <div 
            style={{
                backgroundColor: '#0D1B2A',
                zIndex: 10,
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid white',
            }}>
                <motion.div
                whileHover={{ scale: 1.1, y: -2 }}>
                    <p
                    onClick={scrollToTop} 
                    style={{
                        fontSize: isMobile ? 32 : 48,
                        cursor: 'pointer',
                        marginLeft: '30px'

                    }}>
                        Dylan Toporek
                    </p>
                </motion.div>
               
                <SideMenu/>
            </div>
           
            {/* <div
            style={{
                position: isMobile ? 'relative' : "unset",
                marginTop: isMobile ? 150: 0,
                marginBottom: isMobile ? 100: 0
            }}>
                <h2 className={styles.title}>Full Stack Engineer</h2>
                <p className={styles.text}>I create precise, captivating, and accessible digital experiences.</p>
            </div> */}
            
        </div>
    ) : 
    (
    <div className={styles.heading}>
        <div 
        style={{
            backgroundColor: isMobile ? 'red' : 'unset',
            zIndex: isMobile ? 10: 0
        }}>
            <p style={{
                fontSize: isMobile ? 32 : 48,
                position: isMobile ? 'fixed' : 'unset',
                top: isMobile ? 0 : 'unset',

            }}>Dylan Toporek</p>
        </div>
       
        <div
        style={{
            position: isMobile ? 'relative' : "unset",
            marginTop: isMobile ? 50: 0
        }}>
            <h2 className={styles.title}>Full Stack Engineer</h2>
            <p className={styles.text}>I create precise, captivating, and accessible digital experiences.</p>
        </div>
        
    </div> 
    )
}