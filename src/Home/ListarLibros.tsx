import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
interface Libros{
    id:number,
    titulo:string,
    autor:string,
    anio_publicacion:string,
    editorial_id:number
}

const ListarLibros:React.FC=()=>{
    const [mensaje,setMensaje]=useState<Libros[]>([]);

    const ListarLibros= async()=>{
        const res=await fetch('http://localhost:1588/libros')
        const msj=await res.json()
        console.log(msj)
        setMensaje(msj.mensaje)
    }
    const EliminarLibro= async(id:number)=>{
        console.log(id)
        const resEl= await fetch(`http://localhost:1588/libros/${id}`,{
            method:'DELETE'
        })
        const msjEl= await resEl.json()
        console.log(msjEl)
    }
    useEffect(()=>{
        ListarLibros()
    },[])
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>titulo</th>
                        <th>autor</th>
                        <th>año de publicacion</th>
                        <th>editorial id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mensaje.map((index)=>(
                             <tr>
                                <td>{index.id}</td>
                                <td>{index.titulo}</td>
                                <td>{index.autor}</td>
                                <td>{index.anio_publicacion}</td>
                                <td>{index.editorial_id}</td>
                                <td><Button onClick={()=>EliminarLibro(index.id)}>Eliminar Libro</Button></td>
                                <td><Button onClick={()=>{}}>Actualizar</Button></td>
                            </tr>
                        )
                    )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ListarLibros;