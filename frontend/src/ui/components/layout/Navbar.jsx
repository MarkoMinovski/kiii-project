import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {Link as ReactRouterLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: "#9c479a" }}>
            <AppBar>
                <Toolbar>


                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "start"  }}>
                        <ReactRouterLink to="/" style={{ textDecoration: 'none', color: "#FFFFFF"}}>
                            JobApps
                        </ReactRouterLink>
                    </Typography>


                    <Button>
                        <ReactRouterLink to="/companies" style={{ textDecoration: 'none', color: "#FFFFFF" }}>
                            Companies
                        </ReactRouterLink>
                    </Button>
                    <Button>
                        <ReactRouterLink to="/ads" style={{ textDecoration: 'none', color: "#FFFFFF" }}>
                            Job Ads
                        </ReactRouterLink>
                    </Button>

                    <Button>
                        <ReactRouterLink to="/apps" style={{ textDecoration: 'none', color: "#FFFFFF" }}>
                            Job Apps
                        </ReactRouterLink>
                    </Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
