import React from "react";

const Filter = props => {
    return <a href="#" onClick={props.setFilter} style={{marginRight:"5px"}}>{props.children}</a>
}

export default Filter;