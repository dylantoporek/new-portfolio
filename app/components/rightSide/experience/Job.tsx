'use client'
import styles from '../../../styles/rightSide.module.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// @ts-ignore
export const Job = ({ job }) => {
    const [openSection, setOpenSection] = useState(false);

    const toggleSection = () => setOpenSection(prev => !prev);
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
    // .job_title {
    //     display: flex;
    //     flex-direction: row;
    //     gap: 5px;
    //     flex-wrap: wrap;
    //     font-weight: bold;
    //     cursor: pointer;
    
    // }
    return (
        <div>
            <div 
                className={styles.job_details}
                style={{
                    fontSize: isMobile ? 16:18
                }}>
                <div 
                    onClick={toggleSection}
                    style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: '5px',
                        flexWrap: 'wrap',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                    <p className={styles.job_title}>{job.jobTitle}</p>
                    {isMobile ? null : <p>•</p>}
                    <p>{job.company}</p>
                    <p className={styles.job_dates}>{job.dates}</p>
                </div>

                <AnimatePresence>
                    {openSection && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={styles.job_content}
                        >
                            <div>
                                {job.details.map((detail: string, index: number) => (
                                    <p key={index}>{detail}</p>
                                ))}
                            </div>
                            <div className={styles.job_skills}>
                                {job.skills.map((skill: string, index: number) => (
                                    <p key={index} className={styles.skill}>{skill}</p>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
