import React from 'react';
import Repeat from './Repeat.jsx';

function ReuseComponent()
 {
  const userData = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 22 }
    ];
    return (
        <div>
            <h1>Reuse of Component</h1>
            {userData.map(user => (
                <div key={user.id}>
                    <Repeat data={user}/>
                </div>
            ))}
        </div>
    );
}

export default  ReuseComponent;