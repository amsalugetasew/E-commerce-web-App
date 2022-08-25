import React from 'react'
import {useSelector} from 'react-redux'
import Product from './Product'
import {useDispatch} from 'react-redux'
import {delCart} from '../redux/action/index'
function Cart() {
    const state = useSelector((state) => state.addItem);
    const dispatch = useDispatch();
  return (
    <div className='px-4 my-5 bg-light rounded-3'
    //  key={cartItem.id}
     >
        <div className="container py-4">
            <button className="btn btn-close float-end" aria-lebel="close"></button>
      <div className="row justify-content-center">
        <div className="col-md-4">
            <img src="{cartItem.img}" alt="{cartItem.title}" height="200px" width="180px"/>
        </div>
        {/* <div className="col-md-4">
            <h3>{Product.title}</h3>
            <p className="lead fw-bold">
                {Product.qty} X ${Product.price} = ${Product.qty * Product.price}
            </p>
            <button className="btn btn-outline-dark me-4"
            onClick={() => handleButtone(product)}>
                <i className="fa fa-minus"></i>
            </button>
            <button className="btn btn-outline-dark me-4"
            onClick={() => handleButtone(product)}>
                <i className="fa fa-plus"></i>
            </button>
        </div> */}
      </div>
      </div>
    </div>
  )
}

export default Cart
