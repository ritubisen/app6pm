
import{useState} from "react";

const App=()=>{
const[color , setColor]=useState("red");
  
    return(
        <>

<h1 style={{color:color}}>my favriote color is : </h1>
<button onClick={()=>{setColor("green")}}>green</button>
<button onClick={()=>{setColor("brown")}}>brown</button>
<button onClick={()=>{setColor("yellow")}}>yellow</button>
<button onClick={()=>{setColor("blue")}}>blue</button>
<button onClick={()=>{setColor("pink")}}>pink</button>

        </>
        
    )
}
export default App; 
