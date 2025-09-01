import { useSelector, useDispatch } from "react-redux";
import { colorChange } from "./ColorSlice";
import { useState } from "react";

const App = () => {
  const bgcolor = useSelector((state) => state.mycolor.color);
  const dispatch = useDispatch();
  const [txtval,settxtval]=useState("");

  return (
    <> 
      <h1>Welcome!</h1>
      Enter Color  : <input type="text" onChange={(e=>{settxtval(e.target.value)})} />
      <button onClick={() => dispatch(colorChange(txtval))}>Click here!</button>
      <div
        style={{
          width: "500px",
          height: "200px",
          backgroundColor: bgcolor,
        }}
      ></div>
    </>
  );
};

export default App;
