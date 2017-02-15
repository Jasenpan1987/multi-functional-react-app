import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./types";

export const addTodoAct = (todo) => ({ type: ADD_TODO, payload: todo });

export const toggleTodoAct = (todo) => ({ type: TOGGLE_TODO, payload: todo });

export const setFilterAct = (filter) => {
    return { type: SET_FILTER, payload: filter }
}

