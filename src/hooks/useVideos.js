import { useState, useEffect } from "react";
import youtube from "../components/apis/youtube";
const useVideos = (defaultSearchterm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearchterm);
  }, [defaultSearchterm]);
  const search = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(res.data.items);
  };
  // you can return array or object whatever you want.
  return [videos, search];
};
export default useVideos;
