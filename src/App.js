import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Navbar/Intro/Intro";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Works />
      <Testimonials/>
    </div>
  );
}

export default App;
