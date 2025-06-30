function College({ Data }) {
  return (
    <>
      <h1>{Data.name}</h1>
      <ul>
        <li>City: {Data.city}</li>
        <li>Website: {Data.website}</li>
      </ul>

      <h4>Student Data</h4>
      <ul>
        {Data.students.map((student, index) => (
          <li key={index}>
            <ul>
              <li>Name: {student.name}</li>
              <li>Age: {student.age}</li>
              <li>Address: {student.address}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default College;
