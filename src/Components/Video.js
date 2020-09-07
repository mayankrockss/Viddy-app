import React, { useRef } from 'react';
import '../Styles/Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
    const vidRef = useRef(null);

    const handleVideoClick = () => {
        if (vidRef.current.paused) {
            vidRef.current.play();
        }
        else {
            vidRef.current.pause();
        }
    }
    return (
        <div className="video">
            <video onClick={handleVideoClick} ref={vidRef} className="video__player" src={url} loop />
            <VideoFooter {...{ channel }} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video
