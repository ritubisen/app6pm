import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./insert";
import Display from "./Display";
import Update from "./Update";
import Search from "./search";
import Myedit from "./Myedit";



const App = () => {
  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="insert" element={<Insert/>} />
            <Route path="display" element={<Display />} />
            <Route path="update" element={<Update />} />
            <Route path="search" element={<Search />} />
            <Route path="myedit/:id" element={<Myedit/>} />
        
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;