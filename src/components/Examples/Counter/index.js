import React, { Component } from "react";
import { connect } from "react-redux";

import { incCtrAct, decCtrAct } from "../../../redux/actions/examples/counter";

class Counter extends Component {
    render(){
        return (
            <div>
                <h2>Counter: { this.props.counter }</h2>
                <button onClick={() => {this.props.incCtr()}}>+ Counter</button>
                <button onClick={() => {this.props.decCtr()}}>- Counter</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.examples.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incCtr: () => dispatch(incCtrAct()),
        decCtr: () => dispatch(decCtrAct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);