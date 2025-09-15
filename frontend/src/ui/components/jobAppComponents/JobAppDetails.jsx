import React from 'react';
import {useNavigate, useParams} from "react-router";
import {
    Box,
    Button,
    Chip,
    CircularProgress,
    Grid,
    Typography,
    Paper,
    Avatar,
    Stack,
    Rating,
    Breadcrumbs,
    Link, Divider
} from "@mui/material";
import {
    ArrowBack,
    Category,
    Factory,
    Star,
    ShoppingCart,
    FavoriteBorder,
    Share, FlagCircle, Public
} from "@mui/icons-material";
import useJobAppDetails from "../../../hooks/UseJobAppDetails.js";


const JobAppDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    const {jobApp, jobAd, company} = useJobAppDetails(id);


    if (!jobApp || !jobAd || !company) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh'}}>
                <CircularProgress/>
            </Box>
        )
    }

    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
                <Link
                    underline="hover"
                    color="white"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/apps");
                    }}
                >
                    Job Apps
                </Link>
                <Typography color="text.primary">{jobApp.applicantName}</Typography>
            </Breadcrumbs>

            <Paper elevation={3} sx={{ p: 5, borderRadius: 4 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 3,
                                bgcolor: 'background.paper',
                                borderRadius: 3,
                                boxShadow: 2,
                            }}
                        >
                            <Avatar
                                src={"/placeholder-book.jpg"}
                                variant="rounded"
                                sx={{
                                    width: '100%',
                                    height: 280,
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                            {jobAd.position}
                        </Typography>

                        <Divider sx={{ mb: 3 }} />

                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <strong>Applicant:</strong> {jobApp.applicantName}
                        </Typography>


                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <strong>Industry:</strong> {company.sector}
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3 }}>
                            <strong>Company:</strong> {company.name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                            {jobApp.description}
                        </Typography>

                        <Button
                            variant="outlined"
                            startIcon={<ArrowBack />}
                            onClick={() => navigate("/apps")}
                        >
                            Back to Job Applications
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );

}

export default JobAppDetails;
