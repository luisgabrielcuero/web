import { Link } from "react-router-dom"

const Inicio = () => {
  return (
    <>
    <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between">
            <h2 className="text-4xl text-green-600 font-black text-center">
                Moni-Web
            </h2>
            <div>
                <Link
                to='login'
                className="bg-green-600 p-20 mb-5 w-full py-3 text-white uppercase font-bold rounded
                hover:cursor-pointer hover:bg-green-800 transition-color"
                >Iniciar Sesion
                </Link>
                <Link
                to='registrar'
                className="bg-green-600 p-20 mb-5 w-full py-3 text-white uppercase font-bold rounded
                hover:cursor-pointer hover:bg-green-800 transition-color"
                >Registrarse
                </Link>
            </div>
        </div>
    </header>
    <div className="bg-white">
        <h1 className="text-green-600 font-black text-6xl capitalize text-center">Bienbenido a Moni-web</h1>
            
        
    </div>

    </>
  )
}

export default Inicio
