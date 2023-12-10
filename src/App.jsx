
import './App.css'
import './style.css'
import Navegador from './Componentes/Navegador.jsx'
import { useState } from 'react'
import {RiCloseFill,
        RiAlignJustify,
        RiBasketballFill,
        RiSearchLine,
        RiShoppingCart2Line   } from "react-icons/ri";
import Main from './Componentes/Main.jsx';
import { Link, Outlet} from 'react-router-dom';
import Login from './Componentes/Login.jsx';


function App() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    }; 
  return (
    <div className='w-full h-screen'>     
      <nav className='bg-[#004F4A] h-20 w-[100%] flex items-center text-center justify-between'>  
        <div>
        <button className='text-white text-3xl m-4 lg:hidden' onClick={toggleMenu}> {showMenu ? <RiCloseFill /> : <RiAlignJustify /> } </button>  
        <Navegador showMenu={showMenu}/>            
        </div>     
          <Link to="/"> 
          <RiBasketballFill  className='text-white text-3xl'/> </Link>
          <div>
              <input className='bg-white rounded-full w-full h-8 m-5 p-4 outline-none '></input>
               <RiSearchLine className='text-xl text-gray-6x00 absolute top-16 right-32 md:right-52'/>
           </div>
          <Link to="/card"> <RiShoppingCart2Line className='text-white text-3xl m-7' /> </Link> 
      </nav>        
        <Main/>      
        <Login />  
        <Outlet />
      
    </div>
   

    
  )
}

export default App
