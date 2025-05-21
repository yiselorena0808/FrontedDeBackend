import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Barra from "./components/Navbar";
import CrearEditorial from "./Home/CrearEditorial";
import CrearLibro from "./Home/CrearLibro";

function App() {
    return (
        <Router>
            <Barra />
                <Routes>
                    <Route path="/" element={<CrearEditorial></CrearEditorial>} />
                    <Route path="/CrearLibro" element={<CrearLibro></CrearLibro>} />
                </Routes>

        </Router>
    );
}

export default App;

