import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../NavBarAfterLogin'
const Record = (props) => (
    <tr>
        {props.record.profile ? <>
            <td><img src={require(`../../../Server/public/uploads/${props.record.profile}`)} style={{ borderRadius: "50%" }} width="100px" height="100px" alt="profile" />
            </td>
        </>
            : <h3 className='text-center text-capitalize'>image Loading...</h3>}
        <td>{props.record.firstName}</td>
        <td>{props.record.lastName}</td>
        <td>{props.record.email}</td>
        <td>{props.record.address}</td>
        <td>{props.record.phone}</td>
        <td>
            <Link className="btn btn-primary mx-1 text-white" to={`/sing-up/${props.record._id}`}><i className='fa fa-pencil text-white'></i></Link> |
            <button className="btn btn-danger mx-1"
                onClick={() => {
                    props.deleteRecord(props.record._id);
                }}
            >
                <i className='fa fa-trash text-white'></i>
            </button> |
            <Link className="btn btn-success mx-1" to={`/single-user/${props.record._id}`}><i className='fa fa-eye text-white'></i></Link>
        </td>
    </tr>
);

const UserList = () => {
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();
    const win = window.sessionStorage;
    useEffect(() => {
        var x = win.getItem('email');
        const y = win.getItem('UserName');
        if (!x && !y)
            navigate('/');
    })
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/user/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);

    async function deleteRecord(id) {
        if (window.confirm(`Are you want to delete User ${id} sure?`)) {
            await fetch(`http://localhost:5000/${id}`, {
                method: "DELETE"
            });
            const newRecords = records.filter((el) => el._id !== id);
            setRecords(newRecords);
            alert("User successfully deleted")
        }
    }

    // This method will map out the records on the table
    function recordList() {
        return records.filter((val) => {
            // var x = val.firstName

            if (data.search === "") {
                return val
            }
            else if (val.firstName.toLowerCase().includes(data.search.toLowerCase()) || val.lastName.toLowerCase().includes(data.search.toLowerCase()) || val.email.toLowerCase().includes(data.search.toLowerCase()) || val.address.toLowerCase().includes(data.search.toLowerCase()) || val.phone.toLowerCase().includes(data.search.toLowerCase())) {
                return val
            }
            return null
        }).map((record) => {
            return (
                <Record
                    record={record}
                    deleteRecord={() => deleteRecord(record._id)}
                    key={record._id}
                />
            );
        });
    }
    const [data, setData] = useState({
        search: "",
    });
    const [error, setError] = useState("");
    const changeName = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        setError("");
    };
    // const Clear = (e) => {
    //     e.preventDefault()
    //     if(!data.search){
    //         setError('please enter search')
    //     }
    //     else{
    //     setData("")
    //     }
    // }
    return (
        <>
            <NavBar />
            <div className=' mx-5 mb-5 mt-5 container'>
                <div className='d-flex'>
                    <div className="buttons">
                        <NavLink to="/sing-up" className="btn btn-outline-white ms-2 user">
                            <i className="fa fa-plus user">Add user</i>
                        </NavLink>

                    </div>
                    <div>
                        <input
                            type="text"
                            name='search'
                            value={data.search}
                            onChange={changeName}
                            placeholder='Search'></input>
                        <i className="fa fa-search search"></i>
                        {/* <i className="fa fa-xmark-circle trash" onClick={Clear}></i> */}
                    </div>
                    <div className="mb-3">
                        {error && <div className="error_msg">{error}</div>}
                    </div>
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr className='table-dark'>
                            <th>User Profile</th>
                            <th>First Name</th>
                            <th>First Name</th>
                            <th>User Email</th>
                            <th>User Address</th>
                            <th>User Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{recordList()}</tbody>
                </table>
                {/* <input type="text" value={"record.firstName"} /> */}
            </div>
        </>
    )
}

export default UserList
