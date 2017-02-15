import { combineReducers } from "redux";

import counter from "./counterReducer";
import sum from "./sumReducer";
import imgur from "./imgurReducer";

export default combineReducers({
    counter, sum, imgur
});