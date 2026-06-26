import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Memberships from "./pages/Memberships";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/memberships" element={<Memberships />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;