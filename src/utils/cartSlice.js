import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items: [],
    },
    reducers : {   //addItem,removeITEM,clearItem are all actions
        addItems: (state,action) => {        //reducer function with the name addItem
            //mutating(directly modifying the state ) the state here
            state.items.push(action.payload);
        },
        removeItems: (state) => {           // reducer function with the name removeITEM
            state.items.pop();
        },
        clearItems: (state) =>               // reducer function with the name clearItem
        {
            state.items.length = 0;
        },
    },
});

export default cartSlice.reducer;
export const {addItems, removeItems, clearItems} = cartSlice.actions;