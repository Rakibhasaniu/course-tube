import usePlaylist from "./hooks/usePlaylist";
import { CssBaseline, Grid, Stack } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/card/Cards";
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const HomePage = ({ playlistArray }) => {
    return (
        <Container maxWidth={'lg'} sx={{ my: 14 }}>
            {playlistArray.length > 0 && (

                <Grid container >
                    {playlistArray.map((item) => (
                        <Grid item xs={12} md={6} lg={4} mb={2} >

                            <Cards key={item.id} playlistThumbnail={item.playlistThumbnail} playlistTitle={item.playlistTitle} channelTitle={item.channelTitle} />
                        </Grid>

                    ))}
                </Grid>
            )}
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
            </Routes>
        </BrowserRouter>
    );
};

export default App;
