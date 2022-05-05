import React, {useState, useEffect} from 'react'

const Carousel=()=> {
    return(
        <section className="section carousel-section">
        <h2 className="h2">Polyhedron models</h2>
       
        <div id="carousel" className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item active ">
                    
                    <img src="../../media/Tetrahedron.gif" className="carousel-image d-block w-10" alt="tetrahedron"/>
                </div>
                <div className="carousel-item">
                    <img src="../../media/Octahedron.gif" className="carousel-image d-block w-10" alt="octahedron"/>
                </div>
                <div className="carousel-item">
                    <img src="../../media/Hexahedron.gif" className="carousel-image d-block w-10" alt="hexahedron"/>
                </div>
                <div className="carousel-item">
                    <img src="../../media/Dodecahedron.gif" className="carousel-image d-block w-10" alt="dodecahedron"/>
                </div>
                <div className="carousel-item">
                    <img src="../../media/Icosahedron.gif" className="carousel-image d-block w-10" alt="icosahedron"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        
        </section>
    )
}

export default Carousel