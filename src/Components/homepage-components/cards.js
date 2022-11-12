import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {cardsWrapper,cimgBox,contentBox,overlapImg,primaryBtn,ctitle,cdescription} from "./homepage.module.css"



const Cards = () => {
    return(
        <section className={cardsWrapper}>
           <div className="container">
            <div className="row">

              <div className="col-sm-6">
                <div className={cimgBox}>
                    <StaticImage src="../../images/retail.jpg" className={overlapImg} />
                </div>
              </div>

              <div className="col-sm-6 my-auto">
                <div className={contentBox}>
                    <h2 className={ctitle}>Marktplatz für Verbände</h2>
                    <p className={cdescription}>Wie der Einzelhandel sich global vernetzt und Omnichannel erfolgreich als Chance nutzt.</p>
                    <Link className={primaryBtn}>Erfahren Sie mehr</Link>
                </div>

              </div>
            </div>
          </div>
        </section>
    )
}
export default Cards