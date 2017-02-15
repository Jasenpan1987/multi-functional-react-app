
import todo from "./todo";

import { ADD_TODO, TOGGLE_TODO } from "../../actions/todos/types";

const defaultTodos = [
    {id: 1, text: "Learn React", completed: false},
    {id: 2, text: "Learn VUE", completed: true},
    {id: 3, text: "Learn Node", completed: true},
];

export default function(state=defaultTodos, action){
    
    switch(action.type){
        case ADD_TODO:
        const newAction = Object.assign({}, action, { nextId: state.length + 1})
        const newTodo = todo(undefined, newAction);
        return [
            ...state,
            {...newTodo}
        ];

        case TOGGLE_TODO:
        return state.map(todo => {
            if(todo.id === action.payload.id){
                return { ...todo, completed: !todo.completed };
            }else{
                return todo;
            }
        });

        default:
        return state;
    }
}