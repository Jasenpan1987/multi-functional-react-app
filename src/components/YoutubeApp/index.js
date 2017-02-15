import React, { Component } from "react";
import { connect } from "react-redux";

import SearchBar from "./SearchBar";
import Videolist from "./Videolist";
import { searchAct } from "../../redux/actions/youtube";


class YoutubeApp extends Component {
    constructor(props){
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(keywords){
        this.props.searchVideo(keywords);
    }

    render(){
        return (
            <div>
                <h2>Youtube App</h2>
                <SearchBar handleSearch={this.handleSearch}/>
                <hr/>
                <Videolist 
                    videos={this.props.videos}
                />
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        videos: state.youtube
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchVideo: (keywords) => dispatch(searchAct(keywords))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeApp)