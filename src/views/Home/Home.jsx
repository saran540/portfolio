import { Box } from "@mui/material";
import "../Home/Home.css"
import profileImage from "../../assets/images/Saran_S.jpg"

function Home() {

    return (
        <Box>
            <Box className="landingPage">
                <Box className="landingPageAbout">
                    <Box className="aboutContainer">
                        <h3>I am <span>Saran S</span></h3>
                        <p>Full Stack Web Developer</p>
                    </Box>

                </Box>
                <Box className="landingPageImage">
                    <Box className="imageContainer">

                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;