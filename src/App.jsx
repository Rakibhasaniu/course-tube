import { useEffect } from "react";
import getPlaylist from "./api/Api";

const App = () => {
    useEffect(() => {
        getPlaylist('PL_XxuZqN0xVBPhR5bjBIKyBjTo8pK99gN')
            .then(res => console.log(res))
    }, [])
    return (
        <div>
            <h1>Hello WOrld</h1>
        </div>
    )
}

export default App;