import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        // todo: {
        //     id: "",
        //     text: "",
        //     completed: false
        // },
    },
    reducers: {
        addTodo: (state, action) => {
            if(state.todos.length === 0) {
                state.todos[0] = action.payload;
            } else {
                state.todos = [...state.todos, action.payload];
            }
        },
        toggleTodo: (state, action) => {
            state.todos.map(todo => {
                if(todo.id === action.payload) {
                    return{
                        ...todo, completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;