import React, { useState, useEffect } from 'react'

const Blog = () => {
    return (
        <section className='section container-fluid'>
            <h2 className='h2 blog-header'>The Golden Mean</h2>
            <h3 className='h3 blog-subheader'>Fibonacci in Nature</h3>
            <div className='text-center'>
                {/* <div className=''> */}

                <div className='image-div blog-image row d-flex'>
                    <img src="../../media/fibonacci_in_nature.jpg" alt="The Fibonacci sequence in nature" className='img-fluid blog-image col-md-4' />
                {/* </div> */}
                    <p className='col-md-8 blog-text'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                    </p>
                </div>


                    {/* <img src="../../media/fibonacci_in_nature.jpg" alt="The Fibonacci sequence in nature" className='img-fluid blog-image col-md-4 mb-3' /> */}
            </div>
        </section>
    )
}

export default Blog