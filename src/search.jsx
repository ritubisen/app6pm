
import axios from "axios";
import { useState  } from "react";



const Search=()=>{
    const[rno , setRno] = useState("");
    const[mydata , setMydata] = useState([]);
    const handleSubmit=async()=>{
        let api =`http://localhost:3000/students/?rollno=${rno}`;
        const response = await axios (api);
        console.log(response.data);
        setMydata(response.data);
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.subject}</td>
                <td>{key.salary}</td>
            </tr>
            
            </>
        )
    })
    return(
        <>
        
        <h1>my searching page</h1>
        Enter Rollno : <input type="text"  value={rno} onChange={(e)=>{setRno(e.target.value)}}/>    
        <button onClick={handleSubmit}>Search</button>   
        <hr />


        <table width="600" border="1">
<tr>
    <th>rollno</th>
    <th>name</th>
    <th>city</th>
    <th>subject</th>
    <th>saalry</th>
</tr>
{ans}
        </table>
        </>
    )
}
export default Search;