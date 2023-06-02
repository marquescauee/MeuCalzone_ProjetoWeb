import React from "react"
import './header.css'
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div>
            <header className="d-flex flex-wrap align-items-center py-2 mb-3 line-header">
                <nav className="w-75 m-auto d-flex align-items-center">
                    <Link to={"/admin"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none navTitle">
                        <span className="fs-4 text-light">
                            <img src="assets/calzone_logo2.png" width="80" alt="" />
                        </span>
                        <span className="navMeuCalzone">Meu Calzone :)</span>
                    </Link>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={"/admin/clientes"}>Clientes</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-light" to={"/admin/produtos"}>Produtos</Link>
                        </li>
                    </ul>

                    <div class="dropdown">
                        <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Olá, Fulano!
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to={"/logout"} class="dropdown-item">Sair</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header



