import { useState } from "react";
import getPlaylist from "../api/Api";

const usePlaylist = () => {
    const [state, setState] = useState({
        playLists: {},
        recentPlaylists: [],
        favorites: [],
        error: '',
        loading: false,
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const getPlaylistById = async (playlistId, force = false) => {
        if (state.playLists[playlistId] && !force) {
            return;
        }
        setLoading(true)
        let result;
        try {
            result = await getPlaylist(playlistId)
            setError('')
        } catch (e) {
            setError(e.response?.data?.error?.message || 'Something Went wrong')
        } finally {
            setLoading(false)
        }
        // let cid, ct;
        // result = result.map(item => {
        //     const { channelId, title, description, thumbnails: { medium }, channelTitle, } = item.snippet;
        //     if (!cid) {
        //         cid = channelId;
        //     }
        //     if (!ct) {
        //         ct = channelTitle;
        //     }
        //     return {
        //         title, description, thumbnail: medium,
        //         contentDetails: item.contentDetails
        //     }
        // })
        setState(prev => ({
            ...prev,
            playLists: {
                ...prev.playLists,
                [playlistId]: {
                    items: result,
                    playlistId: playlistId,
                    channelId: cid,
                    channelTitle: ct,
                }
            }
        }))
    }
    const addToFavorite = (playlistId) => {
        setState(prev => ({
            ...prev,
            favorites: [
                ...prev,
                playlistId
            ]
        }))
    }
    const addToRecent = (playlistId) => {
        setState(prev => ({
            ...prev,
            recentPlaylists: [
                ...prev,
                playlistId
            ]
        }))
    }
    const getPlaylistsByIds = (ids = []) => {
        return ids.map(id => state.playLists[id])
    }
    return {
        playLists: state.playLists,
        favorites: getPlaylistsByIds(state.favorites),
        recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
        getPlaylistById,
        addToFavorite,
        addToRecent,
        error, loading,

    }
};

export default usePlaylist;