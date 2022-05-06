import React, {useState, useEffect} from 'react'
import ModelCard from './ModelCard'

const Models=()=> {
    return(
        <div>
            <h2 className='h2'>Polyhedron models</h2>
            <div className='row models-row'>
                <ModelCard />
                <ModelCard />
                <ModelCard />
                <ModelCard />
            </div>
        </div>
    )
}

export default Models