import { Box, duration } from "@mui/material";
import "../Experience/Experience.css"


function Experience() {

    const experiences = [
        {
            company: "Ysquare Technology Private Limited",
            location: "Chennai , Tamil Nadu",
            role: "Associate Backend Engineer",
            duration: "October 2023 - Present",
            description1: "My technical skillset goes beyond traditional web development. I possess experience with cloud platform migrations and data management. This includes analyzing the runtime migration path from Java 8 to Java 17 for App Engine, migrating a servlet application to Spring Boot, and developing a client-requested API using Servlets to facilitate data migration from Datastore to BigQuery. Furthermore, I leveraged Google AppScript for data migration, showcasing my scripting proficiency and ability to tackle complex tasks. My extensive experience with Google Cloud Platform involves managing and optimizing workflows on BigQuery, Datastore, GCS Bucket, Cloud Scheduler, Cron Jobs, and Cloud Functions. I have a proven track record of deploying versions on Google App Engine using Google Shell, ensuring system efficiency and reliability. Finally, I prioritize knowledge transfer and maintainability by meticulously documenting project processes. This focus on streamlining onboarding for future developers and reducing project dependencies by 20-25% highlights my commitment to collaboration and efficient project management.",
            description2: "Possess a strong foundation in problem-solving and user experience. This is evident in my ability to effectively resolve client-reported service tickets in ServiceNow and implement user-requested features in Angular. For instance, I developed a solution for copying schedules from the current day to past days, enhancing user flexibility and productivity. My expertise extends to full-stack development as well, where I have contributed to bug fixing and feature enhancements in internal products using React and Material UI. This work resulted in a measurable improvement of over 10% in product stability and user experience, demonstrating my commitment to delivering high-quality solutions."
        },
        {
            company: "Inmakes Infotech Private Limited",
            location: "Kochi, Kerala",
            role: "Java Full Stack Intern",
            duration: "April 2023 - July 2023",
            description1: "I possess a strong foundation in core development technologies, including Java, SQL, JDBC, and server-side development with Servlets on Tomcat. My front-end expertise encompasses HTML, CSS, and a comprehensive understanding of various JavaScript concepts. This well-rounded skillset allows me to effectively tackle web development projects from the ground up. For instance, I have leveraged my understanding of relational databases(SQL) and database access(JDBC) to design and implement data persistence layers for web applications.Additionally, I have utilized Java Servlets on Tomcat to create dynamic web pages that interact with databases, showcasing my proficiency in server- side development.",
            description2: "Technical knowledge extends beyond core technologies. I possess a proficient understanding of popular Java frameworks like Hibernate, Spring, and Spring Boot. This allows me to streamline development processes and build robust, scalable web applications. Furthermore, I have hands- on experience in both front - end and back - end development.This includes contributing to feature development across various layers of a web application.For example, I have implemented user interfaces using HTML, CSS, and JavaScript, ensuring a user - friendly experience.Additionally, I have participated in back - end development tasks, utilizing Java and frameworks to handle server - side logic and data processing."
        },
        {
            company: "Skill Safari",
            location: "Coimbatore , Tamil Nadu",
            role: "Program Manager Intern",
            duration: "January 2023 - April 2023",
            description1: "Leveraged my understanding of web development principles to create high-quality content and sample projects that supported the HTML and CSS team. This involved tasks like crafting compelling website copy, designing user interfaces, and developing interactive prototypes. Contributing to these projects fostered my skills in content creation, product design, and project management.",
            description2: "Beyond technical skills, my leadership abilities were instrumental in guiding the team towards successful project completion.  I effectively oversaw assignments, monitored team progress, and identified strengths and areas for improvement within individual team members. This involved providing constructive feedback and mentorship, fostering a positive and productive work environment. Furthermore, I served as a communication bridge between team members and clients.I efficiently allocated tasks based on individual strengths and skillsets, ensuring everyone was contributing their best work.Additionally, I provided timely updates and clear guidance throughout project lifecycles, maintaining client satisfaction and project focus."
        },
        {
            company: "Zoho Corporation Private Limited",
            location: "Chennai, Tamil Nadu",
            role: "Web Development - Summer Intern",
            duration: "May 2022",
            description1: "Possess a well-rounded understanding of full-stack development, demonstrated by my work on a web application.  I independently developed a back-end model in Java to handle core functionalities like data creation, deletion, updating, and email transfer. This model ensured efficient data management and interaction with the front-end components. Furthermore, I leveraged my knowledge of HTML and CSS to seamlessly integrate the back- end model with a user - friendly interface.This involved crafting the visual elements and ensuring smooth interaction between the user and the back - end functionalities.",
            description2: "Throughout this project, I had the valuable opportunity to collaborate with seasoned professionals, gaining invaluable insights into both back-end and front-end development processes. Witnessing the full development lifecycle firsthand allowed me to enhance my understanding of how different components work together to create a complete web application. This experience solidified my foundation in full-stack development and fostered my ability to contribute to complex projects."
        }
    ]


    return (
        <Box className="experiences">
            <h1 className="title">Experiences</h1>
            <hr />
            <Box className="experiencesContainer">
                {experiences.map(experience => (
                    <Box className="experienceContainer">
                        <Box className="experienceCircle">
                            <p></p>
                        </Box>
                        <Box className="contents">
                            <Box className="experienceTitleContainer">
                                <Box className="leftTitleContainer">
                                    <Box className="experienceTitle">
                                        <h3>{experience.role}</h3>
                                    </Box>
                                    <Box className="experienceCompany">
                                        <h3>{experience.company}</h3>
                                    </Box>
                                </Box>
                                <Box className="rightTitleContainer">
                                    <Box className="experienceDuration">
                                        <h3>{experience.duration}</h3>
                                    </Box>
                                    <Box className="experienceLocation">
                                        <h3>{experience.location}</h3>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="experienceContentContainer">
                                <p>{experience.description1}</p>

                                <p>{experience.description2}</p>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Experience;