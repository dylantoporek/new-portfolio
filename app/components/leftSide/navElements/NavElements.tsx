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
  // Observe sections in viewport
//   useEffect(() => {
//     const observerOptions = { 
//       root: null, 
//       rootMargin: "-20% 0px -70% 0px", // Adjusts when the section is detected
//       threshold: 0.3 // Triggers when 30% of a section is visible
//     };
  
//     const observerCallback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };
  
//     const observer = new IntersectionObserver(observerCallback, observerOptions);
    
//     sections.forEach((section) => {
//       const element = document.getElementById(section);
//       if (element) observer.observe(element);
//     });
  
//     return () => observer.disconnect();
//   }, []);
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

const handleScroll = (section: string) => {
    setActiveSection(section);
    window.dispatchEvent(new CustomEvent("scrollToSection", { detail: section }));
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
            color: activeSection === section || target === section ? "yellow" : "#fff", // Highlight active section
          }}
        >
          <Line isHovered={hover && target === section} />
          <a>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
        </motion.div>
      ))}
        </motion.div>
    )
}