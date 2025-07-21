import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Layout from "./Layout";
const App=()=>{
    return(
        <>
     <BrowserRouter>

<Routes>

  <Route Path="/" element={<Layout/>}>
  
  <Route index element={<Home/>} />
  <Route path="home" element={<Home/>} />
  <Route path="contact" element={<Contact/>} />
  <Route path="about" element={<About/>} />
  </Route>
</Routes>
     </BrowserRouter>
     
        </>
        
    )
}
export default App; 
