'use client'
import styles from '../../../styles/rightSide.module.css'
import { Job } from './Job'
export const Experience = () => {
    

    const experienceDetails = [
        {
            company: 'Coconut Tree Software Inc',
            jobTitle: 'Contract Web Developer',
            details: "Developed responsive and interactive UI using React.js, HTML5, and CSS, ensuring cross-browser compatibility and mobile responsiveness. Implemented authentication and authorization features using JWT tokens ensuring secure user access. Utilized React Router for client-side routing, creating seamless navigation experiences within single-page applications.",
            dates: '2024 - Present',
            skills: [
                'JavaScript',
                'React',
                'HTML & CSS',
                'WordPress'
            ],
            url: 'http://coconuttree.io/',
            id: 'coconut-tree'
        },
        {
            company: 'GIVTme',
            jobTitle: 'Software Engineer',
            details: "Expertise in Swift for iOS development and Kotlin for Android app development. Utilized Firebase for backend services to ensure real-time functionality and data security. Using Xcode, developed new features and resolved bugs to improve app performance.",
            dates: '2023 - Present',
            skills: [
                'Swift',
                'Kotlin',
                'Firebase',
            ],
            url: 'https://givtme.com/ ',
            id: 'givtme'
        },
        {
            company: 'Rhabit Analytics',
            jobTitle: 'Associate Software Engineer',
            details: 'Collaborated on GitHub to develop new features, resolve bugs, and maintain applications. Built responsive web pages and components from scratch using React and TypeScript. Implemented comprehensive Cypress tests to validate app functionality and enhance quality. Ensured adherence to design templates created in Figma, delivering a seamless user experience. Enhanced accessibility with screen reader-friendly code for visually impaired users. Developed a Slackbot for sending demo links via Slack or text messages.',
            dates: '2022 - 2023',
            skills: [
                'React',
                'TypeScript',
                'Ruby on Rails',
                'Apollo GraphQL',
                'SQL',
                'Cypress'
            ],
            url: 'https://www.rhabitanalytics.com/',
            id: 'rhabit'
        },
        {
            company: 'Expedience Software',
            jobTitle: 'Contractor',
            details: 'Assisted in updating RFP Inspection Software, optimizing its functionality. Employed React for development within Microsoft Office applications. Created customized Google Analytics reports to extract valuable data insights.',
            dates: '2022 - 2022',
            skills: [
                'React',
                'TypeScript',
                'Google Analytics'
            ],
            url: 'https://expediencesoftware.com/',
            id: 'expedience',
        },
        {
            company: 'Flatiron School',
            jobTitle: 'Student',
            details: "Full-Stack web application development, created with React and Ruby on Rails. Studied Object-oriented programming, REST API's, and PostgreSQL databases. Utilized Heroku and Netlify to deploy and test projects",
            dates: '2021 - 2022',
            skills: [
                'React',
                'JavaScript',
                'Ruby on Rails',
                'HTML & CSS'
            ],
            id: 'flatiron',
        },
        {
            company: 'Math Teacher',
            jobTitle: 'Math Teacher',
            details:
                'The Collegiate School 01/2020 - 06/2020, Home School Teacher / Private Tutor 09/2017 - 06/2022, The Birch Wathen Lenox School 01/2017 - 06/2017, Mathnasium 09/2016 - 07/2022',
            dates: '2016 - 2020',
            skills: [
                'Teaching',
                'Mathematics',
                'Leadership',
                'Organizaiton',
            ],
            id: 'teaching'
        },
    ]
    
    return (
        <div className={styles.experience}>
            {experienceDetails.map((job) => {
                return (
                   <Job key={job.id} job={job}/>
                )
            })}
        </div>
    )
}