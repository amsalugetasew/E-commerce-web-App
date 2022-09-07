import React from 'react'
import { NavLink } from 'react-router-dom'
import Aboutus from './assests/habesha.jpg'
function About() {
  return (
    <div>
        <div className="container d-flex py-4 my-5 justify-content-center">
            <div className="row">
                <h1 className='text-primary fw-bold'>About Us</h1>
                <p className="lead me-5" id='abcontent'>
                Gondar, or Gonder, is a city in northern Ethiopia. 
                It's known for the walled Fasil Ghebbi fortress and palace compound, 
                once the seat of Ethiopian emperors. Dominating it is the immense 
                17th-century castle of Emperor Fasilides, which combines Portuguese, 
                Indian and local architectural styles. Outside the complex is Debre
                 Berhan Selassie church, with an interior of elaborate murals, 
                 including a ceiling of faces.
                </p>
                <NavLink to="/contact" className="btn btn-outline-primary btn-dark text-white">Contact Us</NavLink>
            </div>
            <div className="col-md-6 mx-5">
                <img src={Aboutus} alt="" height="400px" width="400px" />
            </div>
        </div>
    </div>
  )
}

export default About