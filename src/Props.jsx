import React from 'react';

function Props({ items })
 {
  // Mapping through items array and creating <h3> elements
  const newArray = items.map(
    (num, index) => {
    return <h3 key={index}>{num}</h3>;
  });

  return (
    <>
      <h1>Passing values from another component using Props</h1>
      {newArray}
    </>
  );
}

export default Props;
