import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Guides from "./pages/Guides.jsx";
import GuideCrates from "./pages/GuideCrates.jsx";
import GuideClasses from "./pages/GuideClasses.jsx";
import Content from "./pages/Content.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#050609] text-[#f3f3f0] min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/crates" element={<GuideCrates />} />
            <Route path="/guides/classes" element={<GuideClasses />} />
            <Route path="/content" element={<Content />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
