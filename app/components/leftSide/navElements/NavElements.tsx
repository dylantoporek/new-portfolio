'use client';
import styles from '../../../styles/leftSide.module.css'
import { Line } from '../../line/Line'
import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion'

export const NavElements = () => {
const [hover, setHover] = useState(false)
const [target, setTarget] = useState('')
const [activeSection, setActiveSection] = useState("");

const sections = ["about", "experience", "projects"];
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

    useEffect(() => {
        const handleScrollEvent = () => {
        let maxVisible = { section: "", visibility: 0 };

        sections.forEach((section) => {
            const el = document.getElementById(section);
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

            if (visibleHeight > maxVisible.visibility) {
            maxVisible = { section, visibility: visibleHeight };
            }
        });

        if (maxVisible.section) {
            // console.log(maxVisible)
            setActiveSection(maxVisible.section)
        }
        };

        window.addEventListener("scroll", handleScrollEvent);
        handleScrollEvent(); // Trigger on mount

        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, []);

// const handleScroll = (section: string) => {
//     setActiveSection(section);
//     window.dispatchEvent(new CustomEvent("scrollToSection", { detail: section }));
//   };
const handleScroll = (section: string) => {
  setActiveSection(section);

  if (section === 'about'){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  // Get the section element
  const el = document.getElementById(section);
  if (!el) return;

  // Calculate the position of the element and its height
  const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
  const elementHeight = el.offsetHeight;

  // Calculate the center of the viewport and the element
  const windowHeight = window.innerHeight;
  const centerPosition = elementPosition - (windowHeight / 6.25);

  // Scroll to the section and center it
  window.scrollTo({
      top: centerPosition,
      behavior: "smooth", // Smooth scroll effect
  });

  // Dispatch the custom event for other listeners
  // window.dispatchEvent(new CustomEvent("scrollToSection", { detail: section }));
};


    return isMobile ? (
        null
    ) : (
        <motion.div className={styles.nav_elements}>
        {sections.map((section) => (
        <motion.div
          key={section}
          className={styles.nav_element}
          onMouseEnter={() => {
          setTarget(section)
          }}
          onMouseLeave={() => {
            setTarget('')
          }}
          whileHover={{ scale: 1.1, x: 10 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => handleScroll(section)}
          style={{
            cursor: "pointer",
            color: activeSection === section || target === section ? "#00c6ff" : "#fff", // Highlight active section
          }}
        >
          <Line isHovered={hover && target === section} />
          <a>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
        </motion.div>
      ))}
        </motion.div>
    )
}