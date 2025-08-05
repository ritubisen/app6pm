import axios from "axios";
import { useState, useEffect } from "react";
const Display = () => {
    const [mydata, setMydata] = useState([]);
    const loadData = async () => {
        let api = "http://localhost:3000/students";
        const Response = await axios.get(api);
        console.log(Response)
        setMydata(Response.data);
    }

    useEffect(() => {
        loadData();
    }, [])

    const ans = mydata.map((key) => {
        return (
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
export default Display;