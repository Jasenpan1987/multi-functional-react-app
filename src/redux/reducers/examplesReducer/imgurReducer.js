import { GET_IMGS, GET_IMGS_LOADING } from "../../actions/examples/types";

export default function(state={imgs: [], loading: false}, action){
    switch(action.type){
        case GET_IMGS:
        return { ...state, imgs: action.payload };

        case GET_IMGS_LOADING:
        return { ...state, loading: action.payload };

        default: 
        return state;
    }
}