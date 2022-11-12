import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {footer} from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={footer}>
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <div className="logo">
                                <Link to="/">
                                    <StaticImage alt="footer-logo" src="../../images/logo.png" />
                                </Link>
                            </div>
                            <p className="text-light">© 2022. All rights reserved by<Link>Arbutus Infotech.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
      </footer>
    )
}

export default Footer