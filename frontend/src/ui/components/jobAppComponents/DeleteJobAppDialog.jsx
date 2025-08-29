import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const DeleteJobAppDialog = ({open, onClose, jobApp, onDelete}) => {

    const handleSubmit = () => {
        onDelete(jobApp.id);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete App</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete the application submitted by
                    <strong>{jobApp.applicantName}</strong>? This action cannot be undone.
                </DialogContentText>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSubmit} color="error" variant="contained">Delete</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteJobAppDialog;
