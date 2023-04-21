import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';


const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    const [ data, setData ] = useState({
        id: "",
        text: "",
        completed: false
    });
    const inputRef = useRef(null);

    const handleAdd = () => {
        const inputText = inputRef.current.value;
        setData((prev) => ({
            ...prev,
            id: uuidv4(),
            text: inputText
        }))     
        inputRef.current.value = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(data));
        setData({
            id: "",
            text: "",
            completed: false
        });
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    placeholder='enter to do' 
                    ref={inputRef} 
                />
                <button onClick={() => handleAdd()}>Add todo</button>
            </div>
        </form>
        <div>
            {todos.map(todo => {
                return(
                    <div key={todo.id}>
                    <input 
                        type='checkbox' 
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo))} 
                    />
                        <h3>{todo.text}</h3>
                        <button onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
                    </div>
                )
            })

            }
        </div>
    </div>
  )
}

export default Todo
