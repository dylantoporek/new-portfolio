'use client';
import styles from '../../../styles/leftSide.module.css'
import { Line } from '../../line/Line'
import { useState, useEffect } from 'react';
import {motion} from 'framer-motion'
import { useIsMobile } from '../../../hooks/useIsMobile'

const sections = ["about", "experience", "projects"];

export const NavElements = () => {
const [target, setTarget] = useState('')
const [activeSection, setActiveSection] = useState("");

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

  // Calculate the position of the element
  const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;

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
        <nav className={styles.nav_elements} aria-label="Section navigation">
        {sections.map((section) => (
        <motion.button
          key={section}
          type="button"
          className={styles.nav_element}
          onMouseEnter={() => {
          setTarget(section)
          }}
          onMouseLeave={() => {
            setTarget('')
          }}
          onFocus={() => setTarget(section)}
          onBlur={() => setTarget('')}
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => handleScroll(section)}
          aria-current={activeSection === section ? 'true' : undefined}
          style={{
            cursor: "pointer",
            color: activeSection === section || target === section ? "#FF6F61" : "#fff", // Highlight active section
          }}
        >
          <Line isHovered={target === section} />
          <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
        </motion.button>
      ))}
        </nav>
    )
}