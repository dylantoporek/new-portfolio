'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import styles from '../../../styles/rightSide.module.css'
import { useIsMobile } from '../../../hooks/useIsMobile'

export interface ProjectDetails {
    title: string;
    text: string;
    image: string;
    url?: string;
    frontend?: string;
    backend?: string;
    id: string;
    skills: string[];
}

interface Props {
    project: ProjectDetails;
}

export const Project = ({ project }: Props) => {
   const isMobile = useIsMobile();

    return (
        <motion.div
        style={{
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            alignItems: 'center',
            gap: isMobile ? 0:50,
            padding: '8px',
            height: isMobile ? 'unset' : '250px',

        }}>
            <div
             style={{
                width: "100%",
                maxWidth: '250px',
                aspectRatio: '1 / 1', // Uniform square frame regardless of source image shape
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: '12px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.05)',
                flexShrink: 0,
             }}>
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'block',
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                    }}>
                    <Image
                        alt={project.title}
                        src={project.image}
                        fill
                        sizes="250px"
                        style={{
                            objectFit: "contain", // Ensures no stretching or cropping
                            borderRadius: '8px',
                        }}/>
                </a>
            </div>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifySelf: 'flex-start',
                width: '100%',
                padding: '8px'
            }}>
            <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '10px'
            }}>
                <div>
                    <p
                    style={{
                        margin: 0,
                        marginBottom: 30,
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}
                    >{project.title}</p>
                </div>
                <div>
                    <p
                    style={{
                        margin: 0,
                        marginBottom: 20,
                        fontSize: isMobile ? '16px':'18px'
                    }}>
                            {project.text}
                    </p>
                </div>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: isMobile ? '16px':'18px'
                }}>
                    <p style={{margin: 0, fontWeight: '500'}}>Made With:</p>
                    <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: isMobile ? 5:10,
                        flexWrap: 'wrap',
                        minWidth: 0
                    }}>
                        {project.skills.map((skill: string, index: number) =>  <p key={index} className={styles.skill}>{skill}</p>)}
                    </div>
                    
                </div>
            </div>
            </div>          
        </motion.div>
    )
}