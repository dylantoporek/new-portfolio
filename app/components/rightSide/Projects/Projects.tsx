'use client'
import { Project, type ProjectDetails } from './Project'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../../hooks/useIsMobile'

export const Projects = () => {
    const isMobile = useIsMobile()

    const projects: ProjectDetails[] = [
        {
            title: 'Cinema Shirts',
            text: 'Online shop for movie-inspired t-shirts',
            image: '/cinemashirts.png',
            url: 'https://www.cinemashirts.com/',
            id: 'cinema-shirts',
            skills: ['NextJS', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
        },
        {
            title: "Del's",
            text: 'Website for an up and coming speakeasy in New York City',
            image: '/del.jpeg',
            url: 'https://dels-9hki.vercel.app/',
            id: 'del',
            skills: ['NextJS', 'React', 'TypeScript', 'Tailwind CSS'],
        },
        {
            title: 'Portfolio Version 1',
            text: 'The previous version of my portfolio site',
            image: '/logo.jpeg',
            url: 'https://dylantoporek-portfolio-v1.vercel.app/',
            id: 'portfolio-v-1',
            skills: ['React', 'CSS', 'Chakra UI', 'JavaScript'],
        },
        {
            title: 'Breath of the Wild Cooking App',
            text: 'Cooking mini-game with an in-game shop. Buy ingredients and cook them!',
            image: '/botw.jpeg',
            url: 'https://botw-recipe-app.vercel.app/',
            frontend: 'https://github.com/dylantoporek/botw-recipe-app',
            backend: 'https://github.com/dylantoporek/botw-recipe-app-backend',
            id: 'botw',
            skills: [
                'React',
                'JavaScript',
                'Chakra UI',
                'Node.js',
                'Express',
                'PostgreSQL',
            ],
        },
        {
            title: 'Nintendo-Land',
            text: 'A board game where you race to the finish against three computer opponents.',
            image: '/nintendo-land.webp',
            url: 'https://board-game-backend-alpha.vercel.app/',
            frontend: 'https://github.com/dylantoporek/Nintendo-Land',
            backend: 'https://github.com/dylantoporek/Board-Game-Backend',
            id: 'board-game',
            skills: [
                'React',
                'JavaScript',
                'Bootstrap',
                'Sass',
                'Node.js',
                'Express',
                'PostgreSQL',
            ],
        },
        {
            title: 'Pokemon Minigame App',
            text: 'Collection of Pokemon themed mini-games. Race on the track or battle in the arena!',
            image: '/pokemon.jpeg',
            url: 'https://pokemon-minigame-project.vercel.app/',
            frontend:
                'https://github.com/dylantoporek/pokemon-mini-game-project',
            backend: 'https://github.com/dylantoporek/pokemon-minigame-backend',
            id: 'poke',
            skills: [
                'React',
                'JavaScript',
                'CSS',
                'Node.js',
                'Express',
                'PostgreSQL',
            ],
        },
    ]

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? 50 : 100,
            }}
        >
            {projects.map((project) => {
                return (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Project project={project} />
                    </motion.div>
                )
            })}
        </div>
    )
}
