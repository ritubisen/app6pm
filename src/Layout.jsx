import {Link , Outlet } from "react-router-dom"


const Layout=()=>{

    return(

        <>
        <Link to ="Home">home</Link> |
        <Link to ="Contact">contact</Link> |
        <Link to ="Home">About</Link> |
       
       <hr  size="3" color="red"/>

<Outlet/>

       <hr  size="3" color="red"/>

www.mycompany.com 
        </>
    )
}

export default Layout;