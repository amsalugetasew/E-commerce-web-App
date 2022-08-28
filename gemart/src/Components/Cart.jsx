import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { useDispatch } from 'react-redux'
import { addCart, delCart } from '../redux/action/index'
import { NavLink } from 'react-router-dom'
function Cart() {
  // write name of the file not the name of the function
  const state = useSelector((state) => state.handleCart);
  console.log(state)
  const dispatch = useDispatch();
  const handleClose = (Item) => {
    dispatch(delCart(Item));
  }
  const cartItems = (cartItem) => {
    return (
      <div className='px-4 my-5 bg-light rounded-3'
        key={cartItem.id}
      >
        <div className="container py-4">
          <button onClick={() => handleClose(cartItem)} className="btn btn-close float-end" aria-lebel="close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              {/* <h3>{Product.title}</h3>
            <p className="lead fw-bold">
                {Product.qty} X ${Product.price} = ${Product.qty * Product.price}
            </p> */}
              {/* <button className="btn btn-outline-dark me-4"
            onClick={() => handleButtone(product)}>
                <i className="fa fa-minus"></i>
            </button>
            <button className="btn btn-outline-dark me-4"
            onClick={() => handleButtone(product)}>
                <i className="fa fa-plus"></i>
            </button> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h1>Your Cart is Empty</h1>
          </div>
        </div>
      </div>
    )
  }
  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <div className='d-flex justify-content-center mb-5'>
          <NavLink to="/checkout" className="btn  btn-outline-dark btn-dark text-white w-25 ms-5 mx-5">
            <span className="lead">Proceed To Checkout</span>
          </NavLink>
          <NavLink to="/Products" className="btn btn-outline-dark btn-dark text-white me-5">
            <span className="lead">Go to Cart</span>
          </NavLink>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  )
}

export default Cart;
