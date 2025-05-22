import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap"

interface Editorial{
    id:number,
    nombre:string,
    pais:string
}
const ListarEditorial:React.FC=()=>{
     const navigate= useNavigate();
    const [mensaje,setMensaje]=useState<Editorial[]>([])
    const listar= async()=>{
        const res=await fetch('http://localhost:1588/editoriales')
        const msj=await res.json()
        console.log(msj)
        setMensaje(msj.mensaje)
    }
    const Eliminar= async(id:number)=>{
        console.log(id)
        const respE= await fetch(`http://localhost:1588/editoriales/${id}`,{
            method:'DELETE'
        })
        const msjE=await respE.json()
        console.log(msjE)
        
    }
    const llevarA=(ids:number)=>{
        navigate('/ActualizarEditorial',{state:{ids:ids}})
    }
    useEffect(()=>{
        listar()
    },[])
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Pais</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mensaje.map((index)=>(
                             <tr>
                                <td>{index.id}</td>
                                <td>{index.nombre}</td>
                                <td>{index.pais}</td>
                                <td><Button onClick={()=>Eliminar(index.id)}>Eliminar</Button></td>
                                <td><Button onClick={()=>llevarA(index.id)}>Actualizar</Button></td>

                            </tr>
                        )
                    )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ListarEditorial;