import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import NavBar from './NavBarAfterLogin'
// https://www.youtube.com/watch?v=paqXfTjznc4
const SingleUser = () => {
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();
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
    
    async function deleteRecord(id) {
        if (window.confirm('Are you want to delete this record sure?')) {
            await fetch(`http://localhost:5000/product/${id}`, {
                method: "DELETE"
            });
            const newRecords = records.filter((el) => el._id !== id);
            setRecords(newRecords);
            alert("Successfully deleted")
            navigate('/user-list')
        }
    }
    const name = records.profile
    return (
        <>
            <NavBar />
            {name? 
        <>
            <div className='card mx-5 w-50 mt-5 mb-5' id='card'>
            <div className=' mx-5 mb-5 mt-5 justify-content-md-center'>
            <div className="buttons">
                    <NavLink  to="/view-item" className="btn btn-outline-white user">
                        <i className="fa fa-arrow-left user"> back</i>
                    </NavLink>
                </div>
                <div className='gt d-flex w-50'>
                    <div className='left'>
                        <div>
                            <img src={require(`../../Server/public/uploads/${records.profile}`)} alt="gt" className='profile' width="250px" height="250px" />
                            </div>

                    </div>
                    <div className='right me-5 mx-5'>
                        <Link className="btn btn-primary mx-1 text-white" to={`/add-item/${id}`}><i className='fa fa-pencil text-white'></i></Link> |
                        <button className="btn btn-danger mx-1"
                            onClick={() => {
                                deleteRecord(id);
                            }}
                        >
                            <i className='fa fa-trash text-white'></i>
                        </button>
                        <div id='data'><span className='me-2 Lable'>Id:</span> <strong>{id}</strong></div>
                        <div id='data'><span className='me-2 Lable'>Product Name:</span> <strong>{records.title}</strong></div>
                        <div id='data'><span className='me-2 Lable'>Catagory: </span> <strong>{records.catagory}</strong></div>
                        <div id='data'><span className='me-2 Lable'>Price:</span> <strong>{records.price}</strong></div>
                        <div id='data'><span className='me-2 Lable'>Rate:</span> <strong>{records.rate}</strong></div>
                        <div id='data'><span className='me-2 Lable'>Count:</span> <strong>{records.count}</strong></div>
                        <div id='data'><span className='me-2 Lable'>Description:</span> <strong>{records.description}</strong></div>
                    </div>
                </div>

            </div>
            </div>
            </>
            : <><h1 className='text-center text-capitalize'>Loading...</h1></>}
        </>
    )
}

export default SingleUser
