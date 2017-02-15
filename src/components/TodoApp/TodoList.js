import React, { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";
import { toggleTodoAct } from "../../redux/actions/todos";

import { 
    FILTER_HAS_COMP, FILTER_NOT_COMP 
} from "../../redux/actions/todos/types";

class TodoList extends Component {
    render(){
        return (
            <div>
                { this.props.todos.map(todo => {
                    return (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo}
                            toggleTodo={ this.props.toggleTodo.bind(undefined, todo) }
                        />
                    )
                }) }
            </div>
        )
    }
}

const getShownTodos = (todos, filter) => {
    switch(filter){
        case FILTER_NOT_COMP:
        return todos.filter(todo => !todo.completed);

        case FILTER_HAS_COMP:
        return todos.filter(todo => todo.completed)

        default:
        return todos;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getShownTodos(state.todos.todoList, state.todos.filter)
    }
}



const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (todo) => dispatch(toggleTodoAct(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);