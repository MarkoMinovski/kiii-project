import React from 'react';
import {Box, Container} from "@mui/material";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router-dom";


const BasicLayout = () => {
    return (
        <>
            <Box>
                <Navbar />
                <Container className="outlet-container" sx={{my: 2, mt: '80px'}} maxWidth="xl">
                    <Outlet/>
                </Container>
                <Footer></Footer>
            </Box>
        </>
    )
}

export default BasicLayout;
