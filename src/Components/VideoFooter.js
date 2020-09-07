import React from 'react';
import "../Styles/VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {() => (<span>{song}</span>)}
                    </Ticker>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
