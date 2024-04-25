import "./App.css";
import Contact from "./Views/Contact/Contact";
import Home from "./Views/Home/Home";
import Projects from "./Views/Projects/Projects";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
      );
}

      export default App;
