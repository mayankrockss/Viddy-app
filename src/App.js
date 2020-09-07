import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Components/Video';
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/fetchVideos");
      if (data) setVideos(data);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(video => <Video key={video._id} {...video} />)}
      </div>
    </div>
  );
}

export default App;
