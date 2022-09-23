import React from 'react'
import { useSelector } from 'react-redux'
// import Product from './Product'
import { useDispatch } from 'react-redux'
import { delCart } from '../redux/action/index'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
function Cart() {
  // write name of the file not the name of the function
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleClose = (Item) => {
    dispatch(delCart(Item));
  }
  const cartItems = (cartItem) => {
    const name = cartItem.profile
    return (
      <>
      <NavBar/>
      {name? <>
      <div className='px-4 my-5 bg-light rounded-3 mx-5 my-5 me-5'
        key={cartItem.id}
      >
        <div className="container py-4">
          <button onClick={() => handleClose(cartItem)} className="btn btn-close float-end"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={require(`../../Server/public/uploads/${name}`)} alt={cartItem.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </div>
      </>
      : <><h1 className='text-center text-capitalize'>Loading...</h1></>}
      </>
    )
  }
  const emptyCart = () => {
    return (
      <>
      <NavBar/>
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h1>Your Cart is Empty</h1>
          </div>
        </div>
      </div>
      </>
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
