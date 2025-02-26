import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navigationbar';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import TeacherStaffs from "./Pages/AboutUs/TeacherStaffs";
import Admissions from "./Pages/Admissions/Admissions";
import Activities from "./Pages/Activities/sActivities";
import Recollection from "./Pages/Activities/Recollection";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Admin from "./Pages/Admin/Admin";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/teacherstaffs" element={<TeacherStaffs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/sActivities" element={<Activities />} />
          <Route path="/recollection" element={<Recollection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
