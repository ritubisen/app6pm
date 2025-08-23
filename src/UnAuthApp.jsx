import { useState, useContext } from "react";
import { MyLoginContext } from "./LoginContext";

const UnAuthApp = () => {
  const [txtVal, setTxtVal] = useState("");
  const { login } = useContext(MyLoginContext);

  return (
    <div>
      <h3>Enter name:</h3>
      <input 
        type="text" 
        value={txtVal} 
        onChange={(e) => setTxtVal(e.target.value)} 
      />
      <button onClick={() => login(txtVal)}>Login</button>
    </div>
  );
};

export default UnAuthApp;