import React from 'react';
import AdCard from "../jobAdComponents/AdCard.jsx"
import {Grid} from "@mui/material";

const AdGrid = ({ads}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {ads.map((ad) => (
                <Grid key={ad.id} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
                    <AdCard jobAd={ad}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default AdGrid;
