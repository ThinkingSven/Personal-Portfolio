import "./input.css"
import {motion} from "framer-motion"
// Components
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
   
       <motion.section
           animate={{
            scale: [0.7, 1],
            
          }}
          transition={{ duration: 0.5 }}
          >
      <Navbar/>
      <MainContent/>
      <Footer/>
   </motion.section>
    </div>
  );
}

export default App;
