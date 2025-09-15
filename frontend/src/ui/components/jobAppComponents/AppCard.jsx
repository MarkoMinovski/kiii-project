import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import EditJobAppDialog from "./EditJobAppDialog.jsx";
import DeleteJobAppDialog from "./DeleteJobAppDialog.jsx";


const AppCard = ({jobApp, onEdit, onDelete}) => {
    const navigate = useNavigate();
    const [EditAppDialogOpen, setEditAppDialogOpen] = useState(false);
    const [DeleteAppDialogOpen, setDeleteAppDialogOpen] = useState(false);


    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{jobApp.applicantName}</Typography>
                    <Typography variant="subtitle2">
                        {jobApp.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button size="small" color="info" startIcon={<InfoIcon/>}
                            onClick={() => navigate(`/apps/${jobApp.id}`)}>
                        Info
                    </Button>
                    <Button size="small" color="warning" startIcon={<EditIcon/>}
                            onClick={() => setEditAppDialogOpen(true)}>
                        Edit
                    </Button>

                    <Button size="small" color="error" startIcon={<DeleteIcon/>}
                            onClick={() => setDeleteAppDialogOpen(true)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
            <EditJobAppDialog
            open={EditAppDialogOpen}
            onClose={() => setEditAppDialogOpen(false)}
            jobApp={jobApp}
            onEdit={onEdit}>
            </EditJobAppDialog>
            <DeleteJobAppDialog
            open={DeleteAppDialogOpen}
            onClose={() => setDeleteAppDialogOpen(false)}
            jobApp={jobApp}
            onDelete={onDelete}>
            </DeleteJobAppDialog>
        </>
    );
}


export default AppCard;
