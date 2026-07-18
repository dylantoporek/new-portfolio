'use client'
import styles from '../../../styles/leftSide.module.css'
import SideMenu from '../../sideMenu'
import { motion} from 'framer-motion'
import { useIsMobile } from '../../../hooks/useIsMobile'

export const Heading = () => {
    const isMobile = useIsMobile();

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
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginLeft: '30px'

                    }}>
                        Dylan Toporek
                    </p>
                </motion.div>
               
                <SideMenu/>
            </div>
        </div>
    ) :
    (
    <div className={styles.heading}>
        <div>
            <p style={{ fontSize: 48, fontWeight: 600 }}>Dylan Toporek</p>
        </div>

        <div>
            <h2 className={styles.title}>Full Stack Engineer</h2>
            <p className={styles.text}>I create precise, captivating, and accessible digital experiences.</p>
        </div>

    </div>
    )
}