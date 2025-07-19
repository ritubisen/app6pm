
const Header=(props)=>{
    return(
        <>
        <h1>student name : {props.nm}   </h1>
        <h1>class : {props.cls}   </h1>
        <h1>total fees : {props.fs}   </h1>
        <h1>roll number : {props.no}   </h1>
       
        </>
    )
}
export default Header;