import { useEffect, useState } from "react";
import getPlaylist from "../api/Api";
import storage from "../utils/Storage";


const STORAGE_KEY = 'rakib'
const INIT = {
    playlists: {},
    recentPlaylists: [],
    favorites: [],

}

const usePlaylist = () => {
    const [state, setState] = useState(INIT)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const state = storage.get(STORAGE_KEY);
        console.log(state)
        if (state) {
            setState({ ...state })
        }
    }, [])
    useEffect(() => {
        if (state != INIT) {
            storage.save(STORAGE_KEY, state)
        }
    }, [state])

    const getPlaylistById = async (playlistId, force = false) => {
        if (state.playlists[playlistId] && !force) {
            return;
        }
        setLoading(true)

        try {
            const playlist = await getPlaylist(playlistId)
            setError('');
            setState((prev) => ({
                ...prev,
                playlists: {
                    ...prev.playlists,
                    [playlistId]: playlist
                }
            }))
        } catch (e) {
            setError(e.response?.data?.error?.message || 'Something Went wrong')
        } finally {
            setLoading(false)
        }

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
        playLists: state.playlists,
        favorites: getPlaylistsByIds(state.favorites),
        recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
        getPlaylistById,
        addToFavorite,
        addToRecent,
        error, loading,

    }
};

export default usePlaylist;