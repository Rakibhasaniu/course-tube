import usePlaylist from "./hooks/usePlaylist";
import { CssBaseline, Grid, Stack, Typography } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/card/Cards";
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'


const HomePage = ({ playlistArray }) => {
    return (
        <Container maxWidth={'lg'} sx={{ my: 14 }}>
            {playlistArray.length > 0 && (

                <Grid container >
                    {playlistArray.map((item) => (
                        <Grid item xs={12} md={6} lg={4} mb={2} >

                            <Cards key={item.playlistId} playlistThumbnail={item.playlistThumbnail} playlistTitle={item.playlistTitle} channelTitle={item.channelTitle}
                                playlistId={item.playlistId} />
                        </Grid>

                    ))}
                </Grid>
            )}
        </Container>

    )
}

const NotFound = () => {
    return (
        <Container maxWidth={'lg'} sx={{ my: 14 }}>
            <Typography variant="h2">404 Page Not Found</Typography>
        </Container>
    )
}

const PlayerPage = ({ playlists }) => {
    const { playlistId } = useParams()
    const current = playlists[playlistId]
    if (!current) return;
    return (
        <Container maxWidth={'lg'} sx={{ my: 14 }}>
            <Typography variant="h2">{current.playlistTitle}</Typography>
            <Typography variant="body1">{current.playlistDescription}</Typography>
        </Container>
    )
}

const App = () => {
    const { playLists, error, getPlaylistById } = usePlaylist();
    const playlistArray = Object.values(playLists);

    return (
        <BrowserRouter>
            <CssBaseline />
            <Navbar getPlaylistById={getPlaylistById} />
            <Routes>
                <Route path="/" element={<HomePage playlistArray={playlistArray}></HomePage>} />
                <Route path="/player/:playlistId" element={<PlayerPage playlists={playLists}></PlayerPage>} />
                <Route path="*" element={<NotFound></NotFound>} />
            </Routes>

        </BrowserRouter>
    );
};

export default App; 
