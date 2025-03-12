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
  
    // Get the section element
    const el = document.getElementById(section);
    if (!el) return;
  
    // Calculate the position of the element and its height
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const elementHeight = el.offsetHeight;
  
    // Calculate the center of the viewport and the element
    const windowHeight = window.innerHeight;
    const centerPosition = elementPosition - (windowHeight / 4) + (elementHeight / 2);
  
    // Scroll to the section and center it
    window.scrollTo({
        top: centerPosition,
        behavior: "smooth", // Smooth scroll effect
    });
  
    // Dispatch the custom event for other listeners
    // window.dispatchEvent(new CustomEvent("scrollToSection", { detail: section }));
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
    <motion.div
     style={{
      marginRight: '30px'
     }}>
      {/* Hamburger Button */}
      {!isOpen && (
        <motion.div
          whileHover={{ y: -2, scale: 1.1 }}>
          <button onClick={toggleMenu} style={{
          //   position: "fixed",
            top: 30,
            right: 0,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" stroke="white" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </motion.div>
        
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
          backgroundColor: '#C5C9A4', // Adjusted to gray for better visibility
          color: 'black',
          display: 'flex',
          flexDirection: 'column', 
          gap: 50, // Adjust gap if needed
          minWidth: '150px', // Set a minimum width for the side menu
        }}
      >
        <motion.div
         whileHover={{ y: -2, scale: 1.1 }}
         style={{
           alignSelf: 'end',
           marginTop: '10px',
         }}>
          <button onClick={toggleMenu} 
            style={{
              background: 'transparent',
              border: 'none',
              color: 'black',
              cursor: 'pointer',
              fontSize: '20px'
          }}>
            ✕
          </button>
        </motion.div>
        

        <nav style={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 30 // Adjust space between links
        }}>
          {navItems.map(({ id, label }) => (
            <motion.div
              key={id}
              onClick={() => handleScroll(id)}
              className={`cursor-pointer text-lg p-2 transition ${
                activeSection === id ? "#FF6F61" : "text-white"
              }`}
              whileHover={{ y: -2, scale: 1.1 }}
              style={{
                cursor: 'pointer'
              }}
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
