import { combineReducers } from "redux";
import todoList from "./todoList";
import filter from "./filter";

const todoReducer = combineReducers({
    todoList,
    filter
});

export default todoReducer;