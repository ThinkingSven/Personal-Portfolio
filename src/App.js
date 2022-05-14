import "./input.css";
import { motion } from "framer-motion";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
// Components
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
// Pages
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Router>
      
      <div className="App">
        <motion.section
          animate={{
            scale: [0.7, 1],
          }}
          transition={{ duration: 0.5 }}
          >
          <Navbar />

          <Routes>

            <Route exact path="/" element={<MainContent/>}/>
            <Route exact path="/home" element={<MainContent/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
          </Routes>
         <Footer/>
        </motion.section>
      </div>
            </Router>
  );
}

export default App;
