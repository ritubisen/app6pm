import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let   name = e.target.name;
    let value = e. target.value;
    setInput(values=>({ ...values, [name]: value }));
    console.log(input);
  };
  const handleSubmit=async()=> {
    let api = "http://localhost:3000/students";
    const response = await axios.post(api, input);
    console.log(response);
    alert("Data saved successfully");
  };

  return (
    
    <>
     <div>
      <div>
      <h1> Insert page</h1>
      <label >Enter Roll No:</label>
      <input type="text" name="rollno" onChange={handleInput} /> <br />
      <label >Enter Name:</label>
       <input type="text" name="name" onChange={handleInput} /> <br /> 
        <label>Enter City:</label>
       <input type="text" name="city" onChange={handleInput}  /> <br /> 
       <label>Enter Subject:</label>
       <input type="text" name="subject" onChange={handleInput}  /> <br /> 
       <label >Enter Salary:</label>
       <input type="text" name="salary" onChange={handleInput} /> <br /> 
      <button onClick={handleSubmit}>Save!!</button>
      </div>
      </div>
    </>
  );
};
export default Insert;