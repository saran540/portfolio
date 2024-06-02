import { Box } from "@mui/material";
import "../About/About.css";



function About() {


    return (
        <Box className="aboutContentContainer">
            <h1 className="aboutTitle">About Me</h1>
            <Box className="contentContainer">
                <hr />
                <Box className="contents">
                    <p>Journey in web development began with the spark of fascination, which ignited me into the burning desire to create innovative and user-centeric solutions.The journey has fostered a highly motivated and results-oriented full-stack developer, adept at leveraging diverse experiences to bridge the gap between back-end functionality and front-end aesthetics. Driven by a passion for continuous learning, I actively seek collaborative opportunities with talented individuals, industry leaders, and forward-thinking recruiters. This collaborative spirit fuels my desire to expand my skillset and make a significant contribution to impactful projects within the ever-evolving web development landscape.</p>
                </Box>
            </Box>
        </Box>
    );
}

export default About;