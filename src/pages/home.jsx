import "../styles/home.css"

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import trailer from "../assets/medrush_trailer.mp4";
 
export default function Home(){
    return(
        <>
         <div className="home_hero">
            <video src={trailer} autoPlay poster={image4}>
                Tu navegador no admite el elemento <code>video</code>.
            </video>
        </div>

        <section className="home">
            <div className="home_main">
                <h1>Una experiencia inmersiva con un proposito formativo.</h1>
                <img src={image4}></img>
                <p>Somos Medrush, un equipo de desarrolladores 
                    formados en varias disciplinas que estan interesados 
                    en el uso de las tecnologías de hápticos y realidad virtual. 
                    <br></br>
                    <br></br>
                    Creemos que estos pueden ser una herramienta útil más 
                    allá del entretenimiento y buscamos crear una experiencia 
                    inmersiva que permita al usuario desarrollar habilidades como 
                    coordinación, orientación espacial y capacidad de reacción dentro 
                    de un entorno seguro y controlado.</p>
            </div>
            <div className="home_images">
                <div className="home_images_container">  
                    <img src={image1}></img>
                    <img src={image3}></img>
                    <img src={image2}></img>
                </div>
            </div>

            <div className="home_join">
                <h1>Join our community</h1>
                <p>Estate al pendiente de todas nuestras noticias y actualizaciónes.</p>

                <button
                    id="redirectBtn" onClick={() =>
                        window.open("https://www.instagram.com/medrush_?igsh=MWY4OXNiOGRtOXVjeQ%3D%3D&utm_source=qr","_blank")
                    }>Join Instagram
                </button>
            </div>
        </section>
        </>
    )
}