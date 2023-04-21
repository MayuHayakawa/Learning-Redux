import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [
            {
                id: 1,
                name: "Iphone 1",
                price: 1000
            }
        ]
        // items: [],
        // item: {
        //     id: "",
        //     name: "",
        //     price: 0
        // }
    },
    reducers: {
        addItem: (state, action) => {
            console.log(state.items);
            state.items.push(action.payload);
            // if(state.items.length === 0) {
            //     state.items[0] = action.payload
            // } else {
            //     state.items = [...state.items, action.payload];
            // }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload);
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;