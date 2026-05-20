import { Link } from "react-router-dom"
import { useState } from "react"
import "../footer/footer.css"

import logo from "../../assets/Medrush_logo.png";
import insta from "../../assets/insta_logo.png";

export default function Footer(){
    return(
        <section className="footer">

            <div className="footer_left">
                <a href="/home">
                    <img src={logo}></img>
                </a>
            </div>

           <div className="footer_right">
                <a href="https://www.instagram.com/medrush_?igsh=MWY4OXNiOGRtOXVjeQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={insta}></img>
                    <span>Follow us</span>
                </a>
            </div>

        </section>
    )
}
