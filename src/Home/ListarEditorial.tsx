import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap"

const ListarEditorial:React.FC=()=>{
    
    const respuesta = await fetch('http://localhost:1588/editoriales', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        });
    return(
        <div>
            <h1>Listar Editoriales</h1>

        </div>
    )
}
export default ListarEditorial;