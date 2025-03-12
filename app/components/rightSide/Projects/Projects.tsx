'use client'
import { Project } from "./Project"
import {motion} from 'framer-motion'

export const Projects = () => {

    const projects = [
        {
            title: "Del's",
            text: 'Website for an up and coming speakeasy in New York City',
            image: '/del.jpeg',
            // frontend: 'https://github.com/dylantoporek/botw-recipe-app',
            id: 'del',
            skills: ['NextJS', 'Tailwind CSS', 'TypeScript']
          },
          {
            title: 'Portfolio Version 1',
            text: 'The previous version of my portfolio site',
            image: '/logo.jpeg',
            url: 'https://dylantoporek.vercel.app/',
            // frontend: 'https://github.com/dylantoporek/botw-recipe-app',
            // backend: 'https://github.com/dylantoporek/botw-recipe-app-backend',
            id: 'portfolio-v-1',
            skills: ['React', 'CSS', 'Chakra UI', 'JavaScript']
          },
        {
          title: 'Breath of the Wild Cooking App',
          text: 'Cooking mini-game with an in-game shop. Buy ingredients and cook them!',
          image: '/botw.jpeg',
          url: 'https://lit-sierra-35647-76462c49572d.herokuapp.com/',
          frontend: 'https://github.com/dylantoporek/botw-recipe-app',
          backend: 'https://github.com/dylantoporek/botw-recipe-app-backend',
          id: 'botw',
          skills: ['React', 'Ruby on Rails', 'CSS', 'Chakra UI', 'JavaScript']
        },
        {
          title: 'Pokemon Minigame App',
          text: 'Collection of Pokemon themed mini-games. Race on the track or battle in the arena!',
          image: '/pokemon.jpeg',
          url: 'https://tranquil-scrubland-82540.herokuapp.com/',
          frontend: 'https://github.com/dylantoporek/pokemon-mini-game-project',
          backend: 'https://github.com/dylantoporek/pokemon-minigame-backend', 
          id: 'poke',
          skills: ['React', 'Ruby on Rails', 'CSS', 'JavaScript']    
        },
        // {
        //     title: 'Nintendo-Land',
        //     text: 'A board game where you race to the finish against three computer opponents.',
        //     image: '/nintendo-land.webp', 
        //     frontend: 'https://github.com/dylantoporek/Nintendo-Land',
        //     backend: 'https://github.com/dylantoporek/Board-Game-Backend',
        //     url: 'https://frozen-eyrie-81829.herokuapp.com/',
        //     id: 'board-game',
        //     skills: ['React', 'Ruby on Rails', 'CSS', 'Chakra UI', 'JavaScript']
        //   },
      ]
    
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 50
        }}>
            {projects.map((project) => {
                return ( 
                <motion.div   
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 >
                     <Project key={project.id} project={project}/>
                 </motion.div>
                )
            })}
        </div>
    )
}