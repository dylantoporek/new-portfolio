'use client'
import styles from '../../styles/leftSide.module.css'
import { Heading } from './heading/Heading'
import { NavElements } from './navElements/NavElements'
import { SocialLinks } from './socialLinks/SocialLinks'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'
export const LeftSide = () => {
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

  return isMobile ? 
    (
    <div>
        <div 
        style={{
            marginBottom: 40
        }}>
        <Heading/>
        {/* <NavElements/> */}
        </div>
        {/* <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            // backgroundColor: 'red'
        }}>
            <SocialLinks/>
        </div> */}
        
    </div>
   ) 
   : 
    (
        <div className={styles.left}>
           <Heading/>
           <NavElements/>
           <SocialLinks/>
        </div>
    )
}