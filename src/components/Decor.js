import React, {useState, useEffect} from 'react'
import DecorCard from './DecorCard'

const Decor=()=> {
    return(
        <section className='container'>
        <h2 className='h2'>Home Decor</h2>
        <div className='row jewelry-row'>
            <DecorCard />
            <DecorCard />
            <DecorCard />
            <DecorCard />               
        </div>

    </section>
    )
}

export default Decor