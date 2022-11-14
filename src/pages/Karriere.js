import React from "react";
import Header from "../Components/header/header";
import Footer from "../Components/footer/footer";
import {KarriereWrapper,KarriereHead, topTitle,cardHeader,cardFooter,cardBtn,card,cardBody} from "./Karriere.module.css"
import { Link } from "gatsby";

const Karriere = () => {
    return (
        <section className={KarriereWrapper}>
            <Header />

            <div className={KarriereHead}>
                <div className="container">
                    <h1 className={topTitle}>Karriere</h1>
                </div>
            </div>
            <div className="container">
                <h2 className="my-5 fs-1 fw-normal">Jetzt durchstarten</h2>
                <p className="mb-5">beCoding ist Softwarelösungsanbieter und seit 2013 in Berlin ansässig. Mit uns können Sie wachsen und von den Erfolgen des Unternehmens profitieren. Unsere Auftraggeber sind mittelständige Industrie- und Handelsunternehmen sowie Konzerne. Wir bieten eine solide, sichere Basis jenseits der Start-Up Szene. <br></br><br></br>
                Organisches, nicht Venturekapital getriebenes Wachstum steht bei uns im Vordergrund.</p>
                <div className="row justify-content-between">
                    <div className="col-sm-4">
                        <div className={card}>
                            <span className={cardHeader}>Development</span>
                            <div className={cardBody}>
                                <h4 className="fw-normal">Software Developer .NET</h4>
                                <p className="my-3">.NET Framework 4.x, .NET Core 3.x</p>
                                <Link to="www.google.com" className={cardBtn}>Mehr</Link>
                            </div>
                            <span className={cardFooter}> </span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className={card}>
                            <span className={cardHeader}>Development</span>
                            <div className={cardBody}>
                                <h4 className="fw-normal">Software Developer .NET</h4>
                                <p className="my-3">.NET Framework 4.x, .NET Core 3.x</p>
                                <Link to="www.google.com" className={cardBtn}>Mehr</Link>
                            </div>
                            <span className={cardFooter}> </span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className={card}>
                            <span className={cardHeader}>Development</span>
                            <div className={cardBody}>
                                <h4 className="fw-normal">Software Developer .NET</h4>
                                <p className="my-3">.NET Framework 4.x, .NET Core 3.x</p>
                                <Link to="www.google.com" className={cardBtn}>Mehr</Link>
                            </div>
                            <span className={cardFooter}> </span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </section>
    )
}
export default Karriere