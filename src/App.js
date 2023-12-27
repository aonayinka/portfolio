import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro"
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";
import Passgen from "./components/Projects/passgen";
import React from "react";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Passgen/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
