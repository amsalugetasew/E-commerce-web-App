import React from 'react'
import Bg from './assests/habesha.jpg'
import NavBar from './NavBar'
// import "./App.css"
function Contact() {
  return (
    <div>
      <NavBar/>
      <div className="container mb-4">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className='col-md-10 d-flex'>
        <div className="row  mx-5">
          <div className="col-md 0 d-flex justify-content-center">
            <img src={Bg} width="300px" height="300px" alt="Contact Us" />
          </div>
        </div>
        <div className="col-6 justify-content-center text-center">
          <form>
            <div class="mb-3">
              <label htmlFor="fullName" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="fullName" placeholder="Getasew Amsalu" />
            </div>
            <div class="mb-3">
              <label htmlFor="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label htmlFor="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="3"></textarea>
            </div>
            <button type='submit' className='btn btn-outline-primary btn-dark text-white'>Send Message</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
