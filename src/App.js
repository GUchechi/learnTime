import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Navbar/Intro/Intro";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
import Testimonials from "./Components/Testimonials/Testimonials";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Works />
      <Testimonials/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
