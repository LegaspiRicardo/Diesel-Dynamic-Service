// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";

export default function App() {
  return (
    <Router>
            <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
