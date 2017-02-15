import { GET_SUM } from "../../actions/examples/types";

export default function(state=0, action){
    if(action.type === GET_SUM) return action.num1*1 + action.num2*1;
    else return state;
}