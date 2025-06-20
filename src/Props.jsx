import React from 'react';

function Props({ items }) {
  const newArray = items.map((num, index) => {
    return <h3 key={index}>{num}</h3>;
  });

  return (
    <>
      <h1>Passing Array  from another component using Props</h1>
      {newArray}
    </>
  );
}

export default Props;
