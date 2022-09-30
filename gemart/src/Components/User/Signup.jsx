import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import NavBar from '../NavBarAfterLogin';

const Signup = () => {
    const { id } = useParams();
    const [error, setError] = useState("");
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const inputRef7 = useRef(null);
    const [data, setData] = useState({
        email: "",
        Fname: '',
        Lname: '',
        Address: '',
        Phone: '',
        File: "",
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
    const [file, setFile] = useState("");
    const triggerSelectPopup = () => inputRef.current.click();
    const inputRef6 = React.useRef();
    const fileUpload = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load", () => {
                setFile(reader.result);
                // console.log("event.target.value")
                // data.image = file
                // setData({ ...data, [event.target.name]: "file" });
            });
        }
    }
    const changeName = ({ currentTarget: input }) => {
        var name = input.name;
        var val = input.value
        setData({ ...data, [name]: val });
        setError("");
    };
    var vals = data.File.replace("C:\\fakepath\\", "")
    const Fname = data.Fname
    const Lname = data.Lname
    const email = data.email
    const Address = data.Address
    const Phone = data.Phone
    const password = data.password
    const profile = vals
    var myobj = {
        profile,
         Fname, 
         Lname,
         email, 
         Address, 
         Phone, 
         password
    };
    const handleSave = async (event) => {
        event.preventDefault();
        // const Profile = inputRef6.current.value;
        const newPerson = {...myobj };
        // console.log(newPerson)
        if (!data.Fname) {
            setError("First Name Is Required");
        }
        else if (!data.Lname) {
            setError("Last Name Is Required");
        }
        else if (!data.email) {
            setError("Email Is Required")
        }
        else if (!data.Address) {
            setError("Address Is Required")
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
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        // const Profile = inputRef6.current.value;
        const Fname = inputRef.current.value;
        const Lname = inputRef1.current.value;
        const email = inputRef2.current.value;
        const Phone = inputRef3.current.value;
        const password = inputRef4.current.value;
        const cpassword = inputRef5.current.value;
        const Address = inputRef7.current.value;
        var profile = inputRef6.current.value;
        profile = profile.replace("C:\\fakepath\\", "")
        if (!Fname) {
            setError("First Name Is Required");
        }
        else if (!Lname) {
            setError("Last Name Is Required");
        }
        else if (!email) {
            setError("Email Is Required")
        }
        else if (!Address) {
            setError("Address Is Required")
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
                profile, Fname, Lname, email, Address, Phone, password
            };
            try {
                await fetch(`http://localhost:5000/update/${id.toString()}`, {
                    method: "POST",
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
    const purposiveFunction = (e) =>{
        changeName(e)
        fileUpload(e)
    }
    return (
        <div>
            <NavBar />
            <div className='col-md-15 d-flex mb-5 my-4 mg'>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src={file ? file : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                            alt="" className="itemImage" width="300px" height="300px" />
                    </div>
                </div>
                <div className="col-7 mx-5 card">
                    <div className="buttons">
                        <NavLink to="/user-list" className="btn btn-outline-white user">
                            <i className="fa fa-arrow-left user"> back</i>
                        </NavLink>
                    </div>
                    <form onSubmit={id ? handleUpdate : handleSave} 
                    className='bg-white justify-content-center align-content-center  mx-5 my-1' 
                    encType='multipart/form-data'
                    >
                        <div className='d-flex'>
                        <div className='mx-4'>
                        <div className="mb-2">
                        <label htmlFor="profile" className="form-label lbl">User Profile:</label>
                            <input type="file"
                                required
                                ref={inputRef6}
                                value={data.File || records.File}
                                name='File'
                                onClick={triggerSelectPopup}
                                onChange={purposiveFunction}
                                className="form-control" id="File"/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="Fname" className="form-label lbl">First Name:</label>
                            <input type="text"
                                ref={inputRef}
                                value={data.Fname || records.firstName}
                                name='Fname'
                                onChange={changeName}
                                className="form-control" id="Fname" placeholder="First Name" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="Lname" className="form-label lbl">Last Name:</label>
                            <input type="text"
                                ref={inputRef1}
                                value={data.Lname || records.lastName}
                                name='Lname'
                                onChange={changeName}
                                className="form-control" id="Lname" placeholder="Last Name" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="Address" className="form-label lbl">Address:</label>
                            <input type="text"
                                ref={inputRef7}
                                value={data.Address || records.address}
                                name='Address'
                                onChange={changeName}
                                className="form-control" id="Address" placeholder="Address" />
                        </div>
                        </div>
                        <div className='col-5'>
                        <div className="mb-2">
                            <label htmlFor="email" className="form-label lbl">Email:</label>
                            <input type="email"
                                ref={inputRef2}
                                value={data.email || records.email}
                                onChange={changeName}
                                name="email"
                                className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-2">
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
                        <div className="mb-2">
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
                        <div className="mb-2">
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
                        <div className="mb-2">
                            {error && <div className="error_msg">{error}</div>}
                        </div>
                        </div>
                        </div>
                        <input type='submit'
                            value={id ? "Update User" : "Add User"}
                            className='btn btn-outline-primary btn-dark text-white text-uppercase mb-4 submit'
                        />
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup