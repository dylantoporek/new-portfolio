'use client'
import {motion} from 'framer-motion'
import { useState, useEffect } from "react"

export const Project = (project: any) => {
   console.log(project)
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

    return (
        <motion.div
        style={{
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            alignItems: 'center',
            gap: isMobile ? 20:50,
            padding: '8px',
            height: isMobile ? 'unset' : '250px',

        }}>
            <div
             style={{
                width: "100%", // Takes up half the width
                maxWidth: '250px',
                maxHeight: '250px',
                height: "100%", // Takes up half the parent div height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // overflow: "none",
             }}>
                <a href={project.project.url} style={{display: "table-cell"}} target="_blank">
                    <img
                    style={{
                        width: "100%", // Ensures it fully fills the div horizontally
                        height: "100%", // Ensures it fully fills the div vertically
                        objectFit: "contain" // Ensures no stretching
                    }} src={project.project.image}/> 
                </a>
                
            </div>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifySelf: 'flex-start',
                width: '100%',
                padding: '8px'
            }}>
            <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '10px'
            }}>
                <div>
                    <p
                    style={{
                        margin: 0,
                        marginBottom: 30,
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}
                    >{project.project.title}</p>
                </div>
                <div>
                    <p
                    style={{
                        margin: 0,
                        marginBottom: 30
                    }}>
                            {project.project.text}
                    </p>
                </div>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <p style={{margin: 0}}>Made With</p>
                    <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 10,
                        flexWrap: 'wrap'
                    }}>
                        {project.project.skills.map((skill: string) => <p style={{margin: 0}}>{skill}</p>)}
                    </div>
                    
                </div>
            </div>
            </div>          
        </motion.div>
    )
}