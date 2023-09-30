import axios from "axios";
const KEY = `AIzaSyDg4W7y1x8GJ_AQFjiw6scBWT9kScQzCsg`;

const getPlaylist = async (playlistId, pageToken = "", result = []) => {
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

export default getPlaylist;
