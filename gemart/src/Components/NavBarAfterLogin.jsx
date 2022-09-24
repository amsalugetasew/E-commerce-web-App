import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import Bg from './assests/logo.png'
import { useEffect, useState } from "react";
import './Style.css'
function NavBar() {
    const win = window.sessionStorage;
    const state = useSelector((state) => state.handleCart);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [image, setImage] = useState(null);
    useEffect(() => {
        setEmail(win.email)
        setName(win.UserName)
        setImage(win.profile)
    }, [win.email, win.UserName, email, win.profile])
    const localStorageClear = () => {
        localStorage.clear();
        sessionStorage.clear()
    }
    // useEffect(() =>{
    //     if(email){
    //         alert(data)
    //     }
    // })
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark py-1  shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        <img src={Bg} alt="habesha logo" width='50px' height='50px' />
                    </NavLink>
                    <button className="navbar-toggler" type="buttonhref" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item" id="teal">
                                <NavLink className="nav-link text-white active" aria-current="page" to="/user-list">Manage User</NavLink>
                            </li>
                            <li className="nav-item" id="teal">
                                <NavLink className="nav-link text-white" to="/view-item">Manage Product</NavLink>
                            </li>
                        </ul>
                        {/* <div className="dropdown">
                            <NavLink to="#" className="btn btn-outline-dark" id="teal">
                                <div className="text-white" ><i className="fa fa-shopping-cart me-1 text-white"></i>Order Notification{state.length?<span className="red">({state.length}) </span>: <>({state.length})</>} </div>
                            </NavLink>                          
                        </div> */}
                    </div>
                </div>
                <div className="dropdown col-md-2">
                            <NavLink to="#" className="btn btn-outline-dark" id="teal">
                                <div className="text-white" ><i className="fa fa-shopping-cart me-1  text-white"></i>Order Notification{state.length?<span className="red">({state.length}) </span>: <>({state.length})</>} </div>
                            </NavLink>  
                            <div class="dropdown-content bg-dark">
                                    {state.map((item)=>{
                                        return(
                                            <>
                                        <NavLink to="#" className="btn btn-outline-dark" id="teal">
                                        <div className="text-white" id="crimson"><i className="fa fa-shopping-cart me-1 text-white"></i>{item.title}</div>
                                    </NavLink>  
                                    </>
                                         );
                                     })} 
                                    {/* <NavLink to="#"><i className="fa fa-edit"></i> Change Password</NavLink>
                                    <div onClick={localStorageClear}><NavLink to="/">
                                        <i className="fa fa-sign-out me-1">
                                    </i>Logout</NavLink> </div> */}
                                </div>                          
                        </div>
                {name ?
                            <div class="dropdown">
                                <div class="dropbtn">{name}</div>
                                <div  id="teal"><img height="50px" width="50px" className='profile' src={require(`../../Server/public/uploads/${image}`)} alt="profile" /></div>
                                <div class="dropdown-content bg-dark">
                                    <NavLink to="/profile-setting"><i className="fa fa-user"></i>Profile </NavLink>
                                    <NavLink to="#"><i className="fa fa-edit"></i> Change Password</NavLink>
                                    <div onClick={localStorageClear}><NavLink to="/">
                                        <i className="fa fa-sign-out me-1">
                                    </i>Logout</NavLink> </div>
                                </div>
                            </div> : <h5>Loading</h5>
                            }
            </nav>
        </div>
    )
}

export default NavBar