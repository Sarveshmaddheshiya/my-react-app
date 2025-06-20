import React, { useState } from 'react';

function Value() {
  const [val, setVal] = useState("");

  return (
    <>
      <label>Name:</label>
      <input
        type="text"
        placeholder="Enter Name"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <h1>{val}</h1>
 
      <button onClick={()=>setVal("")}>Clear</button>
    </>
  );
}

export default Value;
