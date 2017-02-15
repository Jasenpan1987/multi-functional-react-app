import React, { Component } from "react";
import { connect } from "react-redux";

import { getImgAct } from "../../../redux/actions/examples/imgur";

import Imglist from "./Imglist";

class Imgur extends Component {
    render(){
        return (
            <div>
                <h2>Imgur</h2>
                <button 
                    onClick={() => {this.props.getImgs()}}
                    disabled={this.props.imgs.length!==0}
                >Load Images</button>
                {this.props.loading ? (<h3>Loading...</h3>) : null}
                <Imglist 
                    imgs={this.props.imgs}
                />
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        imgs: state.examples.imgur.imgs,
        loading: state.examples.imgur.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getImgs: () => dispatch(getImgAct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Imgur)