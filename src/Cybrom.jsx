import { useContext } from "react";
import { UserContext } from "./myContext";


const Cybrom=()=>{
    const{user , setUser} =  useContext(UserContext);
    return(
        <>
        
        <h1> welcome to cybrom : {user} </h1>
     <button onClick={()=>{setUser("ritu!")}}>click!</button>
        </>
    )

}

export default Cybrom;