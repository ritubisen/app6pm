import { useRef, useState,useEffect } from "react";
const App=()=>{
  const [txtval ,setTxtval] =useState("")
 const myref = useRef(0);
 
useEffect(()=>{
  myref.current=myref.current+1;
})
  return (
    <>
   Enter name : <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
   <h1>My render Count : {myref.current}</h1>
    
    </>
  );
};
export default App;