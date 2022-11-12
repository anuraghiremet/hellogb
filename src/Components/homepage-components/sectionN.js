import React from "react";
import { Link } from "gatsby";
import {sectionnWrapper,scontentBox,ctitle,cdescription,primaryBtn} from "./homepage.module.css"



const SecionN = () => {
    return(
        <section className={sectionnWrapper}>
           <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={scontentBox}>
                    <h2 className={ctitle}>Software für den Handel</h2>
                    <p className={cdescription}>beCoding ist mit über 15-jähriger Erfahrung als Lösungsanbieter im Handel der ideale Partner für Softwareprojekte rund um E-Commerce, Logistik, Verwaltung und Banking.</p>
                    <Link className={primaryBtn}>Erfahren Sie mehr</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default SecionN