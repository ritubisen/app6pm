import { useParams } from "react-router-dom";
import {useEffect , useState} from "react";
import axios from "axios";

const Myedit = () =>{
    const {id} = useParams();
    const[mydata, setMydata]=useState({});
    const loadData=async()=>{
   let api=`http://localhost:3000/students/${id}`;
   const response = await axios.get(api);
   setMydata(response.data);

    }
    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e. target . value;
        setMydata(values=>({...values,[name]:value}));
        console.log(mydata)
    }
    useEffect(()=>{
loadData();
    },[])

    const handleSubmit=async()=>{
       let api=`http://localhost:3000/students/${id}`;
       const response=await axios.put(api,mydata);
       alert("data updated sucessfully!!!!!!!!!!!")  
    }
    return(
        <>

        <h1>Edit Records : {id}  </h1>
        Edit Rollno :<input type="text" name="rollno" value={mydata.rollno} onChange={handleInput} />
        <br />
        Edit Name :<input type="text" name="name" value={mydata.name} onChange={handleInput} />
        <br />
        Edit City :<input type="text" name="city" value={mydata.city} onChange={handleInput} />
        <br />
        Edit subject :<input type="text" name="subject" value={mydata.subject} onChange={handleInput} />
        <br />
        Edit Salary :<input type="text" name="salary" value={mydata.salary} onChange={handleInput} />
        <br />
        <button onClick={handleSubmit}>save edit</button>
        </>
    )
}
export default Myedit;