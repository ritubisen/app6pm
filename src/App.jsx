import { useReducer} from "react";

const App=()=>{

  const colorMethod=(state,action)=>{
    switch(action) {
      case "red":
        return state="red";

      case "blue":
        return state="blue";

          case "green":
        return state="green";

          case "brown":
        return state="brown";

      default :
        return state;

    }
  }

  const [color, dispatch]= useReducer(colorMethod,"black");

  return (
    <>
    

      <button onClick={()=>{dispatch("red")}}> red </button>
      <button onClick={()=>{dispatch("blue")}}> blue </button>
      <button onClick={()=>{dispatch("green")}}> green </button>
      <button onClick={()=>{dispatch("brown")}}> brown </button>
      <button onClick={()=>{dispatch("yello")}}> yellow</button>
     
       <div style={{ backgroundColor:color , width:300, height:300 }}>

      </div>
     
    </>
  );
};
export default App;