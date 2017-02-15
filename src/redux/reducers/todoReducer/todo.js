import { ADD_TODO } from "../../actions/todos/types";

export default function(state={id: 0, text: "", completed: false}, action){
    switch(action.type){
        case ADD_TODO:
        return {
            id: action.nextId,
            text: action.payload.text,
            completed: false
        }

        default: return state;
    }
}