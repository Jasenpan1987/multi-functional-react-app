import React, { Component} from "react";
import { connect } from "react-redux";

import { addTodoAct } from "../../redux/actions/todos";

class TodoInput extends Component {
    constructor(props){
        super(props);

        this.addTodoHandler = this.addTodoHandler.bind(this);
    }

    addTodoHandler(e){
        e.preventDefault();
        this.props.addTodo({text: e.target.todotext.value});
        e.target.todotext.value = "";
    }

    render(){
        return (
            <form onSubmit={this.addTodoHandler}>
                <input type="text" name="todotext"/>
                <input type="submit" value="Add New Todo"/>
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch(addTodoAct(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);