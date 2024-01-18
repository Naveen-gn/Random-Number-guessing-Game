import { useState } from 'react';
import './App.css';

const Number=Math.floor(Math.random()*100)+1
function App() {
  const [inputNumber,newinputNumber]=useState("")
  
  let result;
  const handleChange=(e)=>{
    newinputNumber(e.target.value)
  }
  
 if(inputNumber){
  if(Number<inputNumber){
    result="Greater";
  }
  else if(Number>inputNumber){  
    result="Smaller";
  }
  else if(Number==inputNumber){

    result="Correct Answer";
  }
  else {
   
    result="Invalid Input";
  }
 }

  return (
   <div style={{
    height:"100vh",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgb(31, 36, 40)"
   }}>
<div style={{
    height:"50%",
    width:"50%",
    justifyContent:"center",
    color:'white',
    backgroundColor:"rgb(36, 41, 46)",
    borderRadius:'25px',
    border:"2px solid white",
    textAlign:"center"
   }}>
<h4 style={{ marginTop:"80px"}}>Guess The Number Between 1 to 100</h4>
<input type="text" name="" id="" style={{
  marginTop:"50px",
  width:"90%",
  padding:"15px",
  borderRadius:"25px"
  
}} 
onChange={handleChange}
/>
<h4 style={{ marginTop:"40px"}}>Result : {result} </h4>

</div>

   </div>
  );
}
export default App;
