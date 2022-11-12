import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {bottomWrapper,bimgBox,contentBox, bimgOverlay,boverlapImg,primaryBtn,ctitle,cdescription} from "./homepage.module.css"



const Bottom = () => {
    return(
        <section className={bottomWrapper}>
           <div className="container">
            <div className="row flex-row-reverse">

              <div className="col-sm-6">
                <div className={bimgBox}>
                    <StaticImage src="../../images/ecommerce.jpg" className={boverlapImg} />
                </div>
              </div>

              <div className="col-sm-6 my-auto">
                <div className={contentBox}>
                    <h2 className={ctitle}>ebay, amazon, check24, ...</h2>
                    <p className={cdescription}>Angebote einfach und zentral verwalten. Automatische Content Distribution in verschiedene Vertriebskanäle.</p>
                    <Link className={primaryBtn}>Erfahren Sie mehr</Link>
                </div>

              </div>
            </div>
          </div>
        </section>
    )
}
export default Bottom