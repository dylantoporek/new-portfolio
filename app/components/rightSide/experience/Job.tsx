'use client'
import styles from '../../../styles/rightSide.module.css'

// @ts-ignore
export const Job = ({job}) => {
    console.log(job)
    return (
        <div className={styles.job}>
                <p className={styles.job_dates}>{job.dates}</p>
                <div className={styles.job_details}>
                    <div className={styles.job_title}>
                        <p className={styles.job_title}>{job.jobTitle}</p>
                        <p>•</p>
                        <p>{job.company}</p>
                    </div>
                    <p style={{fontSize: '14px'}}>{job.details}</p>
                    <div className={styles.job_skills}>
                    {job.skills.map((skill: string) => {
                        return (
                            <p className={styles.skill}>{skill}</p>
                        )
                    })}
                    </div>
                    
                </div>
                
        </div>
    )
}