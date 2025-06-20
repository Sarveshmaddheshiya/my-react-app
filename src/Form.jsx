
import {useState } from 'react';
function Data()
{


    const [name , setName] = useState("");
    const [ email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
<>
<h1>Controlled Component</h1>
<form Action="" method="POST">   
<label>Name:</label>
<input type="text" placeholder="Enter Your Name" onChange={(event) => setName(event.target.value)} />

<br></br>
<br></br>
<label>Email:</label>
<input type="Email" placeholder="Enter Your Email" onChange={(event)=>setEmail(event.target.value)} />

<br></br>
<br></br>
<label>Email:</label>
<input type="Password" placeholder="Enter Your Password" onChange={(event)=>setpassword(event.target.value)} />


<br></br>
<br></br>
<button>Submit</button>
</form>


<h1>{name}</h1>
<h1>{email}</h1>
<h1>{password}</h1>

</>
    )
}

export default Data;