import { useNavigate,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


const ActualizarEditorial=()=>{
    const location=useLocation();
    const navigate= useNavigate();
    const [id,setId]=useState<number>(0);
    const [nombre,setNombre]=useState<string>('');
    const [pais,setPais]=useState<string>('');
    const [mensaje,setMensaje]=useState<string>("");

    const {ids}=location.state as {ids:number}

    useEffect(()=>{
        TraerEditorial()
    },[])

    const TraerEditorial=async()=>{
        const respuesta= await fetch(`http://localhost:1588/editoriales/${ids}`)
        const obj=await respuesta.json()
        console.log(obj.mensaje[0].id)
        setId(obj.mensaje[0].id)
        setNombre(obj.mensaje[0].nombre)
        setPais(obj.mensaje[0].pais)
    }
    const Actualizar=async()=>{
        const msj=await fetch(`http://localhost:1588/editoriales/${ids}`,{
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre,pais })
        });
        const mensaje=await msj.json()
        setMensaje(mensaje.mensaje)
        //navigate('/ListarEditorial')
    }
    return(
        <div>
            <label>Id</label>
            <p></p>
            <input type="text" value={id}></input>
            <p></p>
            <label>Nombre</label>
            <p></p>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
            <p></p>
            <label>Pais</label>
            <p></p>
            <input type="text" value={pais} onChange={(e)=>setPais(e.target.value)}></input>
            <p></p>
            <Button onClick={Actualizar}>Actualizar</Button>
            <p>{mensaje}</p>
        </div>
    )
}
export default ActualizarEditorial;