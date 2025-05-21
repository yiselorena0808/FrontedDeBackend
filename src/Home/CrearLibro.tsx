import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Row,Form,Col,Alert } from "react-bootstrap";

const CrearLibro=()=>{
    const [titulo,setTitulo]=useState<string>('');
    const [autor,setAutor]=useState<string>('');
    const [anio_publicacion,setAnio_publicacion]=useState<number>(0);
    const [editorial_id,setEditorial_id]=useState<number>(0);
    const [mensaje,setMensaje]=useState<string>('');

    const GuardarLibro=async(e:React.FormEvent)=>{
        e.preventDefault();
    const respuesta= await fetch('http://localhost:1588/libros',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({titulo:titulo,autor:autor,anio_publicacion:anio_publicacion,editorial_id:editorial_id})
    })
    const msj= await respuesta.json()
    setMensaje(msj.mensaje)
    console.log(msj.mensaje)
    
}
    return(
         <Container className="d-flex justify-content-center align-items-center text-center m-4">
            <div style={{ 
                width: '800px', 
                alignItems:'center',
                maxWidth: '900px', 
                padding: '10px', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(236, 27, 27, 0.1)', 
                backgroundColor: '#f8f9fa' 
            }}>
                <Form>
                <h1>Crear Libro</h1>
                <Row>
                    <Col>
                        <Form.Label>Titulo:</Form.Label>
                        <Form.Control
                        onChange={(e)=>setTitulo(e.target.value)}
                            type="text"
                            placeholder="ingrese el titulo del libro "
                        />
                    </Col>
                    <Col>
                        <Form.Label>Autor:</Form.Label>
                        <Form.Control
                        onChange={(e)=>setAutor(e.target.value)}
                            type="text"
                            placeholder="ingrese el nombre del autor"
                        />
                    </Col>
                    <Col>
                        <Form.Label>año publicacion:</Form.Label>
                        <Form.Control
                        onChange={(e)=>setAnio_publicacion(parseInt(e.target.value))}
                            type="number"
                            placeholder="ingrese el año de publicacion del libro"
                        />
                    </Col>
                    <Col>
                        <Form.Label>editorial id:</Form.Label>
                        <Form.Control
                        onChange={(e)=>setEditorial_id(parseInt(e.target.value))}
                            type="number"
                            placeholder="ingrese el id de la editorial del libro"
                        />
                    </Col>
                </Row>
                <Button
                className="m-5"
                onClick={GuardarLibro}
                    variant="primary"
                    type="submit"
                >
                    Crear Libro
                </Button>
            </Form>
            {mensaje && (
                    <Alert variant="info" className="mt-3 text-center">
                        {mensaje}
                    </Alert>
                )}
            </div>
        </Container>
    )
}
export default CrearLibro;