import React from "react";

import ImgItem from "./Imgitem";

const Imglist = ({ imgs }) => {
    return (
        <div>
            <hr/>
            { imgs.length===0 ? (<h4>Empty list...</h4>) : null }
            { imgs.map(img => {
                return (
                    <ImgItem 
                        key={img.id}
                        img={img}
                    />
                );
            }) }
        </div>
    )
}

export default Imglist;
