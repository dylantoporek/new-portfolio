'use client';
import styles from '../../../styles/leftSide.module.css'
import { Line } from '../../line/Line'
import { useState, useEffect } from 'react';
import {motion} from 'framer-motion'
import { useIsMobile } from '../../../hooks/useIsMobile'

export const NavElements = () => {
const [hover, setHover] = useState(false)
const [target, setTarget] = useState('')
const [activeSection, setActiveSection] = useState("");

const sections = ["about", "experience", "projects"];
const isMobile = useIsMobile();

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
            setActiveSection(maxVisible.section)
        }
        };

        window.addEventListener("scroll", handleScrollEvent);
        handleScrollEvent(); // Trigger on mount

        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, []);

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
  const centerPosition = elementPosition - (windowHeight / 5.5);

  // Scroll to the section and center it
  window.scrollTo({
      top: centerPosition,
      behavior: "smooth", // Smooth scroll effect
  });
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
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => handleScroll(section)}
          style={{
            cursor: "pointer",
            color: activeSection === section || target === section ? "#AAB2C6" : "#fff", // Highlight active section
          }}
        >
          <Line isHovered={hover && target === section} />
          <a>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
        </motion.div>
      ))}
        </motion.div>
    )
}