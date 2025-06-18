import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Counter from './anotherComponent.jsx'
import Toggle from './Toggle.jsx'

function App() {
  const [fruit, setFruit] = useState('Apple');

  const change = () => setFruit('Banana');
  const change1 = () => setFruit('Papaya');
  const change2 = () => setFruit('Mango');

  return (
    <>
      <center><h1>React Learning</h1></center>
      
      <h1>{fruit}</h1>
      <button onClick={change}>Change Fruit Name 0</button>
      <button onClick={change1}>Change Fruit Name 1</button>
      <button onClick={change2}>Change Fruit Name 2</button>
      
      <Counter /> 
      <Toggle />
    </>
  )
}

export default App;
