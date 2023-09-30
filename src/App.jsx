import { useEffect } from "react";
import getPlaylist from "./api/Api";
import usePlaylist from "./hooks/usePlaylist";

const App = () => {
    const { getPlaylistById, playLists } = usePlaylist();
    useEffect(() => {
        getPlaylistById('PL_XxuZqN0xVBPhR5bjBIKyBjTo8pK99gN')
    }, [])
    console.log(playLists)
    return (
        <div>
            <h1>Hello WOrld</h1>
        </div>
    )
}

export default App;