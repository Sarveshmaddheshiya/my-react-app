 function Repeat({data})
 {
    return (
<div style={{ 
  border: "1px solid green", 
  width: "50%", 
  borderRadius: "15px" 
}}>
  <h1>This is Repeated Component !</h1>
  <h3>Id: {data.id}</h3>
  <h3>Name: {data.name}</h3>
  <h3>Age: {data.age}</h3>
  <hr />
</div>


        
    )
 }

    export default Repeat;