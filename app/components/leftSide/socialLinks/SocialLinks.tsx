'use client'
import styles from '../../../styles/leftSide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faMedium,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../../hooks/useIsMobile'

export const SocialLinks = () => {
    const isMobile = useIsMobile()
    const [isHovered, setIsHovered] = useState('')
    const contactMethods = ['github', 'linkedin', 'medium']

    function iconPicker(string: string) {
        if (string === 'github') {
            return faGithub
        } else if (string === 'linkedin') {
            return faLinkedin
        } else if (string === 'medium') {
            return faMedium
        }
    }

    function link(string: string) {
        if (string === 'github') {
            return 'https://github.com/dylantoporek'
        } else if (string === 'linkedin') {
            return 'https://www.linkedin.com/in/dylan-toporek-bb3491106/'
        } else if (string === 'medium') {
            return 'https://medium.com/@dylantoporek'
        }
    }

    function handleColor(method: string) {
        if (isHovered === method) {
            return 'var(--accent)'
        }
        return 'var(--muted)'
    }
    return (
        <div
            className={styles.socials}
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: isMobile ? 32 : '10%',
            }}
        >
            {contactMethods.map((method) => {
                return (
                    <motion.div
                        key={method}
                        whileHover={{ scale: 1.1 }}
                        style={{
                            cursor: 'pointer',
                            justifyItems: 'center',
                        }}
                    >
                        <a
                            href={link(method)}
                            style={{ display: 'table-cell' }}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${method.charAt(0).toUpperCase() + method.slice(1)} profile (opens in new tab)`}
                        >
                            <FontAwesomeIcon
                                onMouseOver={() => setIsHovered(method)}
                                onMouseOut={() => setIsHovered('')}
                                id={method}
                                icon={iconPicker(method)!}
                                color={handleColor(method)}
                                style={{
                                    position: 'relative',
                                    width: '25px',
                                    height: '25px',
                                    transition: 'all .3s ease',
                                    WebkitTransition: 'all .3s ease',
                                    MozTransition: 'all .3s ease',
                                }}
                            />
                        </a>
                    </motion.div>
                )
            })}
        </div>
    )
}
