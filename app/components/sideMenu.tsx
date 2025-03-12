"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Toggle Menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as HTMLElement).closest("#side-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Handle scrolling to section
  const handleScroll = (section: string) => {
    setIsOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth"});
  };

  // Detect active section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div>
      {/* Hamburger Button */}
      {!isOpen && (
        <button onClick={toggleMenu} style={{
        //   position: "fixed",
          top: 30,
          right: 0,
          background: 'transparent',
          border: 'none'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" stroke="white" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      )}

      {/* Side Menu */}
      <motion.div
        id="side-menu"
        initial={{ x: "100%" }} // Start the menu off-screen to the right
        animate={{ x: isOpen ? "0%" : "100%" }} // Slide in when open, slide out when closed
        transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth spring animation
        style={{
          transformOrigin: 'right',  // Ensure the animation starts from the right
          zIndex: 40, // Ensure the side menu stays on top of other content
          position: 'fixed',
          top: 0,
          right: 0, // Fix the menu to the right side
          height: '100%',
          padding: '8px',
          backgroundColor: 'gray', // Adjusted to gray for better visibility
          display: 'flex',
          flexDirection: 'column', 
          gap: 50, // Adjust gap if needed
          minWidth: '150px', // Set a minimum width for the side menu
        }}
      >
        <button onClick={toggleMenu} 
          style={{
            alignSelf: 'end',
            background: 'transparent',
            border: 'none',
            color: 'white'
        }}>
          ✕
        </button>

        <nav style={{
            display: 'flex',
            flexDirection: 'column', 
            gap: 30 // Adjust space between links
        }}>
          {navItems.map(({ id, label }) => (
            <motion.div
              key={id}
              onClick={() => handleScroll(id)}
              className={`cursor-pointer text-lg p-2 transition ${
                activeSection === id ? "#FF6F61" : "text-white"
              }`}
              whileHover={{ x: 10, scale: 1.1 }}
            >
              {label}
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default SideMenu;
