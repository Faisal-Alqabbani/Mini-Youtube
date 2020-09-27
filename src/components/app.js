import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import VideoList from "./videoList";
import VideoDetails from "./VideoDetails";
import useVideos from "../hooks/useVideos";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("baby shark");
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // // };
  // setSelectedVideo(res.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar
        onFormSubmit={search /* equivalent (term) => search(term) */}
      />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
