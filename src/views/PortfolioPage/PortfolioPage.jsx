import { Box } from "@mui/material";
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Contact from "../Contact/Contact"
import "../PortfolioPage/PortfolioPage.css"


function PortfolioPage() {
    return (
        <Box className="portfolio">
            <Box className="topBarContainer">
                <Box className="leftContainer">
                    <h1>Saran</h1>
                </Box>
                <Box className="rightContainer">
                    <button><a href="#Home" target="">Home</a></button>
                    <button><a href="#About" target="">About</a></button>
                    <button><a href="#Contact" target="">Contact</a></button>
                </Box>
            </Box>
            <div id="Home">
                <Home></Home>
            </div>
            <div id="About">
                <About></About>
            </div>
            <Skills></Skills>
            <Experience></Experience>
            <div id="Contact">
                <Contact></Contact>
            </div>
        </Box>
    );
}

export default PortfolioPage;