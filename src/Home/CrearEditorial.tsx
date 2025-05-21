import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Form, Col, Alert } from "react-bootstrap";

const CrearEditorial: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [pais, setPais] = useState<string>('');
    const [mensaje, setMensaje] = useState<string>('');

    const GuardarEditorial = async (e: React.FormEvent) => {
        e.preventDefault(); 
        const respuesta = await fetch('http://localhost:1588/editoriales', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre: nombre, pais: pais })
        });
        const msj = await respuesta.json();
        setMensaje(msj.mensaje);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center text-center min-vh-100"> {/* Centrado vertical y horizontal */}
            <div style={{ 
                width: '800px', 
                alignItems:'center',
                maxWidth: '900px', 
                padding: '10px', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(236, 27, 27, 0.1)', 
                backgroundColor: '#f8f9fa'
            }}>
                <Form onSubmit={GuardarEditorial}>
                    <h1 className="text-center mb-4">Crear Editorial</h1>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                onChange={(e) => setNombre(e.target.value)}
                                type="text"
                                placeholder="Ingrese un nombre"
                                required
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Label>País:</Form.Label>
                            <Form.Control
                                onChange={(e) => setPais(e.target.value)}
                                type="text"
                                placeholder="Ingrese un país"
                                required
                            />
                        </Col>
                    </Row>
                    <div className="text-center">
                        <Button 
                            variant="primary" 
                            type="submit"
                            className="px-4 py-2"
                        >
                            Crear Editorial
                        </Button>
                    </div>
                </Form>
                {mensaje && (
                    <Alert variant="info" className="mt-3 text-center">
                        {mensaje}
                    </Alert>
                )}
            </div>
        </Container>
    );
};

export default CrearEditorial;