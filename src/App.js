import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navigationbar';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import TeacherStaffs from "./Pages/AboutUs/TeacherStaffs";
import Admissions from "./Pages/Admissions/Admissions";
import Activities from "./Pages/Activities/sActivities";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/teacherstaffs" element={<TeacherStaffs />} />
      
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/sActivities" element={<Activities />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
