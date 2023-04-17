import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
