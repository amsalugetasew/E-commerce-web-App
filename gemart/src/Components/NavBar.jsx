import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
import Bg from './assests/logo.png'
function NavBar() {
    const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark py-3  shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        {/* Habesha Collection */}
                        <img src={Bg} alt="habesha logo" width='50px' height='50px' />
                    </NavLink>
                    <button className="navbar-toggler" type="buttonhref" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/Products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                            </li>
                            </ul>
                            <div className="buttons">
                                <NavLink to="/sign-in" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-sign-in me-1 text-white">Login</i> 
                                </NavLink>
                                {/* <NavLink to="/sing-up" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-user-plus me-1 text-white">Register</i> 
                                </NavLink> */}
                                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-shopping-cart me-1 fa-bold text-white">Cart {state.length?<span className="red">({state.length}) </span>: <>({state.length})</>} </i>                                     
                                </NavLink>
                                {/* <i class="fa-solid fa-user">x</i> */}
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar