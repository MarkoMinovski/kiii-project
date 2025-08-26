import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";
import CompanyTable from "../companyComponents/CompanyTable.jsx";
import UseAds from "../../../hooks/UseAds.js";
import AdGrid from "../jobAdComponents/AdGrid.jsx";


const AdsPage = () => {
    const {ads, loading} = UseAds();
    return (
        <>
            <Box sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h1" sx={{ fontWeight: 'bold', marginBottom: '10rem' }} gutterBottom>Job Ads</Typography>
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {(!loading && ads.length > 0) && (
                    <>
                        <AdGrid ads={ads}></AdGrid>
                    </>
                )}
            </Box>
        </>
    )
}

export default AdsPage;
