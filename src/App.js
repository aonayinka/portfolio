import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro"
import Skills from "./components/skill/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";
import Passgen from "./components/password gen/passgen";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Passgen/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
