import React from "react";

import VideoItem from "./VideoItem";

const Videolist = ({ videos }) => {

    const renderList = (videos) => {
        return videos.map(video => {
            return (
                <VideoItem
                key={video.id}
                description={video.description}
                id={video.id}
                title={video.title}
                />
            )
        }) 
    }

    if(videos.length === 0){
        return (
            <h4>Empty Video List</h4>
        )
    }else{
        return (
             <div>
                 { renderList(videos) }
             </div>
        )
    }
}

export default Videolist;