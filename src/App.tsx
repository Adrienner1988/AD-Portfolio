import "./App.css";
import Contact from "./Views/Contact/Contact";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Projects from "./Views/Projects/Projects";
import Nav from "./Components/Nav";
import Layout from "./Components/Layout";
import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Nav />
      <AnimatePresence mode="wait">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </AnimatePresence>
    </>
  );
}

      export default App;
