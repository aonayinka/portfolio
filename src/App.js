import Navbar from "./components/NavBar0.1/Navbar";
import React from "react";
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Blog from "./Pages/Blog";
import ContactPage from "./Pages/ContactPage";
import Events from "./Pages/Events";
import Footer from "./components/Footer/Footer";
import FAQ from "./Pages/FAQ";



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
        <Route path="/event" element={<Events/>}/>
        <Route path="/faqs" element={<FAQ/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
