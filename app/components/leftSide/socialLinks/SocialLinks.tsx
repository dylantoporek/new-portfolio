"use client";
import styles from '../../../styles/leftSide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faMedium
} from '@fortawesome/free-brands-svg-icons'
import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"

export const SocialLinks = () => {
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
      // isHovered === method ? 'white' : "#4B88A2"

      function handleColor(method: string){
        if (isMobile){
          if (isHovered === method){
            return 'black'
          } else return '#4B88A2'
        } else if (isHovered === method){
          return 'white'
        } else return '#4B88A2'
      }
    return (
        <div 
          className={styles.socials}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 30: '10%', 
          }}>
            {contactMethods.map((method) => {
          return (
            <motion.div 
            key={method}
            whileHover={{scale: 1.1 }}
            style={{
              cursor: 'pointer',
              justifyItems:'center',

            }}>
              <a href={link(method)} style={{display: "table-cell"}} target="_blank">
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