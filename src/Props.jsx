import React from 'react';

// function Props({ items })
function Props({intro})
 {
  // Mapping through items array and creating <h3> elements
//   const newArray = items.map(
//     (num, index) => {
//     return <h3 key={index}>{num}</h3>;
//   });

  return (
    <>
      <h1>Passing values from another component using Props</h1>
      {/* {newArray} */}
      <h2>{intro.name}</h2>
      <h2>{intro.age}</h2>
      <h2>{intro.occupation}</h2>

    </>
  );
}

export default Props;
