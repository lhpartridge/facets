import React, {useState, useEffect} from 'react'
import { FaShoppingCart } from 'react-icons/fa'

// The Nav component was adapted from Bootstrap 5.1

const Nav=()=> {
    return(
        <section className='section top-section'>

            {/* <div className='row'>  */}            
                <nav class="navbar nav top-nav navbar-expand-md ">
                    <ul className='ul d-flex collapse navbar-collapse'>
                        <li className='nav-item top-nav-item'>
                            <a href='#link' class="nav-link top-nav-link">Home</a>
                        </li>
                        <li className='nav-item  top-nav-item'>
                            <a href='#link' class="nav-link top-nav-link">About</a>
                        </li>
                        <li class="nav-item top-nav-item dropdown">
                            <a class="nav-link dropdown-toggle top-nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                            Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Polyhedron Models</a>
                                <a class="dropdown-item" href="#">Jewelry</a>
                                <a class="dropdown-item" href="#">Home Decor</a>
                                <a class="dropdown-item" href="#">Holiday</a>
                            </div>
                        </li>

                    </ul>
                    <ul className='d-flex'>
                        <li className='nav-item top-nav-item'>
                            <input class="form-control mr-sm-2 top-nav-item search-item" type="search" placeholder="Search FACETS" aria-label="Search"/>
                            
                        </li>
                        <li className='nav-item top-nav-item'>
                            <button class="btn top-nav-btn my-2 my-sm-0 top-nav-item" type="submit">Search</button>
                        </li>
                        <li className='nav-item  top-nav-item'>
                            {/* <input class="form-control mr-sm-2 top-nav-item log-in" type="email" placeholder="Enter your email" aria-label="Search"/> */}
                        </li>
                        <li class="nav-item top-nav-item log-in">
                        <button class="btn top-nav-btn my-2 my-sm-0 top-nav-item log-in-btn" type="submit">Log in</button>
                        </li>
                        <li className='nav-item top-nav-item'>
                            <div className='cart'>
                                <FaShoppingCart />
                            </div>
                        </li>

                    </ul>
                    {/* <div className='d-flex'>
                        <form class="form-inline d-flex">
                            <input class="form-control mr-sm-2 top-nav-item" type="search" placeholder="Search FACETS" aria-label="Search"/>
                            <button class="btn top-nav-btn my-2 my-sm-0 top-nav-item" type="submit">Search</button>
                            <input class="form-control mr-sm-2 top-nav-item log-in" type="email" placeholder="Enter your email" aria-label="Search"/>
                            <button class="btn top-nav-btn my-2 my-sm-0 top-nav-item log-in-btn" type="submit">Log in</button>
                        </form>
                        <div className='cart'>
                            <FaShoppingCart />
                        </div>
                    </div> */}
                </nav>
            {/* </div> */}
            


        </section>
    )
}

export default Nav