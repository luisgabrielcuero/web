import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import useConvocatorias from "../hooks/useConvocatorias"
import ModalFormularioPostulacion from "../components/ModalFormularioPostulacion"
import useAuth from "../hooks/useAuth"
import Postulado from "../components/Postulado"

const Convocatoria = () => {
    const { auth } = useAuth()
    const params = useParams()

    const { obtenerConvocatoria, convocatoria, cargando, handleModalPostulacion } = useConvocatorias()
    const [modal, setModal] = useState(false)
    
    useEffect(() =>{
        obtenerConvocatoria(params.id)
    }, [])
    const { titulo } = convocatoria
    //console.log(convocatoria)
    if (cargando) return 'cargando...'
  return (
    <>
        <div className='flex justify-between gap-2'>
            <h1 className='font-black text-2xl'>{titulo}</h1>

            {auth.rol === 'admin'? 
              <div className='flex items-center text-gray-400 hover:text-black '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
                <Link
                  to={`/convocatorias/editar/${params.id}`} 
                  className='uppercase font-bold'
                  >editar
                </Link>
              </div>
            : auth.rol === 'instructor'? 
            <div className='flex items-center text-black'>
              <h1 className='font-black text-4xl'> Postulados a la convocatoria</h1>
            </div>
            : auth.rol === 'psicologo'? 
            <div className='flex items-center text-black '>
              <h1 className='font-black text-4xl'>Postulados a la convocatoria</h1>
            </div>
            : 
              <button 
              onClick={handleModalPostulacion}
              type='button'
              className='text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase
              font-bold bg-green-600 text-white text-center mt-5 flex gap-2 items-center justify-center'
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
              </svg>
              Postularse
            </button>
            }
        </div>
        <h1 className="font-black text-3xl capitalize text-center mt-10">POSTULADOS A LA CONVOCATORIA</h1>

        <div className="bg-white shadow mt-10 rounded-lg">
          {convocatoria.postulados?.length ? 
        convocatoria.postulados?.map( postulado =>(
          <Postulado
            key={postulado._id}
            postulado={postulado}
          />
        )) : 
         <p className="text-center my-5 p-10">No hay Postulados en este momento</p> }
        </div>
        
            <ModalFormularioPostulacion
              modal={modal}
              setModal={setModal}
            />
    </>
  )
}

export default Convocatoria
