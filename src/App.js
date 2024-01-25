import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro"
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";
// import Passgen from "./components/Projects/passgen";
import React from "react";
// import SearchBar from "./components/SearchBar/SearchBar";
// import CvData from "./AyosCV.json";
import Toknow from "./components/Time/toKnow";
import QuotesGen from "./components/QuotesGen/QuotesGen";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      {/* <SearchBar placeholder="Enter a keyword...." data = {CvData}/> */}
      <Toknow/>
      <QuotesGen/>
      {/* <Passgen/> */}
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
