import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Bg from './assests/habesha.jpg'
const Signup = () => {
    const [error, setError] = useState("");
    const [data, setData] = useState({
        email: "",
        Fname: '',
        Lname: '',
        password: '',
        cpassword: ''
    });
    const navigate = useNavigate()
    const changeName = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        setError("");
    };
    const handleSubmite = (event) => {
        event.preventDefault();
        if (!data.Fname ) {
            setError("First Name Is Required");
        }
        else if (!data.Lname ) {
            setError("Last Name Is Required");
        }
        else if (!data.email) {
            setError("Email Is Required")
        }
        else if (!data.password) {
            setError("Password Is Required")
        }
        else if (data.password.trim().length < 8) {
            setError("Password should be Strong")
        }
        else if (!data.cpassword) {
            setError("Confirmation Password Is Required")
        }
        else if (data.cpassword.trim().length < 8) {
            setError("Confirmation Password should be Strong")
        }
        else if (data.cpassword !== data.password) {
            setError("Password is not Matched")
        }
        else {
            alert("User Successfully Registered")
            navigate('/sign-in')
        }
    }
    return (
        <div>
            <div className='col-md-10 d-flex mb-5 my-5'>
                <div className="row  mx-5">
                    <div className="col-md 5 d-flex justify-content-center mx-5 my-5">
                        <img src={Bg} width="300px" height="300px" alt="Contact Us" />
                    </div>
                </div>
                <div className="col-6 justify-content-center text-center align-content-center">
                    <form onSubmit={handleSubmite} className='bg-white justify-content-center align-content-center  mx-5 my-5'>
                        <div className="mb-3">
                            <label htmlFor="Fname" className="form-label">First Name</label>
                            <input type="text" 
                            value={data.Fname}
                            name='Fname'
                            onChange={changeName}
                            className="form-control" id="Fname" placeholder="First Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Lname" className="form-label">Last Name</label>
                            <input type="text"
                            value={data.Lname}
                            name='Lname'
                            onChange={changeName}
                             className="form-control" id="Lname" placeholder="Last Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Phone" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="Phone" placeholder="Last Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email"
                            value={data.email}
                            onChange={changeName}
                            name="email"
                             className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                            placeholder='Password'
                            value={data.password}
                            name='password'
                            onChange={changeName}
                            className="form-control" id="password" type='password' rows="3" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword" className="form-label">Conformation Password</label>
                            <input
                            placeholder='Confirmation Password'
                            value={data.cpassword}
                            name='cpassword'
                            onChange={changeName}
                             className="form-control" id="cpassword" type='password' rows="3" />
                        </div>
                        <div className="mb-3">
                            {error && <div className="error_msg">{error}</div>}
                        </div>
                        <button type='submit' className='btn btn-outline-primary btn-dark text-white text-uppercase w-25'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup