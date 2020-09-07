import React, { useState } from 'react';
import "../Styles/VideoSidebar.css";
import { FavoriteBorder, Favorite, Message, Share } from '@material-ui/icons';

function VideoSidebar({ likes, messages, shares }) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {isLiked ? <Favorite onClick={() => setIsLiked(false)} /> :
                    <FavoriteBorder onClick={() => setIsLiked(true)} />}
                <p>{isLiked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <Message />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <Share />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
