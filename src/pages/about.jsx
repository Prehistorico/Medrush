import "../styles/about.css";

import logo from "../assets/Medrush_logo.png";
import scene1 from "../assets/scene1.png";
import scene2 from "../assets/scene2.png";
import wheel from "../assets/wheel.png";

export default function About() {
    return (
        <section className="about">

            <div className="about_hero">
                <img src={logo} alt="Medrush logo" />

                <h1>¿Qué es Medrush?</h1>

                <p>
                    Es un simulador en realidad virtual donde el usuario
                    se desplaza con un carrito de paramédico.
                </p>

                <p>
                    Su misión es esquivar obstáculos, recoger a jugadores
                    lesionados y llevarlos a una meta, utilizando controles
                    físicos y retroalimentación háptica para mejorar la inmersión.
                </p>
            </div>

            <div className="about_image">
                <img src={scene1} alt="Gameplay" />
            </div>

            <div className="about_objectives">

                <div className="about_objectives_title">
                    <h2>Nuestros Objetivos</h2>
                </div>

                <div className="about_objectives_text">
                    <p>
                        Creemos que podemos usar la realidad virtual y la
                        retroalimentación háptica para crear una experiencia
                        inmersiva que permita desarrollar habilidades como
                        coordinación, orientación espacial y capacidad de
                        reacción dentro de un entorno seguro y controlado.
                    </p>
                </div>

            </div>

            <div className="about_image">
                <img src={scene2} alt="Obstacles" />
            </div>

            <div className="about_methodology">

                <h2>Metodología</h2>

                <img src={wheel} alt="Wheel controls" />

                <p>
                    Para Medrush hemos diseñado un volante y pedales con
                    sensores de movimiento y botones que permiten una conexión
                    directa entre las acciones del usuario y la respuesta
                    del sistema.
                </p>

                <p>
                    De esta forma creamos una participación activa y natural
                    en el entorno virtual.
                </p>

            </div>

        </section>
    );
}