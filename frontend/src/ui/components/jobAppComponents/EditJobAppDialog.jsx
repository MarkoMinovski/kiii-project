import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import UseAds from "../../../hooks/UseAds.js";
import {useState} from "react";


const EditJobAppDialog = ({open, onClose, jobApp, onEdit}) => {

    const [formData, setFormData] = useState({
        applicantName: jobApp.applicantName,
        description: jobApp.description,
        jobAd: jobApp.jobAd
    })
    const {ads} = UseAds();


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        console.log(formData);
        onEdit(jobApp.id, formData);
        setFormData(formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Job App</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Applicant Name"
                    name="applicantName"
                    value={formData.applicantName}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    margin="dense"
                    label="Application Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                />


                <FormControl fullWidth margin="dense">
                    <InputLabel>Job Ad</InputLabel>
                    <Select
                        name="jobAd"
                        value={formData.jobAd}
                        onChange={handleChange}
                        label="Job Advertisement"
                        variant="outlined">
                        {ads.map((ad) => (
                            <MenuItem key={ad.id} value={ad.id}>{ad.position} - {ad.company.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditJobAppDialog;
