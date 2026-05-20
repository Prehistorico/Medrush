import { Link } from "react-router-dom"
import { useState } from "react"
import "../navbar/navbar.css"

import logo from "../../assets/Medrush_logo.png";

export default function Navbar(){
    return(
        <section className="navbar">

            <div className="navbar_left">
                <Link to="/home">
                    <img src={logo}></img>
                </Link>
            </div>

            <div className="navbar_right">
                
                <Link to="/">Home </Link>
                <Link to="/about">About </Link>
            </div>

        </section>
    )
}
