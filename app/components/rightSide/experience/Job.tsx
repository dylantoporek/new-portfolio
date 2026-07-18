'use client'
import styles from '../../../styles/rightSide.module.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PlusMinus from '../../plusMinus'
import { useIsMobile } from '../../../hooks/useIsMobile'

export interface JobDetails {
    company: string;
    jobTitle: string;
    details: string[];
    dates: string;
    skills: string[];
    url?: string;
    id: string;
}

interface Props {
    job: JobDetails;
}

export const Job = ({ job }: Props) => {
    const [openSection, setOpenSection] = useState(false);

    const toggleSection = () => setOpenSection(prev => !prev);
    const isMobile = useIsMobile();

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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}>
                    <div 
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: '5px',
                            flexWrap: 'wrap',
                            fontWeight: 'bold',
                        }}>
                        <p className={styles.job_title}>{job.jobTitle}</p>
                        {isMobile ? null : <p>•</p>}
                        <p>{job.company}</p>
                        <p className={styles.job_dates}>{job.dates}</p>
                        
                    </div>
                    <div
                    style={{
                        marginRight: 20
                    }}>
                        <PlusMinus isOpen={openSection}/>
                    </div>
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
