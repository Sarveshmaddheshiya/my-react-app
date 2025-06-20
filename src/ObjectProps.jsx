function ObjectProps({UserDetails}) {
  return (
    <>
        <h1>Passing Object  from another component using Props</h1>
        <p>{UserDetails.name}</p>
         <p>{UserDetails.age}</p>
          <p>{UserDetails.occupation}</p>
    </>
  )
};

export default ObjectProps;
