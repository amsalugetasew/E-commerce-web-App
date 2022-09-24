import React, { useState } from 'react'
import Bg from '../assests/habesha.jpg'
import '../../App.css'
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
function Login() {
    const [error, setError] = useState("");
    const [data, setData] = useState({
        email: "",
        password: ''
    });
    const navigate = useNavigate()
    const win = window.sessionStorage;
    const changeName = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        setError("");
    };
    const handleSubmite = async(event) => {
        event.preventDefault();
        if (!data.email && !data.password) {
            setError("Email and Password Is Required");
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
        else {

            const response = await fetch(`http://localhost:5000/login/`,{
                method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
            });
            if (!response.ok) {
                setError(`'${data.email +"'  "+response.statusText}`)
                return;
            }
            const records = await response.json();
            win.setItem('email', records.email)
            win.setItem('UserName', records.firstName)
            win.setItem('profile', records.profile)
            // console.log((records.firstName));
            if(records){
                navigate('/view-item')
            }
        }
    }
    return (
        <div>
            <NavBar/>
            <div className='col-md-10 d-flex mb-5 my-5'>
                <div className="row  mx-5">
                    <div className="col-md 5 d-flex justify-content-center my-5 mx-5">
                        <img src={Bg} width="300px" height="300px" alt="Contact Us" />
                    </div>
                </div>
                <div className="col-6 justify-content-center text-center align-content-center">
                    <form onSubmit={handleSubmite} className='bg-white justify-content-center align-content-center  mx-5 my-5'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email"
                                value={data.email}
                                onChange={changeName}
                                className="form-control"
                                id="email" name='email' placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input className="form-control"
                                value={data.password}
                                name='password'
                                onChange={changeName}
                                id="password" type='password' rows="3" />
                        </div>
                        <div className="mb-3">
                            {error && <div className="error_msg">{error}</div>}
                        </div>
                        <button type='submit' className='btn btn-outline-primary btn-dark text-white text-uppercase w-25'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
