import { Box } from "@mui/material";
import "../Contact/Contact.css";
import Instagram_logo from "../../assets/images/Instagram_logo.png";
import LinkedIn_logo from "../../assets/images/LinkedIn_logo.png";
import Gmail_logo from "../../assets/images/Gmail_logo.png";
import GitHub_logo from "../../assets/images/GitHub_logo.png"

function Contact() {
    return (
        <Box>
            <Box class="container">
                <Box class="iconrow">
                    <center>
                        <Box class="contactleft">
                            <h1 class="sub-title">Contact</h1>
                            <p style={{ marginTop: "20px" }}>
                                <h4>+(91) 9360740998</h4> <br />
                                <p style={{ margin: "20px 0 20px 0" }}
                                >14/1, <br />Annamalai Nagar, <br />G.Goundampalayam,
                                    <br />Naickenpalayam[PO],<br />Periyanaickenpalayam,
                                    <br />Coimbatore - 641020.
                                </p>
                            </p>
                        </Box>
                        <Box class="icons">
                            <Box>
                                <a href="https://www.linkedin.com/in/saransureshkumar/"
                                    target="_blank"
                                    title="LinkedIn"
                                ><img
                                        src={LinkedIn_logo}
                                        alt="Linkedin"
                                        width="50px"
                                        style={{ height: "34px", width: "34px" }}
                                    /></a>
                            </Box>
                            <Box class="gmail">
                                <a href="mailto:saran.sureshkumar.02@gmail.com"
                                    title="Gmail"
                                ><img
                                        src={Gmail_logo}
                                        alt="Gmail"
                                        style={{ height: "34px", width: "34px" }}
                                    /></a>
                            </Box>
                            <Box class="insta">
                                <a href="https://www.instagram.com/s_a_r_a_n_._s/"
                                    target="_blank"
                                    title="Instagram"
                                ><img
                                        src={Instagram_logo}
                                        alt="Instagram"
                                        style={{ width: "34px", height: "34px" }}
                                    /></a>
                            </Box>
                            <Box>
                                <a href="https://github.com/saran540"
                                    target="_blank"
                                    title="Github"
                                ><img
                                        src={GitHub_logo}
                                        alt="GitHub"
                                        width="50px"
                                        style={{ height: "34px", width: "34px" }}
                                    /></a>
                            </Box>
                        </Box>
                    </center>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;