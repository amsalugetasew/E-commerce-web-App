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
                                <NavLink className="nav-link text-white active" aria-current="page" to="/user-list">Manage User</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/view-item">Manage Product</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/view-item">View Product</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                            </li>
                            </ul>
                            <div className="buttons">
                                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-shopping-cart me-1 fa-bold text-white">Order Notification ({state.length})</i>                                     
                                </NavLink>
                                <NavLink to="/" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-shopping-cart me-1 fa-bold text-white">Logout (0)</i>                                     
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