import React from 'react'
import { RiUserLine } from "react-icons/ri";
import {  Link, Route, Routes, Outlet} from 'react-router-dom'
import Login from './Login';
import Pages from './Pages';

const Navegador = (props) => {
        const { showMenu } = props;    
  return (
    <div  >
      <div >
      <Routes>
            <Route path='/' element={<Pages />}>  </Route>
            <Route path='login' element={<Login />}>  </Route>           
      </Routes>  
      </div>           
        <div className={`fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between
        py-6 rounded-tr-xl rounded-br-xl z-50 mt-24 ml-5 ${showMenu ? "left-0" : "-left-full"}`} >
            <div>
                 <ul className='absolute bg-white w-60 text-center grid
                gap-6 text-black md:static md:w-max'>
                    <p className='text-4xl font-thin'> Bread </p>                     
                     <button className=' text-white bg-[#004F4A] 
                     w-48 h-14 rounded-full m-auto'>                      
                          <Link to='./login'>  <RiUserLine className='w-8 h-8 absolute ml-5 mt-2' /> Inicia Sesión <p className='font-light'> o Regístrate</p></Link>
                     </button>
                     <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Cuenta </a></li>
                     <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Carrito de Compras </a>  </li>
                     <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Pigmentos </a> </li>
                    <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Cartuchos</a>  </li>
                     <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Agujas Convencionales </a> </li>
                     <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Tips </a>  </li>
                     <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Grips </a> </li>
                     <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Asepsia </a> </li>
                     <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Descartables </a> </li>
                     <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Nosotros  </a></li>
                     <li className='text-left text-black w-[80%] pl-14 text-lg'> <a href='#'> Contacto </a></li>    
                </ul> 
            </div>   
        </div>
        <Outlet />
      </div>
  );
}

export default Navegador;