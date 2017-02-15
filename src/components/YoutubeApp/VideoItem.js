import React from "react";

const VideoItem = ({ id, title, description }) => {
    return (
        <div>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <iframe id="existing-iframe-example"
                width="640" height="360"
                src={`https://www.youtube.com/embed/${id}`}
            ></iframe>
        </div>
    )
}

export default VideoItem;