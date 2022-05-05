import React, {useState, useEffect} from 'react'
import HolidayCard from './HolidayCard'
// https://www.npmjs.com/package/react-snowfall

const Holiday=()=> {
    return(
        <section className='container'>
        <h2 className='h2'>Holiday</h2>
        <div className='row jewelry-row'>
            <HolidayCard />
            <HolidayCard />
            <HolidayCard />
            <HolidayCard />               
        </div>

    </section>
    )
}

export default Holiday