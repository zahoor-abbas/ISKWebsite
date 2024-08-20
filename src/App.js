import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import AboutUS from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUS />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
