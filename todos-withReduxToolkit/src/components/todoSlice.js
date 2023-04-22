import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            {
                id: "",
                text: "",
                completed: false
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            // if(state.todos.length === 0) {
            //     state.todos[0] = action.payload;
            // } else {
            //     state.todos = [...state.todos, action.payload];
            // }
        },
        toggleTodo: (state, action) => {
            const newTodos = state.todos.map(todo => {
                // console.log(state.todos)
                // console.log(todo.id)
                // console.log(action.payload)
                if(todo.id === action.payload.id) {
                    // console.log(todo.completed);
                    // console.log(!todo.completed);
                    return{
                        ...todo, 
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })
            state.todos = newTodos;
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload.id)
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;