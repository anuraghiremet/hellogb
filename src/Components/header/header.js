import * as React from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import {customNavbar, navLink,dropdownItem,ddbtn,btnRed,logoImg,headerWrapper} from './header.module.css'

const Header = () => {
    

    return (
        <header className={headerWrapper}>
            {/* <nav className={`${customNavbar} navbar navbar-expand-lg`}>
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <Link className="navbar-brand" to="https://rainbowit.net/html/inbio/index-white-version.html"><StaticImage className={logoImg} alt="logo" src="../../images/logo.png" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        </div>
                            <div className="navbar-nav">
                                <div className="dropdown">
                                    <Link className={`${ddbtn} btn dropdown-toggle`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Produkte
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li><Link className={`${dropdownItem} dropdown-item`} to=''>Action</Link></li>
                                        <li><Link className={`${dropdownItem} dropdown-item`} to=''>Another action</Link></li>
                                        <li><Link className={`${dropdownItem} dropdown-item`} to=''>Something else here</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <Link className={`${ddbtn} btn dropdown-toggle`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Entwicklung
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li><Link className={`${dropdownItem} dropdown-item`} to=''>Action</Link></li>
                                        <li><Link className={`${dropdownItem} dropdown-item`} to=''>Another action</Link></li>
                                        <li><Link className={`${dropdownItem} dropdown-item`} to=''>Something else here</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <Link className={`${ddbtn} btn dropdown-toggle`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Consulting
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li><Link className={`${dropdownItem} dropdown-item`} to=''>Action</Link></li>
                                        <li><Link className={`${dropdownItem} dropdown-item`} to=''>Another action</Link></li>
                                        <li><Link className={`${dropdownItem} dropdown-item`} to=''>Something else here</Link></li>
                                    </ul>
                                </div>
                                <Link className={`${navLink} nav-link`} to="/">Marketing</Link>
                                <Link className={`${navLink} nav-link`} to="/">Home</Link>
                                <Link className={`${navLink} nav-link`} to="/">Karriere</Link>
                                <Link className={`${navLink} nav-link`} to="/">Unternehmen</Link>
                                <Link className={`${navLink} nav-link`} to="/">Partner werden</Link>
                                <Link className={`${navLink,btnRed} nav-link`} to="/contact/contact">Kontakt</Link>
                            </div>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="https://www.becoding.de/"><StaticImage src="../../images/logo.png" className={logoImg}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">Karriere</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#">Unternehmen</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#">Partner werden</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#">Marketing</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Produkte
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Entwicklung
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Consulting
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <Link className={`${btnRed} nav-link`} to="https://rainbowit.net/html/inbio/index-white-version.html">Kontakt</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header