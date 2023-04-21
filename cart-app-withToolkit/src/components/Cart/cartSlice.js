import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        item: {
            id: "",
            name: "",
            price: 0
        }
    },
    reducers: {
        addItem: (state, action) => {
            if(state.items.length === 0) {
                state.items[0] = action.payload
            } else {
                state.items = [...state.items, action.payload];
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload);
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;