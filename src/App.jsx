import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Counter from './anotherComponent.jsx'
import Toggle from './Toggle.jsx'
import User from './User.jsx'
import Props from './Props.jsx'
import ObjectProps from './ObjectProps.jsx'
import Wrapper from './Wrapper.jsx'
import DefaultValue from './DefaultValue.jsx'
import ButtonClickProps from './ButtonClickProps.jsx'

import Value from './GetInput.jsx'
import Data from './Form.jsx'

function App() {

   const [student, setStudent] = useState("Vinay")

   const  items = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange']

   let Details={
    name: 'John',
    age: 25,
    occupation: 'Software Developer'
   }

  const [fruit, setFruit] = useState('Apple');
  const [name, setName] = useState(true);

  const change = () => setFruit('Banana');
  const change1 = () => setFruit('Papaya');
  const change2 = () => setFruit('Mango');

  return (
    <>
      {/*<center><h1>React Learning</h1></center>
      
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


<hr/>
<ObjectProps   UserDetails={Details}/>
<hr/>
<Wrapper>
   <p>I am jsx data and passed from another component </p>
</Wrapper>

<hr/>
<DefaultValue name="Sarvesh " />   
<DefaultValue />                
<hr/>
<ButtonClickProps name={student}/>
<button onClick={()=>setStudent("Sarvesh")}>Change Student Name</button>


<Value/>

*/}



<Data/>
    </>
  )
}

export default App;
