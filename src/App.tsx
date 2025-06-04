import "./App.css";
import Contact from "./Views/Contact/Contact";
import Home from "./Views/Home/Home";
import About from "./Views/About/about";
import Projects from "./Views/Projects/Projects";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

      export default App;
