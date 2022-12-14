import React, { useState, useEffect} from 'react';
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import {primaryBtn,logoImg,headerWrapper} from './header.module.css'


const Header = () => {

  return (
      <header className={headerWrapper}>
            
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><StaticImage src="../../images/logo.png" className={logoImg}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <Link className="nav-link mx-2" to='/Karriere'>Karriere</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link mx-2" href="#">Unternehmen</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link mx-2" href="#">Partner werden</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link mx-2" href="#">Marketing</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Produkte
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item text-dark" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">Another action</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Entwicklung
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item text-dark" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">Another action</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Consulting
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item text-dark" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">Another action</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <Link className={primaryBtn} to=" https://google.com">Kontakt</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
  );
};

export default Header;
