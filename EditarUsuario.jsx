import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import FormularioUsuario from "../components/FormularioUsuario"

const EditarUsuario = () => {
  const params = useParams()

  const { obtenerUsuario, usuario, cargando } = useAuth()

  useEffect(() => {
      obtenerUsuario(params.id)
  }, [])

    const { nombre } = usuario

    if (cargando) return 'Cargando...'
  return (
    <>
        <h1 className='font-black text-6xl capitalize text-center'>Editando Usuario {nombre}</h1>
        
        <FormularioUsuario />
    </>
  )
}

export default EditarUsuario
