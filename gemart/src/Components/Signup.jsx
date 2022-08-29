import React from 'react'
import Bg from './assests/habesha.jpg'
const Signup = () => {
    return (
        <div>
            <div className='col-md-10 d-flex mb-5 my-5'>
                <div className="row  mx-5">
                    <div className="col-md 5 d-flex justify-content-center mx-5 my-5">
                        <img src={Bg} width="300px" height="300px" alt="Contact Us" />
                    </div>
                </div>
                <div className="col-6 justify-content-center text-center align-content-center">
                    <form className='bg-white justify-content-center align-content-center  mx-5 my-5'>
                        <div className="mb-3">
                            <label htmlFor="Fname" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="Fname" placeholder="First Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Lname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="Lname" placeholder="Last Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Phone" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="Phone" placeholder="Last Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input className="form-control" id="password" type='password' rows="3" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword" className="form-label">Conformation Password</label>
                            <input className="form-control" id="cpassword" type='password' rows="3" />
                        </div>
                        <button type='submit' className='btn btn-outline-primary btn-dark text-white text-uppercase w-25'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup