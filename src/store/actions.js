import { ADD_NOTE, REMOVE_NOTE } from "./actionTypes";

export const addNote = (data) => {
    return {
        type: ADD_NOTE,
        payload: data,
    };
};

export const deleteNode = () => {
    return {
        type: REMOVE_NOTE,
        // payload: idx,
    };
};