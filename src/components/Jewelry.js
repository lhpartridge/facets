import React, {useState, useEffect} from 'react'
import JewelryCard from './JewelryCard'

const Jewelry=()=> {
    return(

        <section className='container'>
            <h2 className='h2'>Jewelry Box</h2>
            <div className='row jewelry-row'>
                <JewelryCard />
                <JewelryCard />
                <JewelryCard />
                <JewelryCard />               
            </div>

        </section>
    )
}

export default Jewelry