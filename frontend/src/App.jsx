import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Navbar from "./components/Navbar";

import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import Comunicados from "./pages/Comunicados";
import AdminMensajes from "./pages/AdminMensajes";
import AdminComunicados from "./pages/AdminComunicados";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="container mt-4">

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/comunicados" element={<Comunicados />} />
          <Route path="/admin/mensajes" element={<AdminMensajes />}/>
          <Route path="/admin/comunicados" element={<AdminComunicados />}
/>

        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;