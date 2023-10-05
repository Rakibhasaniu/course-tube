import axios from "axios";
const KEY = `AIzaSyDg4W7y1x8GJ_AQFjiw6scBWT9kScQzCsg`;

const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${KEY}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  // console.log(data);
  if (data.nextPageToken) {
    result = await getPlaylist(playlistId, data.nextPageToken, [
      ...result,
      ...data.items,
    ]);
  }
  return result;
};
const getPlaylist = async (playlistId) => {
  const URl = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${KEY}`;
  const { data } = await axios.get(URL);
  let playlistItems = await getPlaylistItem(playlistId);
  const {
    channelId,
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelTitle,
  } = data?.items[0]?.snippet;
  // let cid, ct;

  playlistItems = playlistItems.map((item) => {
    const {
      // channelId,
      title,
      description,
      thumbnails: { medium },
      // channelTitle,
    } = item.snippet;
    // if (!cid) {
    //   cid = channelId;
    // }
    // if (!ct) {
    //   ct = channelTitle;
    // }
    return {
      title,
      description,
      thumbnail: medium,
      contentDetails: item.contentDetails,
    };
  });
  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnail: thumbnails.default,
    channelId,
    channelTitle,
    playlistItems,
  };
};

export default getPlaylist;
