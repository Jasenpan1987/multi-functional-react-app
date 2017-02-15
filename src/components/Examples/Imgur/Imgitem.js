import React from "react";

const ImgItem = ({ img }) => {
    return (
        <img 
            src={img.link} 
            alt={img.title}
            style={{width: "100px", height: "100px"}}
        />
    )
}

export default ImgItem;