import { useEffect } from "react";
import getPlaylist from "./api/Api";
import usePlaylist from "./hooks/usePlaylist";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
    // const { getPlaylistById, playLists, error, loading } = usePlaylist();
    // useEffect(() => {
    //     getPlaylistById('PL_XxuZqN0xVBPhR5bjBIKyBjTo8pK99gN')
    // }, [])
    // console.log('Playlist', playLists)
    // console.log('Error', error)
    // console.log('Loading', loading)
    // console.log(playLists)
    const { playLists, error, getPlaylistById } = usePlaylist()
    console.log(playLists)
    console.log(error)
    return (
        <>
            <CssBaseline />
            <div>

                <Navbar getPlaylistById={getPlaylistById} />
            </div>
        </>
    )
}

export default App;