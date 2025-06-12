import "./App.css";
import { lazy, Suspense } from "react";
const Contact = lazy(() => import("./Views/Contact/Contact"));
const Home = lazy(() => import("./Views/Home/Home"));
const About = lazy(() => import("./Views/About/About"));
const Projects = lazy(() => import("./Views/Projects/Projects"));
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
        <Suspense fallback={<div className="text-center text-white mt-10">Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Suspense>
      </AnimatePresence>
    </>
  );
}

      export default App;
