import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';


const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    const inputRef = useRef(null);

    const handleAdd = () => {
        let todo = {
            id: uuidv4(),
            text: inputRef.current.value,
            completed: false
        }
        dispatch(addTodo(todo));
        inputRef.current.value = "";
    }

  return (
    <div>
        <div>
            <input type="text" placeholder='enter to do' ref={inputRef} />
            <button onClick={() => handleAdd()}>Add todo</button>
        </div>
        <div>
            {todos.map(todo => {
                console.log(todo);
                return(
                    <div key={todo.id}>
                        <input 
                            type='checkbox' 
                            checked={todo.completed} 
                            onChange={() => dispatch(toggleTodo(todo.id))} 
                        />
                        <h3>{todo.text}</h3>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </div>
                )
            })

            }
        </div>
    </div>
  )
}

export default Todo
