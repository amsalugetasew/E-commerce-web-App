import React from 'react'
import { NavLink } from 'react-router-dom'
import Aboutus from './assests/aboutus.jpg'
function About() {
  return (
    <div>
        <div className="container d-flex py-4 my-5 justify-content-center">
            <div className="row">
                <h1 className='text-primary fw-bold'>About Us</h1>
                <p className="lead me-5">
                 The University of Gondar, until 2003 known as the Gondar College of Medical Sciences, is the oldest medical school in Ethiopia. Established as the Public Health College in 1954, it is located in Gondar, the former capital of Ethiopia. In 2010, the university offered 42 undergraduate and 17 postgraduate programs.
                </p>
                <NavLink to="/contact" className="btn btn-outline-primary px-3 w-25">Contact Us</NavLink>
            </div>
            <div className="col-md-6 mx-5">
                <img src={Aboutus} alt="" height="400px" width="400px" />
            </div>
        </div>
    </div>
  )
}

export default About