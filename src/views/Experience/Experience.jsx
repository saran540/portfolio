import { Box, duration } from "@mui/material";
import "../Experience/Experience.css"


function Experience() {

    const experiences = [
        {
            company: "Ysquare Technology Private Limited",
            location: "Chennai , Tamil Nadu",
            role: "Associate Backend Engineer",
            duration: "October 2023 - Present",
            description: [
                "Possess extensive technical expertise in web development, cloud platform migrations, and data management.",
                "Analyzed and executed the runtime migration path from Java 8 to Java 17 for App Engine, and migrated a servlet application to Spring Boot, enhancing performance and maintainability.",
                "Developed a client- requested API using Servlets for seamless data migration from Datastore to BigQuery and leveraged Google AppScript for complex data migration tasks.",
                "Managed and optimized workflows on Google Cloud Platform services including BigQuery, Datastore, GCS Bucket, Cloud Scheduler, Cron Jobs, and Cloud Functions, ensuring system efficiency and reliability through deployments on Google App Engine using Google Shell.",
                "Prioritized knowledge transfer by meticulously documenting project processes, streamlining onboarding for future developers, and reducing project dependencies by 20 - 25 %.",
                "Demonstrated strong problem - solving skills and user experience focus by effectively resolving client - reported service tickets in ServiceNow and implementing user - requested features in Angular, enhancing flexibility and productivity.",
                "Contributed to full - stack development, including bug fixing and feature enhancements in internal products using React and Material UI, resulting in over a 10 % improvement in product stability and user experience.",
                "Committed to continuous learning and professional growth, actively seeking opportunities to expand knowledge and deliver high - quality, cutting - edge solutions."
            ]
        },
        {
            company: "Inmakes Infotech Private Limited",
            location: "Kochi, Kerala",
            role: "Java Full Stack Intern",
            duration: "April 2023 - July 2023",
            description: [
                "Strong foundation in core development technologies including Java, SQL, JDBC, and server - side development with Servlets on Tomcat.",
                "Expertise in front- end technologies such as HTML, CSS, and comprehensive JavaScript concepts, enabling effective web development from the ground up.",
                "Designed and implemented data persistence layers for web applications using relational databases(SQL) and database access(JDBC).",
                "Proficient in creating dynamic web pages that interact with databases using Java Servlets on Tomcat, demonstrating server- side development skills.",
                "In - depth understanding of popular Java frameworks like Hibernate, Spring, and Spring Boot, streamlining development processes for robust, scalable web applications.",
                "Hands - on experience in both front - end and back - end development, contributing to feature development across various layers of web applications.",
                "Implemented user interfaces using HTML, CSS, and JavaScript to ensure user-friendly experiences.",
                "Participated in back - end development tasks, utilizing Java and frameworks to handle server - side logic and data processing, showcasing versatility in web development."
            ]
        },
        {
            company: "Skill Safari",
            location: "Coimbatore , Tamil Nadu",
            role: "Program Manager Intern",
            duration: "January 2023 - April 2023",
            description: [
                "Leveraged web development principles to create high - quality content and sample projects, supporting the HTML and CSS team.",
                "Crafted compelling website copy, designed user interfaces, and developed interactive prototypes to enhance content creation, product design, and project management skills.",
                "Demonstrated leadership by guiding the team to successful project completion, overseeing assignments, monitoring progress, and identifying strengths and areas for improvement.",
                "Provided constructive feedback and mentorship, fostering a positive and productive work environment.",
                "Acted as a communication bridge between team members and clients, ensuring efficient task allocation based on individual strengths and skillsets.",
                "Maintained client satisfaction and project focus through timely updates and clear guidance throughout project lifecycles."
            ]
        },
        {
            company: "Zoho Corporation Private Limited",
            location: "Chennai, Tamil Nadu",
            role: "Web Development - Summer Intern",
            duration: "May 2022",
            description: [
                "Developed a comprehensive web application, showcasing full - stack development skills.",
                "Independently created a back - end model in Java to handle core functionalities like data creation, deletion, updating, and email transfer, ensuring efficient data management.",
                "Integrated the back - end model with a user- friendly interface using HTML and CSS, crafting visual elements and ensuring smooth interaction between the user and back - end functionalities.",
                "Collaborated with seasoned professionals, gaining valuable insights into both back - end and front - end development processes.",
                "Witnessed the full development lifecycle, enhancing understanding of how different components work together to create a complete web application.",
                "Solidified foundation in full - stack development, fostering the ability to contribute to complex projects."
            ]
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
                                <ul>
                                    {experience.description.map(bullet => (
                                        <li><p>{bullet}</p></li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Experience;