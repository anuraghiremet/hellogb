import React from "react";
import { Link } from "gatsby";
import {bannerWrapper,primaryBtn,bannerContent} from "./homepage.module.css"


const Banner = () => {
    return(
        <section className={bannerWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className={bannerContent}>
                            <h1>High-Scale E-Commerce</h1>
                            <h3>abc Store für High-Performance Commerce</h3>
                            <Link className={primaryBtn}>Jetzt durchstarten</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner