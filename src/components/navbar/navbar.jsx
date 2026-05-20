import { Link } from "react-router-dom"
import { useState } from "react"
import "../navbar/navbar.css"

import logo from "../../assets/Medrush_logo.png";

export default function Navbar(){
    return(
        <section className="navbar">

            <div className="navbar_left">
                <a href="/home">
                    <img src={logo}></img>
                </a>
            </div>

            <div className="navbar_right">
                
                <a href="/">
                    <span>Home</span>
                </a>
                <a href="/about">
                    <span>About</span>
                </a>
            </div>

        </section>
    )
}
