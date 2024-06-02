import { Box } from "@mui/material";
import Java_logo from "../../assets/images/java_logo.png"
import SpringBoot_logo from "../../assets/images/Spring_boot.png"
import GoogleCloudPlatform_logo from "../../assets/images/Google_Cloud_logo.png"
import Gitlab_logo from "../../assets/images/GitLab_logo.png"
import Jira_logo from "../../assets/images/Jira_logo.png"
import React_logo from "../../assets/images/React_Logo.png"
import VScode_logo from "../../assets/images/Visual_Studio_Code_logo.png"
import "../Skills/Skills.css"


function Skills() {

    const skillsObject = [
        { name: "Java", logo: Java_logo },
        { name: "Spring Boot", logo: SpringBoot_logo },
        { name: "Google Cloud Platform", logo: GoogleCloudPlatform_logo },
        { name: "GitLab", logo: Gitlab_logo },
        { name: "Jira", logo: Jira_logo },
        { name: "React", logo: React_logo },
        { name: "Visual Studio Code", logo: VScode_logo },
    ]

    return (
        <Box className="skills">
            <h1>Skills</h1>
            <Box className="skillsContainer">
                {skillsObject.map(skill => (
                    <Box className="skillContainer">
                        <Box className="imageContainer">
                            <img src={skill.logo} alt={skill.name} srcset="" />
                        </Box>
                        <h4 style={{ whiteSpace: "nowrap" }}>{skill.name}</h4>
                    </Box>
                ))}
            </Box>
        </Box>
    );

}

export default Skills;