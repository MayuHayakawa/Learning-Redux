import { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, deleteTodo, toggleTodo } from "./actions/actions";
import './App.css'

function App() {
  const inputRef = useRef(null);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const data = {
      id: uuidv4(),
      text: inputRef.current.value,
      completed: false
    };
    console.log(data.id);
    dispatch(addTodo(data));
    inputRef.current.value = "";
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  }

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={handleAdd}>Add</button>
      {
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li className="todo">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <b className={todo.completed ? 'completed-todo' : "" }>{todo.text}</b>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </li>
            </div>
          )
        })
      }

    </div>
  )
}

export default App
