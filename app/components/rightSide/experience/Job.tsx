'use client'
import styles from '../../../styles/rightSide.module.css'

// @ts-ignore
export const Job = ({job}) => {
    console.log(job)
    return (
        <div className={styles.job}>
                
                <div className={styles.job_details}>
                    <div className={styles.job_title}>
                        <p className={styles.job_title}>{job.jobTitle}</p>
                        <p>•</p>
                        <p>{job.company}</p>
                        <p className={styles.job_dates}>{job.dates}</p>
                    </div>
                    <div>
                        {job.details.map((detail: string) => {
                            return (
                                <p>{detail}</p>
                            )
                        })}
                    </div>
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