import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBarAfterLogin'
const Record = (props) => (
    <tr>
        <td>{props.record.fullName}</td>
        <td>{props.record.email}</td>
        <td>{props.record.message}</td>
        <td>
            <Link className="btn btn-primary mx-1 text-white" to={`/sing-up/${props.record._id}`}><i className='fa fa-pencil text-white'></i></Link> |
            <button className="btn btn-danger mx-1"
                onClick={() => {
                    props.deleteRecord(props.record._id);
                }}
            >
               <i className='fa fa-trash text-white'></i> 
            </button> |
            <Link className="btn btn-success mx-1" to={`/feedback-detail/${props.record._id}`}><i className='fa fa-eye text-white'></i></Link>
        </td>
    </tr>
);

const UsersFeedBack = () => {
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();
    const win = window.sessionStorage;
useEffect(()=>{
  var x= win.getItem('email');
  const y= win.getItem('UserName');
  if(!x && !y)
  navigate('/');
})
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/contact/`);

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
    // console.log(records)

    // This method will delete a record

    async function deleteRecord(id) {
        if(window.confirm(`Are you want to delete User ${id} sure?`)){
        await fetch(`http://localhost:5000/contact/delete/${id}`, {
            method: "DELETE"
        });
        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
        alert("Message successfully deleted")
    }
    }

    // This method will map out the records on the table
    function recordList() {
        return records.map((record) => {
            return (
                <Record
                    record={record}
                    deleteRecord={() => deleteRecord(record._id)}
                    key={record._id}
                />
            );
        });
    }
    return (
        <>
            <NavBar />
            <div className=' mx-5 mb-5 mt-5 container'>
                {/* <i className="fa fa-sign-in me-1 text-white"><Link to="/sing-up" className='me-3 text-teal user'>Add user</Link></i> */}
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr className='table-dark'>
                            <th>Full Name</th>
                            <th>User Email</th>
                            <th>User Message</th>
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

export default UsersFeedBack
