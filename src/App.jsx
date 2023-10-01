import { useEffect } from "react";
import getPlaylist from "./api/Api";
import usePlaylist from "./hooks/usePlaylist";

const App = () => {
    const { getPlaylistById, playLists, error, loading } = usePlaylist();
    useEffect(() => {
        getPlaylistById('PL_XxuZqN0xVBPhR5bjBIKyBjTo8pK99gN')
    }, [])
    console.log('Playlist', playLists)
    console.log('Error', error)
    console.log('Loading', loading)
    console.log(playLists)
    return (
        <div>
            <h1>Hello WOrld</h1>
        </div>
    )
}

export default App;