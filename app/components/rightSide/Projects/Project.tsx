'use client'
import Image from 'next/image'
import styles from '../../../styles/rightSide.module.css'
import { useIsMobile } from '../../../hooks/useIsMobile'

export interface ProjectDetails {
    title: string
    text: string
    image: string
    url?: string
    frontend?: string
    backend?: string
    id: string
    skills: string[]
}

interface Props {
    project: ProjectDetails
}

export const Project = ({ project }: Props) => {
    const isMobile = useIsMobile()

    const tileStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        alignItems: 'center',
        gap: isMobile ? 0 : 50,
        padding: '8px',
        height: isMobile ? 'unset' : '250px',
    } as const

    const tileContent = (
        <>
            <div
                style={{
                    width: '100%',
                    maxWidth: '250px',
                    aspectRatio: '1 / 1', // Uniform square frame regardless of source image shape
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px',
                    borderRadius: '16px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface-dim)',
                    flexShrink: 0,
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Image
                        alt={project.title}
                        src={project.image}
                        fill
                        sizes="250px"
                        style={{
                            objectFit: 'contain', // Ensures no stretching or cropping
                            borderRadius: '8px',
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifySelf: 'flex-start',
                    width: '100%',
                    padding: '8px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '10px',
                    }}
                >
                    <div>
                        <p
                            style={{
                                margin: 0,
                                marginBottom: 30,
                                fontSize: '20px',
                                fontWeight: 'bold',
                            }}
                        >
                            {project.title}
                        </p>
                    </div>
                    <div>
                        <p
                            style={{
                                margin: 0,
                                marginBottom: 20,
                                fontSize: isMobile ? '16px' : '18px',
                            }}
                        >
                            {project.text}
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: isMobile ? '16px' : '18px',
                        }}
                    >
                        <p style={{ margin: 0, fontWeight: '500' }}>
                            Made With:
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: isMobile ? 5 : 10,
                                flexWrap: 'wrap',
                                minWidth: 0,
                            }}
                        >
                            {project.skills.map(
                                (skill: string, index: number) => (
                                    <p key={index} className={styles.skill}>
                                        {skill}
                                    </p>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    // The whole tile is a link to the live project when a URL exists
    return project.url ? (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} (opens in new tab)`}
            style={{ ...tileStyle, cursor: 'pointer' }}
        >
            {tileContent}
        </a>
    ) : (
        <div style={tileStyle}>{tileContent}</div>
    )
}
