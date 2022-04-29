import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./styles/app.css"


function App() {
  return ( 
  <BrowserRouter >

      <Header />
  
    
     <Routes>
     <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/projects" element={<Projects/>} />
       <Route path="/contact" element={<Contact/>} />

     </Routes>
<br/>
    <Footer/> 
  


   </BrowserRouter>  );
}

export default App;
