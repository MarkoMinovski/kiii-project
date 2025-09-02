import React from 'react';
import AdCard from "../jobAdComponents/AdCard.jsx"
import {Grid} from "@mui/material";

const AdGrid = ({ads, onEdit, onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}} sx={{ justifyContent: 'space-between' }}>
            {ads.map((ad) => (
                <Grid key={ad.id} size={{xs: 12, sm: 8, md: 6, lg: 4}}>
                    <AdCard jobAd={ad}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default AdGrid;
