import { GET_IMGS, GET_IMGS_LOADING} from "../types";

import imgurHelper from "../../../../libs/imgurRandomImg";

export const getImgAct = () => {
    return (dispatch) => {
        dispatch({ type: GET_IMGS_LOADING, payload: true });
        
        imgurHelper().then(imgs => {
            dispatch({ type: GET_IMGS, payload: imgs});
            dispatch({ type: GET_IMGS_LOADING, payload: false });
        });
    }
}

export const imgLoadingAct = loading => ({ type: GET_IMGS_LOADING, payload: loading });