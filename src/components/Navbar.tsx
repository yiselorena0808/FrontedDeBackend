import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Barra: React.FC = () => {
    return (
        <Navbar variant="dark" expand="lg" className="bg-dark" bg="dark" fixed="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Biblioteca</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"> 
                        <Nav.Link as={Link} to="/">Crear Editorial</Nav.Link>
                        <Nav.Link as={Link} to="/CrearLibro">Crear Libro</Nav.Link>
                        <Nav.Link as={Link} to="/ListarEditorial">Listar Editorial</Nav.Link>
                         <Nav.Link as={Link} to="/ListarLibros">Listar Libros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Barra;
