import axios from "axios";

const KEY = "AIzaSyCREwVIozoit81f3MAqJZp1XyC7Y2CLCN4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
