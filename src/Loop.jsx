function Loop() {
    const userData = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 22 }
    ];

    return (
        <div>
            <h1>Loop in JSX</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Loop;
