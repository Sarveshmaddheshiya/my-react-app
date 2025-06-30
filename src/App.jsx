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
import Check from './HandleCheckbox.jsx'
import Table from './Table.jsx'
import Loop from './Loop.jsx'
import ReuseComponent from './Reuse-component.jsx'
import Clock from './Clock.jsx';
import College from './College.jsx';


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

  const[color,setColor]=useState('orange');

   // nested loop data 

 const collegeData = [
  {
    name: "NIIT",
    city: "Gorakhpur",
    website: "www.niit.com",
    students: [
      { name: "Aman Singh", age: 20, address: "Rajendra Nagar, Gorakhpur" },
      { name: "Priya Verma", age: 19, address: "Civil Lines, Gorakhpur" },
      { name: "Ravi Yadav", age: 21, address: "Basharatpur, Gorakhpur" }
    ]
  },
  {
    name: "ABC Institute",
    city: "Lucknow",
    website: "www.abcinstitute.com",
    students: [
      { name: "Anjali Sharma", age: 20, address: "Hazratganj, Lucknow" },
      { name: "Vikram Chauhan", age: 22, address: "Gomti Nagar, Lucknow" },
      { name: "Nisha Khan", age: 21, address: "Alambagh, Lucknow" }
    ]
  },
  {
    name: "XYZ College",
    city: "Kanpur",
    website: "www.xyzcollege.com",
    students: [
      { name: "Deepak Jaiswal", age: 23, address: "Kidwai Nagar, Kanpur" },
      { name: "Sneha Tiwari", age: 20, address: "Swaroop Nagar, Kanpur" },
      { name: "Arjun Patel", age: 22, address: "Kalyanpur, Kanpur" }
    ]
  },
  {
    name: "Sunrise University",
    city: "Varanasi",
    website: "www.sunriseuniversity.com",
    students: [
      { name: "Megha Singh", age: 21, address: "BHU Campus, Varanasi" },
      { name: "Saurabh Gupta", age: 20, address: "Lanka, Varanasi" },
      { name: "Kajal Mishra", age: 22, address: "Sigra, Varanasi" }
    ]
  },
  {
    name: "Techno World College",
    city: "Allahabad",
    website: "www.technoworld.edu",
    students: [
      { name: "Rahul Pandey", age: 19, address: "Civil Lines, Allahabad" },
      { name: "Pooja Singh", age: 21, address: "Kareli, Allahabad" },
      { name: "Manish Kumar", age: 22, address: "Jhunsi, Allahabad" }
    ]
  }
];


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
<hr/>
<Check/>
<hr/>
<Table/>

<hr/>
<Loop/>
<hr/>
<ReuseComponent/>
<hr/>

<select onChange={(event)=>setColor(event.target.value)}>
   <option>----Select Colors----</option>
   <option value={"red"}>Red</option>
   <option value={"blue"}>Blue</option>
   <option value={"aqua"}>Aqua</option>
    <option value={"green"}>Green</option>
</select>
<Clock color={color}/>
<hr/>
<h1>Nested Looping </h1>
{
   collegeData.map((college,index)=>(
      <div key={index}>
      {/* <h3>College Name: {college.name}</h3>
       <h3>College city: {college.city}</h3>
        <h3>College website: {college.website}</h3>
        <hr/> */}
        <College Data={college}/>
      </div>
   ))
   
}
<hr/>


</>
   
  )
}

export default App;
