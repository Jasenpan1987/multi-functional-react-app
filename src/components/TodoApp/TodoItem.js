import React from "react";

const TodoItem = ({ todo, toggleTodo }) => {
    const renderInner = () => {
        return <p>({todo.id}) {todo.text} { todo.completed ? " (Compeleted)" : null }</p>
    }
    return (
        <div 
            style={{border: "1px solid black", marginTop: "3px"}}
            onClick={() => toggleTodo()}
        >
            { todo.completed ? <del>{renderInner()}</del> :  renderInner() }
        </div>
    )
}

export default TodoItem;