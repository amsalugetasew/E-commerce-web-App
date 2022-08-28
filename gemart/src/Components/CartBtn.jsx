import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function CartBtn() {
    const state = useSelector((state) => state.handleCart)
    console.log(state)
  return (
    <div>
      <NavLink to ="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa">Cart ({state.length})</span>
      </NavLink>
    </div>
  )
}

export default CartBtn
