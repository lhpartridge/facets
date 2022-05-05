import React, {useState, useEffect} from 'react'

const About=()=> {
    return(
        <section className='container'>
            <h2 className='h2'>About Facets</h2>
            <div className='row about-row'>
                <div className='about-images'>
                    <img src='../../media/Tetrahedron.gif' alt='' className='img-fluid about-image'/>
                    <img src='../../media/Hexahedron.gif' alt='' className='img-fluid about-image'/>
                    <img src='../../media/Octahedron.gif' alt='' className='img-fluid about-image'/>
                    <img src='../../media/Dodecahedron.gif' alt='' className='img-fluid about-image'/>
                    <img src='../../media/Icosahedron.gif' alt='' className='img-fluid about-image'/>
                  
                </div>
                <div className=''>
                    <h3 className='h3'>Our Mission</h3>
                    <p className='text about-text col-md-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                    </p>
                </div>
                <div className=''>
                    <h3 className='h3'>Our Story</h3>
                    <p className='text about-text col-md-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                    </p>
                </div>
                <div className=''>
                    <h3 className='h3'>Our Team</h3>
                    <div>
                        <figure className='figure col-md-3'>
                            <img src="../../media/profile.jpg" alt="Team member" className='img-fluid team-image' />
                            <figcaption className='figcaption'>Al Gorhythm</figcaption>
                            <figcaption className='figcaption fig-desc'>When you need to get the job done, just ask Al.  He'll always tell you the steps you need to succeed. </figcaption>
                        </figure>
                        <figure className='figure col-md-3'>
                            <img src="../../media/profile.jpg" alt="Team member" className='img-fluid team-image' />
                            <figcaption className='figcaption'>Cal Culus</figcaption>
                            <figcaption className='figcaption fig-desc'>Life can throw you a curve.  Cal handles changes, minimizing problems and maximizing benefits. </figcaption>
                        </figure>
                        <figure className='figure col-md-3'>
                            <img src="../../media/profile.jpg" alt="Team member" className='img-fluid team-image' />
                            <figcaption className='figcaption'>Polly Gonn</figcaption>
                            <figcaption className='figcaption fig-desc'>  Whether your problem is regular or irregular, looking at all sides. Polly has all the angles you need.</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About