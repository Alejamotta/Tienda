import React from 'react'
import Imagenes from './Imagenes'

const Main = () => {
  return (
    <>   
    <div className='grid '>   
        <div className='w-86 h-40 bg-gray-300 rounded-2xl mt-5 overflow-hidden ' > 
        <img  src={ Imagenes.img1 } alt='planta'/></div>
    </div>
    <div className='grid grid-cols-2 gap-16'>
        <div className='grid grid-row-2'>
            <div className='w-56 h-40 bg-gray-300 overflow-hidden rounded-2xl mt-5 ' > 
                <img src={ Imagenes.img2 } alt='mar'/>
            </div>
            <div className='w-56 h-40 bg-gray-300 rounded-2xl mt-5 overflow-hidden' >
               <img  src={ Imagenes.img3 } alt='rus'/> </div>   
            </div>
        <div className='w-44 h-84 bg-gray-300 rounded-2xl mt-5 overflow-hidden' >
            <img  src={ Imagenes.img4 } alt='moto'/>
        </div>
    </div>   
    
<div className='w-86 h-40 overflow-hidden bg-gray-300 rounded-2xl mt-5' > 
    <img src={ Imagenes.img5 } alt='flor'/>
</div>
</>

  )
}

export default Main