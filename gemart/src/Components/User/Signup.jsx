import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Bg from '../assests/habesha.jpg'
import NavBar from '../NavBarAfterLogin';

const Signup = () => {
    const { id } = useParams();
    const [error, setError] = useState("");
    const [data, setData] = useState({
        email: "",
        Fname: '',
        Lname: '',
        Phone: '',
        password: '',
        cpassword: ''
    });
    const navigate = useNavigate();
    const [records, setRecords] = useState([]);
    useEffect(() => {
        getRecords();
    });

    const getRecords = async () => {
        const res = await fetch(`http://localhost:5000/fetch/${id.toString()}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) {
            const message = `An error occurred: ${res.statusText}`;
            window.alert(message);
            return;
        }
        const data = await res.json();
        if (res.status === 401 || !data) {
            window.alert("error");
        }
        else {
            setRecords(data)
        }
    }
    const changeName = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        setError("");
    };
    const handleSave = async (event) => {
        event.preventDefault();
        const newPerson = { ...data };
        if (!data.Fname) {
            setError("First Name Is Required");
        }
        else if (!data.Lname) {
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
            try {
                await fetch("http://localhost:5000/users/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newPerson),
                })
                    .catch(error => {
                        window.alert(error);
                        if (error.response &&
                            error.response.status >= 400 &&
                            error.response.status <= 500
                        ) {
                            setError(error.response.data.message);
                        }
                        return;
                    });
                alert(`User Successfully Registered ${data.Fname}`)
                navigate('/user-list')
            }
            catch (error) {
                if (error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    setError(error.response.data.message);
                }
            }

        }
    }
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const handleUpdate = async (e) => {
        e.preventDefault();  
            const Fname= inputRef.current.value;
            const Lname= inputRef1.current.value;
            const email= inputRef2.current.value;
            const Phone= inputRef3.current.value;
            const password= inputRef4.current.value;
            const cpassword= inputRef5.current.value;
            if (!Fname) {
                setError("First Name Is Required");
            }
            else if (!Lname) {
                setError("Last Name Is Required");
            }
            else if (!email) {
                setError("Email Is Required")
            }
            else if (!Phone) {
                setError("Phone Is Required")
            }
            else if (!password) {
                setError("Password Is Required")
            }
            else if (password.trim().length < 8) {
                setError("Password should be Strong")
            }
            else if (!cpassword) {
                setError("Confirmation Password Is Required")
            }
            else if (cpassword.trim().length < 8) {
                setError("Confirmation Password should be Strong")
            }
            else if (cpassword !== password) {
                setError("Password is not Matched")
            }
            else {
                var myobj = {
                    Fname,Lname,email,Phone,password 
                  };
        try {
            await fetch(`http://localhost:5000/update/${id.toString()}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                myobj
            ),
        }).catch(error => {
            window.alert(error);
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
            return;
        })
        console.log(Fname)
        alert(`User ${Fname} Successfully Updated`)
        navigate('/user-list')
    }
    catch (error) {
        if (error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
    }
    }

    return (
        <div>
            <NavBar />
            <div className='col-md-15 d-flex mb-5 my-5'>
                <div className="row mx-0">
                    <div className="col-md 5 d-flex justify-content-center mx-5 my-5">
                        <img src={Bg} width="300px" height="300px" alt="Contact Us" />
                    </div>
                </div>
                <div className="col-5">
                <div className="buttons">
                    <NavLink  to="/user-list" className="btn btn-outline-white user">
                        <i className="fa fa-arrow-left user"> back</i>
                    </NavLink>
                </div>
                    <form onSubmit={id ? handleUpdate : handleSave} className='bg-white justify-content-center align-content-center  mx-5 my-1'>
                        <div className="mb-4 d-flex">
                            <label htmlFor="Fname" className="form-label lbl">First Name:</label>
                            <input type="text"
                                ref={inputRef}
                                value={data.Fname || records.firstName}
                                name='Fname'
                                onChange={changeName}
                                className="form-control" id="Fname" placeholder="First Name" />
                        </div>
                        <div className="mb-4 d-flex">
                            <label htmlFor="Lname" className="form-label lbl">Last Name:</label>
                            <input type="text"
                                ref={inputRef1}
                                value={data.Lname || records.lastName}
                                name='Lname'
                                onChange={changeName}
                                className="form-control" id="Lname" placeholder="Last Name" />
                        </div>

                        <div className="mb-4 d-flex">
                            <label htmlFor="email" className="form-label lbl">Email:</label>
                            <input type="email"
                                ref={inputRef2}
                                value={data.email || records.email}
                                onChange={changeName}
                                name="email"
                                className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-4 d-flex">
                            <label htmlFor="Phone" className="form-label lbl">Phone:</label>
                            <input type="text"
                                ref={inputRef3}
                                className="form-control"
                                id="Phone"
                                value={data.Phone || records.phone}
                                onChange={changeName}
                                name="Phone"
                                placeholder="Phone Number" />
                        </div>
                        <div className="mb-4 d-flex">
                            <label htmlFor="password" className="form-label lbl">Password:</label>
                            <input
                                ref={inputRef4}
                                autoComplete='current-password'
                                placeholder='Password'
                                value={data.password || records.password}
                                name='password'
                                onChange={changeName}
                                className="form-control" id="password" type='password' rows="3" />
                        </div>
                        <div className="mb-4 d-flex">
                            <label htmlFor="cpassword" className="form-label lbl">Confirm:</label>
                            <input
                                ref={inputRef5}
                                autoComplete='on'
                                placeholder='Confirmation Password'
                                value={data.cpassword || records.password}
                                name='cpassword'
                                onChange={changeName}
                                className="form-control" id="cpassword" type='password' rows="3" />
                        </div>
                        <div className="mb-4">
                            {error && <div className="error_msg">{error}</div>}
                        </div>
                        <input type='submit'
                            value={id ? "Update User" : "Add User"}
                            className='btn btn-outline-primary btn-dark text-white text-uppercase submit'
                        // value="Add User" 
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup