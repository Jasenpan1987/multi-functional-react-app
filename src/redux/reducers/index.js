import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import todoReducer from "./todoReducer";
import youtubeReducer from "./youtubeReducer/";

import examplesReducer from "./examplesReducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    youtube: youtubeReducer,
    examples: examplesReducer,
    routing: routerReducer
});

export default rootReducer;