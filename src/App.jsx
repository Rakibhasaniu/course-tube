
import usePlaylist from "./hooks/usePlaylist";
import { CssBaseline, Grid, Stack } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/card/Cards";
import Container from '@mui/material/Container';

const App = () => {
    const { playLists, error, getPlaylistById } = usePlaylist();
    const playlistArray = Object.values(playLists);

    return (
        <>
            <CssBaseline />
            <Container maxWidth={'lg'} sx={{ my: 14 }}>
                <Navbar getPlaylistById={getPlaylistById} />
                {playlistArray.length > 0 && (

                    <Grid container gap={2}>
                        {playlistArray.map((item) => (
                            <Grid item xs={12} md={6} lg={4} >

                                <Cards key={item.id} playlistThumbnail={item.playlistThumbnail} playlistTitle={item.playlistTitle} channelTitle={item.channelTitle} />
                            </Grid>

                        ))}
                    </Grid>
                )}
            </Container>
        </>
    );
};

export default App;
