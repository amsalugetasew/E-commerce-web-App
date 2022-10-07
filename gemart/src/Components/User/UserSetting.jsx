import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBarAfterLogin';

const UserSetting = () => {
    const navigate = useNavigate();
    const win = window.sessionStorage;
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [lname, setLname] = useState(null);
    const [image, setImage] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    useEffect(() => {
        var x = win.getItem('email');
        const y = win.getItem('UserName');
        setEmail(win.email)
        setName(win.UserName)
        setLname(win.LastName)
        setImage(win.profile)
        setPhone(win.phone)
        setAddress(win.address)
        if (!x && !y){
            navigate('/');
        }
            
    },[win, navigate, win.email, win.UserName, win.email, win.profile, win.lname])
    return (
        <div>
            <NavBar />
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8 mx-auto">
                        <h2 class="h3 mb-4 page-title">Settings</h2>
                        <div class="my-4">
                            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Profile</a>
                                </li>
                            </ul>
                            {name ?
                                <form>
                                    <div class="row mt-5 align-items-center">
                                        <div class="col-md-3 text-center mb-5">
                                            <div class="avatar avatar-xl">
                                            {image?  <img height='250px' wedth='250px' src=
                                                {require(`../../../Server/public/uploads/${image}`)}alt="..." class="avatar-img rounded-circle" />
                                                :
                                                <img src={"https://bootdey.com/img/Content/avatar/avatar6.png"} alt="..." class="avatar-img rounded-circle" />}
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row align-items-center">
                                                <div class="col-md-7">
                                                    <h4 class="mb-1">{name} {lname}</h4>
                                                    <p class="small mb-3"><span class="badge badge-dark text-dark mx-5">{address}</span></p>
                                                </div>
                                            </div>
                                            <div class="row mb-4">
                                                <div class="col-md-7">
                                                    <p class="text-muted">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at,
                                                        pretium blandit sapien.
                                                    </p>
                                                </div>
                                                <div class="col">
                                                    <p class="small mb-0 text-muted">Nec Urna Suscipit Ltd</p>
                                                    <p class="small mb-0 text-muted">P.O. Box 464, 5975 Eget {address}</p>
                                                    <p class="small mb-0 text-muted">{phone}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-4" />
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="firstname">Firstname</label>
                                            <input type="text" id="firstname" class="form-control" placeholder="Getasew" value={name} />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="lastname">Lastname</label>
                                            <input type="text" id="lastname" class="form-control" placeholder="Amsalu" value={lname}/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="brown@asher.me" value={email}/>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress5">Address</label>
                                        <input type="text" class="form-control" id="inputAddress5" placeholder="P.O. Box 464, 5975 Eget Avenue" value={address} />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputCompany5">Company</label>
                                            <input type="text" class="form-control" id="inputCompany5" placeholder="Nec Urna Suscipit Ltd" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputState5">State</label>
                                            <select id="inputState5" class="form-control">
                                                <option selected="">Choose...</option>
                                                <option value='Amhara'>Amhara</option>
                                                <option value='Tigray'>Tigray</option>
                                                <option value='Afar'>Afar</option>
                                                <option value='Oromia'>Oromia</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label for="inputZip5">Zip</label>
                                            <input type="text" class="form-control" id="inputZip5" placeholder="196" />
                                        </div>
                                    </div>
                                    <hr class="my-4" />
                                    <div class="row mb-4">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputPassword4">Old Password</label>
                                                <input type="password" class="form-control" id="inputPassword5" />
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword5">New Password</label>
                                                <input type="password" class="form-control" id="inputPassword5" />
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword6">Confirm Password</label>
                                                <input type="password" class="form-control" id="inputPassword6" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <p class="mb-2">Password requirements</p>
                                            <p class="small text-muted mb-2">To create a new password, you have to meet all of the following requirements:</p>
                                            <ul class="small text-muted pl-4 mb-0">
                                                <li>Minimum 8 character</li>
                                                <li>At least one special character</li>
                                                <li>At least one number</li>
                                                <li>Can’t be the same as a previous password</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Save Change</button>
                                </form>
                                : <h5>Loading</h5>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserSetting
