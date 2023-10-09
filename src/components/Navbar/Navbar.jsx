import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Stack } from '@mui/material';
import { useState } from 'react';
import FormDialog from '../playlist-dialog/dialog';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link'

const Navbar = ({ getPlaylistById }) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const getPlaylistId = (playlistId) => {
        getPlaylistById(playlistId)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="fixed" color='default'>
                <Container maxWidth={'lg'}>
                    <Toolbar>
                        <Stack spacing={1} sx={{ flexGrow: 1 }}>
                            <Link to='/' component={RouterLink} sx={{ textDecoration: 'none', color: 'black' }} >
                                <Typography variant="h4" >
                                    Course-Tube
                                </Typography>
                            </Link>

                            <Typography variant="body1" >
                                By Rakib Hasan
                            </Typography>

                        </Stack>
                        <Button variant='contained' onClick={handleClickOpen} >ADD PLAYLIST</Button>
                        <FormDialog open={open} handleClose={handleClose} getPlaylistId={getPlaylistId} />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Navbar;