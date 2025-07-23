import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../components/layout/Navbar.jsx";
import Typography from "@mui/material/Typography";
import HomePageCard from "../components/HomePageCard.jsx";
import Grid from "@mui/material/Grid";

const HomePage = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Container maxwidth="xl" sx={{ textAlign: "center" }}>

                <Typography variant="h2" sx={{ mt: 2, color: "#FFFFFF"}}>
                    JobApps
                </Typography>
                <Typography variant="h6" sx={{ m: 4, color: "#FFFFFF" }}>
                    A sample app for the DevOps Project
                </Typography>
                <hr/>


                <Typography variant="h2" sx={{ mt: 6, color: "#FFFFFF" }}>
                    Apply here today!
                </Typography>
            </Container>
        </Box>
    )
};

export default HomePage;
