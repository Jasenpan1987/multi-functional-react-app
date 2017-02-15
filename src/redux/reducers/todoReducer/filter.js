import { SET_FILTER } from "../../actions/todos/types";
import { FILTER_ALL, FILTER_HAS_COMP, FILTER_NOT_COMP } from "../../actions/todos/types"


export default function(state=FILTER_ALL, action){
    if(action.type===SET_FILTER){
        switch(action.payload){
            case FILTER_ALL:
            return FILTER_ALL;

            case FILTER_HAS_COMP:
            return FILTER_HAS_COMP;

            case FILTER_NOT_COMP:
            return FILTER_NOT_COMP;
            
            default:
            return FILTER_ALL;
        }
    }else{
        return state;
    }
}