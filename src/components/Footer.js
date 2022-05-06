import React, {useState, useEffect} from 'react'
import { FaPinterestSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcDiscover } from 'react-icons/fa'
import { FaCcPaypal } from 'react-icons/fa'
// import Map from './components/Map'

const Footer=()=> {
    return(
        <footer className='footer container-fluid'>
            {/* <h2>FACETS</h2> */}
            <div className='row'>
                <div className='col-md-3 '>
                <div className='row'>
                        <div className='col bottom-nav'>
                            <nav className='nav navbar bottom-nav'>
                                <ul className='nav navbar bottom-nav list-group'>
                                    <li className='nav navbar bottom-nav-item list-group-item'>
                                        <a href='#link' className='nav-link bottom-nav-link'>Home</a>
                                    </li>
                                    <li className='nav navbar bottom-nav-item list-group-item'>
                                        <a href='#link' className='nav-link bottom-nav-link'>Polyhedron Models</a>
                                    </li>
                                    <li className='nav navbar bottom-nav-item list-group-item'>
                                        <a href='#link' className='nav-link bottom-nav-link'>Jewelry</a>
                                    </li>
                                    <li className='nav navbar bottom-nav-item list-group-item'>
                                        <a href='#link' className='nav-link bottom-nav-link'>Home Decor</a>
                                    </li>
                                    <li className='nav navbar bottom-nav-item list-group-item'>
                                        <a href='#link' className='nav-link bottom-nav-link'>Holiday</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
                <div className='contact col-md-3'>
                    <div className='row'>
                        <div className='contact col'>
                            <h4 className='h4 contact'>Contact Us</h4>
                            <h5 className='h5 contact'>555 Boulevard Street</h5>
                            <h5 className='h5 contact'>MyTown, MyState</h5>
                            <h5 className='h5 contact'>(601) 555-1212</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 '>
                <div className='row'>
                        <div className='col map-col'>
                            <h5>Click to enlarge map</h5>
                            <div className='col'>
                                <img src='../../media/map.png' alt='map' className='img-fluid map'/>
                                {/* <Map /> */}
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                <div className='row'>
                        <div className='col community'>
                        <h4>Join the Facets community</h4>
                        <a href='#link' className='blog-link'>
                            <h4 className='blog-link'>Blog:  The Golden Mean</h4>
                        </a>
                        <h4>Subscribe</h4>
                        <form>
                            <input type="text" placeholder="Enter your email address" className='sign-up'></input>
                        </form>
                        </div>
                    </div>
                </div>                
            </div>
            <div className='row bottom-footer-row'>
                <div className='col-md-2'>
                    <div className='row socials-row '> 
                        <p className='social col-md-3'><FaPinterestSquare /></p> 
                        <p className='social col-md-3'><FaFacebookSquare /></p>
                        <p className='social col-md-3'><FaInstagramSquare /></p>
                        <p className='social col-md-3'><FaTwitterSquare /></p>
                    </div>
                </div>

                <div className='colophon col-md-6'>site by apologicode &copy; 2022</div> 

                <div className='col-md-2'>
                    <div className='row payment-row'> 
                        <p className='payment col-md-3'><FaCcVisa /></p> 
                        <p className='payment col-md-3'><FaCcMastercard /></p>
                        <p className='payment col-md-3'><FaCcDiscover /></p>
                        <p className='payment col-md-3'><FaCcPaypal /></p>
                    </div>
                </div>

            </div>
            
        </footer>
    )
}

export default Footer