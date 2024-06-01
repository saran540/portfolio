import { Box } from "@mui/material";
import "../Topbar/TopBar.css"


function TopBar()
{

    return (
        <Box className="topBarContainer">
            <Box className="leftContainer">
                <h1>Saran</h1>
            </Box>
            <Box className="rightContainer">
                <button><a href="" target="">Home</a></button>
                <button><a href="" target="">About</a></button>
                <button><a href="" target="">Contact</a></button>
            </Box>
        </Box>
    );

}

export default TopBar;