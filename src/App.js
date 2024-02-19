import { useState, useEffect } from 'react'
import './App.css';


const App = () => {

  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    alert(`Counter: ${counter}`)
  }, [counter])

  return (
    <div className="App">
      <button onClick = {modifyValueByChange(-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick = {modifyValueByChange(1)}>+</button>

    </div>
  );

  function modifyValueByChange(change) {
    return () => (setCounter(counter + change));
  }
}

export default App;
