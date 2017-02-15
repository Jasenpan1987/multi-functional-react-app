import React, { Component } from "react";
import { connect } from "react-redux";

import Filter from "./Filter";

import { 
    FILTER_ALL, FILTER_HAS_COMP, FILTER_NOT_COMP 
} from "../../redux/actions/todos/types";

import { setFilterAct } from "../../redux/actions/todos";

class FilterList extends Component {
    constructor(props){
        super(props);

        this.setFilterHof = this.setFilterHof.bind(this)
    }

    setFilterHof(filter){
        return (e) => {
            e.preventDefault();
            this.props.setFilter(filter);
        }
    }

    render(){
        return (
            <div>
                <Filter type={FILTER_ALL} 
                    setFilter={this.setFilterHof(FILTER_ALL)}
                >
                    {"All "}
                </Filter>
                <Filter type={FILTER_HAS_COMP} 
                    setFilter={this.setFilterHof(FILTER_HAS_COMP)}
                >
                    {" Completed "}
                </Filter>
                <Filter type={FILTER_NOT_COMP} 
                    setFilter={this.setFilterHof(FILTER_NOT_COMP)}
                >
                    {" Not Completed"}
                </Filter>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFilter: filter => dispatch(setFilterAct(filter))
    }
}

export default connect(null, mapDispatchToProps)(FilterList);