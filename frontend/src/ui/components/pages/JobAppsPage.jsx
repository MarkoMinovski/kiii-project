import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";
import UseJobApps from "../../../hooks/UseJobApps.js";
import AddJobAppDialog from "../jobAppComponents/AddJobAppDialog.jsx";
import AppGrid from "../jobAppComponents/AppGrid.jsx";



const JobAppsPage = () => {
    const {jobApps, loading, onAdd, onEdit, onDelete} = UseJobApps();

    const [addJobAppDialog, setAddJobAppDialog] = useState(false);

    return (
        <>
            <Box className="products-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary" onClick={() =>
                                setAddJobAppDialog(true)}>
                                Add Application
                            </Button>
                        </Box>
                        <AppGrid jobApps={jobApps} onEdit={onEdit} onDelete={onDelete}></AppGrid>
                    </>}
            </Box>

            <AddJobAppDialog
                open={addJobAppDialog}
                onAdd={onAdd}
                onClose={() => setAddJobAppDialog(false)}>

            </AddJobAppDialog>
        </>
    );
}

export default JobAppsPage;
