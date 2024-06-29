import { Box } from "@mui/material";
import TopBar from '../Topbar/TopBar';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Contact from "../Contact/Contact"

function PortfolioPage() {
    return (
        <Box>
            <TopBar></TopBar>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Contact></Contact>
        </Box>
    );
}

export default PortfolioPage;