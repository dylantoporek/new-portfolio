'use client'
import styles from '../../../styles/rightSide.module.css'
import { Job } from './Job'
import {motion} from 'framer-motion'
export const Experience = () => {
    

    // const experienceDetails = [
    //     {
    //         company: 'Coconut Tree Software Inc',
    //         jobTitle: 'Contract Web Developer',
    //         details: "Developed responsive and interactive UI using React.js, HTML5, and CSS, ensuring cross-browser compatibility and mobile responsiveness. Implemented authentication and authorization features using JWT tokens ensuring secure user access. Utilized React Router for client-side routing, creating seamless navigation experiences within single-page applications.",
    //         dates: '2024 - Present',
    //         skills: [
    //             'JavaScript',
    //             'React',
    //             'HTML & CSS',
    //             'WordPress'
    //         ],
    //         url: 'http://coconuttree.io/',
    //         id: 'coconut-tree'
    //     },
    //     {
    //         company: 'GIVTme',
    //         jobTitle: 'Software Engineer',
    //         details: "Expertise in Swift for iOS development and Kotlin for Android app development. Utilized Firebase for backend services to ensure real-time functionality and data security. Using Xcode, developed new features and resolved bugs to improve app performance.",
    //         dates: '2023 - Present',
    //         skills: [
    //             'Swift',
    //             'Kotlin',
    //             'Firebase',
    //         ],
    //         url: 'https://givtme.com/ ',
    //         id: 'givtme'
    //     },
    //     {
    //         company: 'Rhabit Analytics',
    //         jobTitle: 'Associate Software Engineer',
    //         details: 'Collaborated on GitHub to develop new features, resolve bugs, and maintain applications. Built responsive web pages and components from scratch using React and TypeScript. Implemented comprehensive Cypress tests to validate app functionality and enhance quality. Ensured adherence to design templates created in Figma, delivering a seamless user experience. Enhanced accessibility with screen reader-friendly code for visually impaired users. Developed a Slackbot for sending demo links via Slack or text messages.',
    //         dates: '2022 - 2023',
    //         skills: [
    //             'React',
    //             'TypeScript',
    //             'Ruby on Rails',
    //             'Apollo GraphQL',
    //             'SQL',
    //             'Cypress'
    //         ],
    //         url: 'https://www.rhabitanalytics.com/',
    //         id: 'rhabit'
    //     },
    //     {
    //         company: 'Expedience Software',
    //         jobTitle: 'Contractor',
    //         details: 'Assisted in updating RFP Inspection Software, optimizing its functionality. Employed React for development within Microsoft Office applications. Created customized Google Analytics reports to extract valuable data insights.',
    //         dates: '2022 - 2022',
    //         skills: [
    //             'React',
    //             'TypeScript',
    //             'Google Analytics'
    //         ],
    //         url: 'https://expediencesoftware.com/',
    //         id: 'expedience',
    //     },
    //     {
    //         company: 'Flatiron School',
    //         jobTitle: 'Student',
    //         details: "Full-Stack web application development, created with React and Ruby on Rails. Studied Object-oriented programming, REST API's, and PostgreSQL databases. Utilized Heroku and Netlify to deploy and test projects",
    //         dates: '2021 - 2022',
    //         skills: [
    //             'React',
    //             'JavaScript',
    //             'Ruby on Rails',
    //             'HTML & CSS'
    //         ],
    //         id: 'flatiron',
    //     },
    //     {
    //         company: 'Math Teacher',
    //         jobTitle: 'Math Teacher',
    //         details:
    //             'The Collegiate School 01/2020 - 06/2020, Home School Teacher / Private Tutor 09/2017 - 06/2022, The Birch Wathen Lenox School 01/2017 - 06/2017, Mathnasium 09/2016 - 07/2022',
    //         dates: '2016 - 2020',
    //         skills: [
    //             'Teaching',
    //             'Mathematics',
    //             'Leadership',
    //             'Organizaiton',
    //         ],
    //         id: 'teaching'
    //     },
    // ]

    const experienceDetails = [
        {
            company: 'SkySlope',
            jobTitle: 'Customer Support Technician',
            details: [
                    'Assisted real estate professionals with navigating SkySlope’s software, helping them efficiently complete transactions, upload documents, and manage workflows.',
                    "Collaborated with cross-functional teams, including product and engineering, to escalate and resolve complex customer concerns.",
                    "Created and managed Jira tickets for technical issues and feature requests, ensuring clear communication between customer support, product, and development teams to facilitate timely resolutions."
            ],
            dates: '07/2024 - Present',
            skills: [
                'Troubleshooting',
                'CRM Systems',
                'Problem-Solving',
                'Multitasking'
            ],
            url: 'https://skyslope.com/',
            id: 'skyslope',
        },
        {
            company: 'Coconut Tree Software Inc',
            jobTitle: 'Contract Web Developer',
            details: [
                    'Developed responsive and interactive UI for online real estate market place, Bidmax, using React.',
                    "Delivered project in three months to meet customer's strict timeline.",
                    "Integrated the front end with companies existing backend services, enabling the company to launch the project on time."
            ],
            dates: '04/2024 - 07/2024',
            skills: [
                'React',
                'Javascript',
                'Front End Development',
            ],
            url: 'https://bidmax.com/ ',
            id: 'coconut-tree'
        },
        {
            company: 'GIVTme',
            jobTitle: 'Software Engineer',
            details: [
                    'Fixed stripe payment functionality to deliver correct gift amount to recipient, and transferring the stripe fee to the customer.',
                    'Development using Swift for iOS and Kotlin for Android for the front end and utilized Firebase for backend services to ensure real-time functionality and data security.'
            ],
            dates: '08/2023 - 07/2024',
            skills: [
                'Swift',
                'Kotlin',
                'Firebase',
                'iOS Development',
                'Android Development'
            ],
            url: 'https://givtme.com/ ',
            id: 'givtme',
        },
        {
            company: 'Rhabit Analytics',
            jobTitle: 'Associate Software Engineer',
            details: [
                'Updated sales demo to showcase product advancements made by the company since developing the previous demo.',
                'Developed new product features with front end written in React, backend written in Ruby on Rails, and testing with Cypress.',
                'Enhanced accessibility with screen reader-friendly code for visually impaired users.',
                'Developed a Slackbot for sending demo links via Slack or text messages.'
            ],
            dates: '09/2022 - 06/2023',
            skills: [
                'React',
                'Typescript',
                'Ruby on Rails',
                'Apollo GraphQL',
                'SQL',
                'Full Stack Development'
            ],
            url: 'https://www.rhabitanalytics.com/',
            id: 'rhabit',
        },
        {
            company: 'Expedience Software',
            jobTitle: 'Contractor',
            details: [
                'Modified RFP automation software, written in React and Typescript, increasing its processing speed from google office documents.',
                'Upgraded application from Google Analytics 3 to use Google Analytics 4 in order to extract valuable data for reports.',
            ],
            dates: '04/2022 -  07/2022',
            skills: [
                'React',
                'Typescript',
                'Google Analytics'
            ],
            url: 'https://expediencesoftware.com/',
            id: 'expedience',  
        },
        {
            company: 'Flatiron School',
            jobTitle: 'Student',
            details: [
                'Full-Stack web application development, created with React and Ruby on Rails.',
                "Studied Object-oriented programming, REST API's, and PostgreSQL databases.",
                'Utilized Heroku and Netlify to deploy and test projects.'
            ],
            dates: '09/2021 - 03/2022',
            skills: [
                'Full Stack Development',
                'React',
                'JavaScript',
                'Ruby on Rails',
                'OOP'
            ],
            id: 'flatiron',
        },
        {
            company: '',
            jobTitle: 'Math Teacher',
            details: [
                'The Collegiate School 01/2020 - 06/2020',
                'Home School Teacher / Private Tutor 09/2017 - 06/2022',
                'The Birch Wathen Lenox School 01/2017 - 06/2017',
                'Mathnasium 09/2016 - 07/2022',
            ],
            dates: '09/2016 - 06/2020',
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
                    <motion.div   
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    >
                        <Job key={job.id} job={job}/>
                    </motion.div>
                   
                )
            })}
        </div>
    )
}