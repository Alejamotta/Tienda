import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Pages = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">  </Link>
                </li>
                <li>
                    <Link to="Iniciar Sesion">  </Link>
                </li>
                <li>
                    <Link to="Pigmentos">  </Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
  )
}

export default Pages;