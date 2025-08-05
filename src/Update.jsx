import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();
    const loadData = async () => {
        let api = "http://localhost:3000/students";
        const Response = await axios.get(api);
        console.log(Response)
        setMydata(Response.data);
    }

    useEffect(() => {
        loadData();
    }, [])
     const myDel=async(id)=>{
        let api=`http://localhost:3000/students/${id}`
        const response = await axios.delete(api);
        console.log(response);
        alert("record deleted!!!!!!!!!!!!!!!")
        loadData();
     }
     const myEdit=(id)=>{
        navigate(`/Myedit/${id}`)
     }

    const ans = mydata.map((key) => {
        return (
            <>
                <tr>

                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.subject}</td>
                    <td>{key.salary}</td>
                    <td>
                        <button onClick={()=>{myDel(key.id)}}>delete</button>
                       
                    </td>
                    <td>
                         <button  onClick={()=>{myEdit(key.id)}}>edit</button>
                    </td>
                </tr>

            </>
        )
    })
    return (
        <>
            <h1>welcome to Display page</h1>
            <table border="1" width="700">
                <thead>
                    <tr>
                        <th>rollno</th>
                        <th>name</th>
                        <th>city</th>
                        <th>subject</th>
                        <th>salary</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>

            </table>

        </>
    )
}
export default Update;