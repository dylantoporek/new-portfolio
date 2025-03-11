'use client'
import styles from '../../../styles/leftSide.module.css'
import { position } from '@chakra-ui/react'
import SideMenu from '../../sideMenu'
import {useState, useEffect} from 'react'
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
                borderBottom: '1px solid white'
            }}>
                <p style={{
                    fontSize: isMobile ? 32 : 48,

                }}>Dylan Toporek</p>
                <SideMenu/>
            </div>
           
            <div
            style={{
                position: isMobile ? 'relative' : "unset",
                marginTop: isMobile ? 150: 0,
                marginBottom: isMobile ? 0: 0
            }}>
                <h2 className={styles.title}>Full Stack Engineer</h2>
                <p className={styles.text}>I create precise, captivating, and accessible digital experiences.</p>
            </div>
            
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