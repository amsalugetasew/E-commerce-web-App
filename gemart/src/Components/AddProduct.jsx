import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import NavBar from '../Components/NavBarAfterLogin';
const AddProduct = () => {
    const { id } = useParams();
    const [error, setError] = useState("");
    const [data, setData] = useState({
        File: "",
        title: "",
        catagory: '',
        rate: '',
        count: '',
        description: '',
        price: ''
    });
    const navigate = useNavigate();
    const [records, setRecords] = useState([]);
    useEffect(() => {
        getRecords();
    });

    const getRecords = async () => {
        const res = await fetch(`http://localhost:5000/fetch/product/${id.toString()}`, {
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
        var name = input.name;
        var val = input.value
        setData({ ...data, [name]: val });
        setError("");
    };
    var vals = data.File.replace("C:\\fakepath\\", "")
    const title = data.title
    const catagory = data.catagory
    const price = data.price
    const count = data.count
    const rate = data.rate
    const description = data.description
    const profile = vals
    var myobj = {
        profile,
        title,
        catagory,
        price,
        count,
        rate,
        description
    };
    const handleSave = async (event) => {
        event.preventDefault();
        const newPerson = { ...myobj };
        if (!data.title) {
            setError("Title Is Required");
        }
        else if (data.catagory === "Select Product Catagory") {
            setError("Please Catagory");
        }
        else if (!data.price) {
            setError("Price Is Required")
        }
        else if (!data.count) {
            setError("Count Is Required")
        }
        else if (!data.rate) {
            setError("Rate Is Required")
        }
        else if (!data.description) {
            setError("Description Is Required")
        }

        else {
            try {
                await fetch("http://localhost:5000/product/add", {
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
                alert(`Product ${data.title} Successfully Registered`)
                navigate('/view-item')
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
        
        const title = inputRef.current.value;
        const catagory = inputRef1.current.value;
        const price = inputRef2.current.value;
        const rate = inputRef3.current.value;
        const count = inputRef4.current.value;
        const description = inputRef5.current.value;
        var profile = inputRef6.current.value;
        profile = profile.replace("C:\\fakepath\\", "")
        if (!title) {
            setError("Title Name Is Required");
        }
        else if (data.catagory === "Select Product Catagory") {
            setError("Please enter Catagory");
        }
        else if (!price) {
            setError("Price Is Required")
        }
        else if (!rate) {
            setError("Rate Is Required")
        }
        else if (!count) {
            setError("Count Is Required")
        }
        else if (!description) {
            setError("Description Is Required")
        }
        else {
            var myobj = {
                profile, title, catagory, price, rate, count, description
            };
                await fetch(`http://localhost:5000/product/update/${id.toString()}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        myobj
                    ),
                });
                console.log(title)
                alert(`User ${title} Successfully Updated`)
                navigate('/user-list')
           
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
            });
        }
    }
    const purposiveFunction = (e) => {
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
                        <NavLink to="/view-item" className="btn btn-outline-white user">
                            <i className="fa fa-arrow-left user"> back</i>
                        </NavLink>
                    </div>
                    <form onSubmit={id ? handleUpdate : handleSave} className='bg-white justify-content-center align-content-center  mx-5 my-1'>
                        <div className='d-flex'>
                            <div className='mx-4'>
                                <div className="mb-2">
                                    <label htmlFor="Fname" className="form-label lbl">Product Image:</label>
                                    <input type="file"
                                        accept='image/'
                                        ref={inputRef6}
                                        value={data.File || records.File}
                                        name='File'
                                        onClick={triggerSelectPopup}
                                        onChange={purposiveFunction}
                                        className="form-control"
                                        id="File" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="title" className="form-label">Product Title</label>
                                    <input type="text"
                                        ref={inputRef}
                                        value={data.title || records.title}
                                        onChange={changeName}
                                        className="form-control"
                                        id="title"
                                        name='title'
                                        placeholder="Jano" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="catagory" className="form-label">Product Catagory</label>
                                    <select
                                        ref={inputRef1}
                                        name="catagory"
                                        onChange={changeName}
                                        id="catagory"
                                        className="form-control">
                                        <option value="Select Product Catagory" select>Select Product Catagory</option>
                                        <option value="men's clothing">Men's clothing</option>
                                        <option value="women's clothing">Women's clothing</option>
                                        <option value="gojam azene">Gojam Azene</option>
                                        <option value="jewelery">Jewelery</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="price" className="form-label">Product Price</label>
                                    <input type="number"
                                        ref={inputRef2}
                                        value={data.price || records.price}
                                        onChange={changeName}
                                        className="form-control"
                                        id="price" name='price' placeholder="ETB" />
                                </div>
                            </div>
                            <div className='col-5'>
                                <div className="mb-2">
                                    <label htmlFor="rate" className="form-label">Rate</label>
                                    <input type="number"
                                        ref={inputRef3}
                                        value={data.rate || records.rate}
                                        onChange={changeName}
                                        className="form-control"
                                        id="rate" name='rate' placeholder="Rate" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="count" className="form-label">Count</label>
                                    <input type="number"
                                        ref={inputRef4}
                                        value={data.count || records.count}
                                        onChange={changeName}
                                        className="form-control"
                                        id="count" name='count' placeholder="Count" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="Decription" className="form-label">Product Description</label>
                                    <textarea cols="40"
                                        ref={inputRef5}
                                        value={data.description || records.description}
                                        name='description'
                                        onChange={changeName}
                                        className="form-control" rows="2"></textarea>
                                </div>
                                <div className="mb-2">
                                    {error && <div className="error_msg">{error}</div>}
                                </div>
                            </div>
                        </div>
                        <input type='submit'
                            value={id ? "Update Product" : "Add Product"}
                            className='btn btn-outline-primary btn-dark text-white text-uppercase mb-4 submit'
                        />

                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddProduct
