import React from 'react'
import Bg from './assests/habesha.jpg'
function Login() {
    return (
        <div>
            <div className='col-md-10 d-flex mb-5 my-5'>
        <div className="row  mx-5">
          <div className="col-md 5 d-flex justify-content-center my-5 mx-5">
            <img src={Bg} width="300px" height="300px" alt="Contact Us" />
          </div>
        </div>
            <div className="col-6 justify-content-center text-center align-content-center">
                <form className='bg-white justify-content-center align-content-center  mx-5 my-5'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input className="form-control" id="password" type='password' rows="3" />
                    </div>
                    <button type='submit' className='btn btn-outline-primary btn-dark text-white text-uppercase w-25'>Sign In</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login
