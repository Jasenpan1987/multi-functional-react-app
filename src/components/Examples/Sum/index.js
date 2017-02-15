import React, { Component } from "react";
import { connect } from "react-redux";

import { getSumAct } from "../../../redux/actions/examples/sum";

class Sum extends Component {
    constructor(props){
        super(props);

        this.handleCalculate = this.handleCalculate.bind(this);
    }

    handleCalculate(){
        const num1 = this._input1.value,
              num2 = this._input2.value;
        
        return this.props.calculate(num1, num2)
    }

    render(){
        return (
            <div>
                <h2>Sum</h2>
                <input type="text" ref={i => this._input1 = i}/> {" + "} 
                <input type="text" ref={i => this._input2 = i}/> {" = "} 
                { this.props.total }
                <button onClick={this.handleCalculate}>Calculate</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        total: state.examples.sum
    }
}

const mapDispatchToProps = dispatch => {
    return {
        calculate: (num1, num2) => dispatch(getSumAct(num1, num2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sum)