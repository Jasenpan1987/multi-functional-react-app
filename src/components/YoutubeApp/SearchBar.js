import React from "react";

const SearchBar = (props) => {

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(e.target.keywords.value);
        props.handleSearch(e.target.keywords.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="keywords"/>
            <input type="submit" value="Search"/>
        </form>
    )
}

export default SearchBar;