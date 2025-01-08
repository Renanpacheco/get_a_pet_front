import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

/* components */ 
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer";
/* pages */
import Home from "./components/pages/Home";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
