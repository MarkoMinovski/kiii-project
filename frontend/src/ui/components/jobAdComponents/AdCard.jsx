import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import InfoIcon from '@mui/icons-material/Info';
import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";


const AdCard = ({jobAd}) => {
    const navigate = useNavigate();


    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{jobAd.position}</Typography>
                    <Typography variant="subtitle2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam assumenda blanditiis cum
                        ducimus enim modi natus odit quibusdam veritatis.
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button size="small" color="info" startIcon={<InfoIcon/>}
                            onClick={() => navigate(`/ads/${jobAd.id}`)}>
                        Info
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}


export default AdCard;
