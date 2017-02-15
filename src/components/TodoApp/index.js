import React from "react";

import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import FilterList from "./Filterlist";

const TodoApp = (props) => {
    return (
        <div>
            <h2>Todo App</h2>
            <TodoInput />
            <hr/>
            <TodoList />
            <hr/>
            <FilterList />
        </div>
    )
}

export default TodoApp;