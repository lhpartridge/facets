import React, {useState, useEffect} from 'react'
import Nav from './Nav'

const Component=()=> {
    return(
        <div className='header container'>
            <div className='top-nav-row row'>
                <Nav />
            </div>
            <h1 className='h1'>Facets</h1>
            <div className='sloganDiv'>
                <h3 className='slogan slogan-1'>the beauty of mathematics</h3>
                <h3 className='slogan slogan-2'>the mathematics of beauty</h3>
            </div>
            
        </div>
    )
}

export default Component