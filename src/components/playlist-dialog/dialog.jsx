
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const FormDialog = ({ open, handleClose, getPlaylistId }) => {
    const [state, setState] = useState('')
    const handleSubmit = () => {
        if (!state) {
            alert("Invalid State")
        } else {
            getPlaylistId(state)
            setState('')
            handleClose()
        }
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Playlist</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To Add A Playlist Please Insert The Playlist Id or Playlist Link.Please Make Sure The Link Is Correct.Otherwise We Won't Able To Fetch The Playlist Information.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Playlist Id Or Link"
                    fullWidth
                    variant="standard"
                    onChange={e => setState(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>ADD</Button>
            </DialogActions>
        </Dialog>
    );
}

export default FormDialog;