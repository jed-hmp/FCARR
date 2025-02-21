import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navigationbar';
import Home from './Pages/Home/Home';
import Events from './Pages/Events/Events';
import Gallery from './Pages/Gallery/Gallery';
import AboutUs from './Pages/AboutUs/AboutUs';
import TeacherStaffs from "./Pages/AboutUs/TeacherStaffs";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/teacherstaffs" element={<TeacherStaffs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
