import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Barra from "./components/Navbar";
import CrearEditorial from "./Home/CrearEditorial";
import ListarEditorial from "./Home/ListarEditorial";
import CrearLibro from "./Home/CrearLibro";
import ListarLibros from "./Home/ListarLibros";
import ActualizarEditorial from "./Home/ActualizarEditorial";

function App() {
    return (
        <Router>
            <Barra />
                <Routes>
                    <Route path="/" element={<CrearEditorial></CrearEditorial>} />
                    <Route path="/CrearLibro" element={<CrearLibro></CrearLibro>} />
                    <Route path="/ListarEditorial" element={<ListarEditorial></ListarEditorial>} />
                    <Route path="/ListarLibros" element={<ListarLibros></ListarLibros>} />
                    <Route path="/ActualizarEditorial" element={<ActualizarEditorial></ActualizarEditorial>} />
                </Routes>

        </Router>
    );
}

export default App;

