import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBarAfterLogin'

const ViewItem = () => {
    return (
        <div>
            <NavBar />
            <div className=' mx-5 mb-5 mt-5'>
                <div className="buttons">
                    <NavLink  to="/add-item" className="btn btn-outline-white ms-2 user">
                        <i className="fa fa-user-plus user">add product</i>
                    </NavLink>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Item Category</th>
                            <th scope="col">Item Price (ETB)</th>
                            <th scope="col">Item Image</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewItem
