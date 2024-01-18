import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState : [],
    reducers: {
        add(state, action){
            // redux says we cant mutate our current state, but here we are doing the same.
            // return [...state, action.payload]
            // toolkit allows it in createslice & it takes care of it internally.
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter((item) =>  item.id !== action.payload)
        }
    }
});

//createSlice will create action and reducer both we need to pass only function names.
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;