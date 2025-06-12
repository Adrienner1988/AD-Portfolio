import "./App.css";
import { lazy, Suspense } from "react";
const Contact = lazy(() => import("./Views/Contact/Contact"));
import Home from "./Views/Home/Home";
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
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-800 to-fuchsia-900">
    </div>}>
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
