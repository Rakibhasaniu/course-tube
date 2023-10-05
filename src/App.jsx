import usePlaylist from "./hooks/usePlaylist";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/card/Cards";
import Container from '@mui/material/Container';




const App = () => {

    const { playLists, error, getPlaylistById } = usePlaylist()
    // console.log(playLists)
    // console.log(error)
    const playlistArray = Object.values(playLists)
    return (
        <>
            <CssBaseline />
            <Container maxWidth={'lg'} sx={{ marginTop: 14 }}>
                <Navbar getPlaylistById={getPlaylistById} />
                {playlistArray.length > 0 && (

                    playlistArray.map((item) => <Cards key={item.id} playlistThumbnail={item.playlistThumbnail} playlistTitle={item.playlistTitle} channelTitle={item.channelTitle} />)
                )}
            </Container>
        </>
    )
}

export default App;