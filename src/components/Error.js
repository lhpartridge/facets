import React from "react";

const Error=()=> {
    return(
        <section className="container">
            <div className="error row">
                <h2 className="error-header h2"> - 404 Error - </h2>
                <h3 className="error-subheader h3">This page does not exist</h3>
                <img src="../../media/black_hole.jpg" className="img-fluid error-image"/>
            </div>
        </section>
    )
}
export default Error