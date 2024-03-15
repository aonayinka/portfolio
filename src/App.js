import Navbar from "./components/NavBar0.1/Navbar";
import React from "react";
import Footer1 from "./components/Footer/Footer1";
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Blog from "./Pages/Blog";
import ContactPage from "./Pages/ContactPage";
import FAQs from "./Pages/FAQs";
import Events from "./Pages/Events";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route Path="/faqs" element={<FAQs/>}/>
        <Route path="/event" element={<Events/>}/>
      </Routes>
      <Footer1/>
    </BrowserRouter>
    
  );
}

export default App;
