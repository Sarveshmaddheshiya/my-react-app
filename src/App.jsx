import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Counter from './anotherComponent.jsx'
import Toggle from './Toggle.jsx'
import User from './User.jsx'
import Props from './Props.jsx'

function App() {

   const  items = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange']

  const [fruit, setFruit] = useState('Apple');
  const [name, setName] = useState(true);

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
      <hr></hr>
      <Counter /> 
         <hr></hr>
      <Toggle />
         <hr></hr>
      <button onClick={()=>setName(!name)}>Change Name</button>
    {
        name?<User/> :null
    }
       <hr></hr>

<Props items={items}/>

    </>
  )
}

export default App;
