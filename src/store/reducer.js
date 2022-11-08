import { createSlice } from "@reduxjs/toolkit";
// import { deleteNode } from "./actions";
const initialState = [];
const Slice = createSlice({
  name: "counterReducer",
  initialState,
  reducers: {
    addNote: (state, actions) => {
        return [...state.concat(actions.payload)]
    },
    deleteNode : (state, actions) => {
        const prevState = [...state];
        prevState.pop()
        return [...prevState]
        // return [state.filter(actions.payload)]
    }
  },
});
export const { addNote, deleteNode } = Slice.actions;
export default Slice.reducer;
