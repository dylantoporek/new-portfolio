'use client';
import styles from '../../../styles/leftSide.module.css'
import { Line } from '../../line/Line'
import React, {useState} from 'react';
import {motion} from 'framer-motion'

export const NavElements = () => {
const [hover, setHover] = useState(false)
const [target, setTarget] = useState('')

    return (
        <motion.div className={styles.nav_elements}>
            <motion.div className={styles.nav_element}
                onMouseEnter={() => {
                    setHover(true)
                    setTarget('About')
                }}
                onMouseLeave={() => {
                    setHover(false)
                    setTarget('')
                }}
                whileHover={{scale: 1.1, x: 30}}
                style={{
                cursor: 'pointer',
                }}>
                    <Line isHovered={hover && target === 'About' ? true : false}/>
                    <a>About</a>
            </motion.div>
            <motion.div className={styles.nav_element}
                 onMouseEnter={() => {
                    setHover(true)
                    setTarget('Experience')
                }}
                onMouseLeave={() => {
                    setHover(false)
                    setTarget('')
                }}
                whileHover={{scale: 1.1, x: 30}}
                style={{
                cursor: 'pointer',
                }}>
                    <Line isHovered={hover && target === 'Experience' ? true : false}/>
                    <a>Experience</a>
            </motion.div>
            <motion.div className={styles.nav_element}
                 onMouseEnter={() => {
                    setHover(true)
                    setTarget('Projects')
                }}
                onMouseLeave={() => {
                    setHover(false)
                    setTarget('')
                }}
                whileHover={{scale: 1.1, x: 30}}
                style={{
                cursor: 'pointer',
                }}>
                    <Line isHovered={hover && target === 'Projects' ? true : false}/>
                    <a>Projects</a>
            </motion.div>
        </motion.div>
    )
}