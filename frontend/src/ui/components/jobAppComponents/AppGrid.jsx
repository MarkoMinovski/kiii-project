import React from 'react';
import {Grid} from "@mui/material";
import AppCard from "./AppCard.jsx";


const AppGrid = ({jobApps, onEdit, onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}} sx={{ justifyContent: 'space-between' }}>
            {jobApps.map((jobApp) => (
                <Grid key={jobApp.id} size={{xs: 12, sm: 8, md: 6, lg: 4}}>
                    <AppCard jobApp={jobApp} onEdit={onEdit} onDelete={onDelete}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default AppGrid;
