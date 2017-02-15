import { INC_CTR, DEC_CTR } from "../../actions/examples/types";

export default function(state=0, action){
    switch(action.type){
        case INC_CTR:
        return state + 1;

        case DEC_CTR:
        return state - 1;

        default:
        return state;
    }
}