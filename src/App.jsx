import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask,taskDelete,taskComplete,taskInComplete } from "./TodoSlice";

const App=()=>{
const[txtval,setTxtval]=useState("")
const mytask=useSelector(state=>state.mytodo.task)
const dispatch=useDispatch();
console.log(mytask)
let sno=0
const ans =mytask.map((key)=>{
  sno++;
  return(
    <>
    <tr>
<td>{sno}</td>
<td>
  {key.status?(<>
  <span style={{color:'red',textDecoration:'line-through'}}> {key.work}</span></>):(<>{key.work}
  </>)}
</td>
  <td>
    <button onClick={()=>{dispatch(taskDelete({id:key.id}))}}>Delete</button>
  </td>
  <td><button onClick={()=>{dispatch(taskComplete({id:key.id}))}}>Complete </button></td>
  <td><button onClick={()=>{dispatch(taskInComplete({id:key.id}))}}>Incomplete</button></td>
    </tr>
    </>
  )
})
  return(
    <>
    <h1>To Do App</h1>
    <hr/>
    Enter Your task: <input type="text"  value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
    <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txtval,status:false}))}}>Add</button>
    <table>
      <thead>
        <tr>
          <th>sno</th>
          <th>your task</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </table>
    </>
  )
}
export default App;