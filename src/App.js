import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro"
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";
import Passgen from "./components/Projects/passgen";
import React from "react";
import Time from "./components/Time/time";
import SearchBar from "./components/SearchBar/SearchBar";
import CvData from "./AyosCV.json"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Time/>
      <Intro/>
      <SearchBar placeholder="Enter a keyword...." data = {CvData}/>
      <Passgen/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
