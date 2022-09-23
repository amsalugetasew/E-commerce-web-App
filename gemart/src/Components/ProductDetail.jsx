
import React, { useEffect } from 'react'
// import {DATA} from '../Data'
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action/index'
import NavBar from './NavBar';
function ProductDetail() {
    const [cartBtn, setcartBtn] = useState("Add to Cart");
    // const proid = useParams();
    const [records, setRecords] = useState([]);
    const { id } = useParams();
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
    
    // const productDetail = data.filter(x => (x.id).toString()  === (id).toString() );
    // const product = productDetail[0];
    const product = records
    const dispatch = useDispatch();
    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addCart(product))
            setcartBtn("Remove from Cart")
        }
        else {
            dispatch(delCart(product))
            setcartBtn("Add to Cart")
        }
    }
    const name = product.profile
    return (
        <>
        <NavBar/>
        {name? 
        <>
            <h1 className='text-center text-capitalize'>{records.catagory}</h1>
            <hr />
            <div className="container my-5">
                <div className="col d-flex justify-content-center">
                    <div className="col-mid-6 d-flex justify-content-center product" key={product._id}>
                        <img src={require(`../../Server/public/uploads/${name}`)} height="250px" className="card-img-top" alt={product.title}/>
                        {/* <img src={path+product.profile} height="250px" className="card-img-top" alt={product.title}/> */}
                    </div>
                    <div className="col-mid-6 mx-5 d-flex flex-column justify-content-center">
                        <h1 className='display-5 fw-bold'>{product.title}</h1>
                        <hr />
                        <h2 className='my-4'>{product.price}(ETB)</h2>
                        <p className='lead'>{product.description}</p>
                        <div className='d-flex'>
                            <button onClick={() => handleCart(product)} className='btn ms-5 btn-outline-dark w-25'>{cartBtn}</button>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-4 ">
                                <span className="fa">Go to Cart</span>
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
            </>
            : <><h3 className='text-center text-capitalize'>image Loading...</h3></>}
        </>
    )

}

export default ProductDetail;