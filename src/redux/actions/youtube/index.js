import { SEARCH } from "./types";
import ytHelper from "../../../libs/youtubeSearchHelper";

export const searchAct = keywords => {
    return (dispatch) => {
        return ytHelper(keywords).then(videos => {
            dispatch({ type: SEARCH, payload: videos });
        })
    };
}