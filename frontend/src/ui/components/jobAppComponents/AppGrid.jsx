import React from 'react';
import {Grid} from "@mui/material";
import AppCard from "./AppCard.jsx";


const AppGrid = ({jobApps, onEdit, onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}} sx={{ justifyContent: 'space-between' }}>
            {jobApps.map((jobApp) => (
                <Grid key={jobApp.id}>
                    <AppCard jobApp={jobApp} onEdit={onEdit} onDelete={onDelete}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default AppGrid;
