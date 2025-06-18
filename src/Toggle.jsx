import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Toggle Button to Hide and Show</h1>
       <button onClick={() => setShow(!show)}>Login/Logout</button>
      { show ? <h1>Logged In</h1> : <h1>Logged Out </h1> }
     
    </>
  );
}

export default Toggle;
