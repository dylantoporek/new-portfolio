"use client";
import styles from '../../../styles/leftSide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faMedium
} from '@fortawesome/free-brands-svg-icons'
import React, {useState} from 'react'
import { motion } from "framer-motion"

export const SocialLinks = () => {
    const [isHovered, setIsHovered] = useState('')
    const contactMethods = ['github', 'linkedin', 'medium']

    function iconPicker(string: String){
        if (string === 'github'){
          return faGithub
        } else if (string === 'linkedin'){
          return faLinkedin
        } else if (string === 'medium'){
          return faMedium
        }
      }

      function link(string: String){
        if (string === 'github'){
          return "https://github.com/dylantoporek"
        } else if (string === 'linkedin'){
          return "https://www.linkedin.com/in/dylan-toporek-bb3491106/"
        } else if (string === 'medium'){
          return  "https://medium.com/@dylantoporek"
        }
      }
    return (
        <div className={styles.socials}>
            {contactMethods.map((method) => {
          return (
            <motion.div 
            key={method}
            whileHover={{scale: 1.1 }}
            style={{
              cursor: 'pointer',
              justifyItems:'center',

            }}>
              <a href={link(method)} >
                <FontAwesomeIcon
                onMouseOver={() => setIsHovered(method)}
                onMouseOut={() => setIsHovered('')}
                id={method}
                icon={iconPicker(method)!} 
                color={isHovered === method ? 'white' : "#4B88A2"} 
                style={{
                position: 'relative',
                width: '25px',
                height: '25px',
                transition: "all .3s ease",
                WebkitTransition: "all .3s ease",
                MozTransition: "all .3s ease",
                }}/>
              </a>
              
            </motion.div>
          )
        })}
        </div>
    )
}