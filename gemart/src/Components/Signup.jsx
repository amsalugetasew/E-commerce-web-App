import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Bg from './assests/habesha.jpg'
const Record = (props) => (
    <tr>
      <td>{props.record.firstName}</td>
      <td>{props.record.lastName}</td>
      <td>{props.record.email}</td>
      {/* <td>{props.record.password}</td> */}
      {/* <td>{props.record.confirmPassword}</td>    */}
      <td>{props.record.level}</td>
      <td>
        <Link className="btn btn-link" to={`/Home/Other/Edit/${props.record._id}`}>Edit</Link> |
        <button className="btn btn-link"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
   );
const Signup = () => {
    const [error, setError] = useState("");
    const [data, setData] = useState({
        email: "",
        Fname: '',
        Lname: '',
        password: '',
        cpassword: ''
    });
    const navigate = useNavigate()
    const changeName = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        setError("");
    };
    const handleSubmite = async(event) => {
        event.preventDefault();
        const newPerson = { ...data };
        if (!data.Fname ) {
            setError("First Name Is Required");
        }
        else if (!data.Lname ) {
            setError("Last Name Is Required");
        }
        else if (!data.email) {
            setError("Email Is Required")
        }
        else if (!data.password) {
            setError("Password Is Required")
        }
        else if (data.password.trim().length < 8) {
            setError("Password should be Strong")
        }
        else if (!data.cpassword) {
            setError("Confirmation Password Is Required")
        }
        else if (data.cpassword.trim().length < 8) {
            setError("Confirmation Password should be Strong")
        }
        else if (data.cpassword !== data.password) {
            setError("Password is not Matched")
        }
        else {
            try{
                await fetch("http://localhost:5000/users/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newPerson),
                })
                    .catch(error => {
                        window.alert(error);
                        if (error.response &&
                            error.response.status >= 400 &&
                            error.response.status <= 500
                        ) {
                            setError(error.response.data.message);
                        }
                        return;
                    });
                // setData({ firstName: "", lastName: "", email: "",  password: "", Cpassword: "" });
                alert(`User Successfully Registered ${data.Fname}`)
                navigate('/sign-in')     
                }
                catch(error){
                    if(error.response && 
                        error.response.status >= 400 &&
                        error.response.status <= 500
                        ){
                            setError(error.response.data.message);
                        }
                }
            
        }
    }
    const [records, setRecords] = useState([]);
    useEffect(() => {
        async function getRecords() {
          const response = await fetch(`http://localhost:5000/record/`);
      
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
      console.log(records)

       // This method will delete a record
       
 async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });
  
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
    alert("deleted")
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
        <div>
            <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>First Name</th>
           <th>First Name</th>
           <th>User Email</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
            <div className='col-md-10 d-flex mb-5 my-5'>
                <div className="row  mx-5">
                    <div className="col-md 5 d-flex justify-content-center mx-5 my-5">
                        <img src={Bg} width="300px" height="300px" alt="Contact Us" />
                    </div>
                </div>
                <div className="col-6 justify-content-center text-center align-content-center">
                    <form onSubmit={handleSubmite} className='bg-white justify-content-center align-content-center  mx-5 my-5'>
                        <div className="mb-3">
                            <label htmlFor="Fname" className="form-label">First Name</label>
                            <input type="text" 
                            value={data.Fname}
                            name='Fname'
                            onChange={changeName}
                            className="form-control" id="Fname" placeholder="First Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Lname" className="form-label">Last Name</label>
                            <input type="text"
                            value={data.Lname}
                            name='Lname'
                            onChange={changeName}
                             className="form-control" id="Lname" placeholder="Last Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Phone" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="Phone" placeholder="Last Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email"
                            value={data.email}
                            onChange={changeName}
                            name="email"
                             className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                            autoComplete='current-password'
                            placeholder='Password'
                            value={data.password}
                            name='password'
                            onChange={changeName}
                            className="form-control" id="password" type='password' rows="3" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword" className="form-label">Conformation Password</label>
                            <input
                            autoComplete='on'
                            placeholder='Confirmation Password'
                            value={data.cpassword}
                            name='cpassword'
                            onChange={changeName}
                             className="form-control" id="cpassword" type='password' rows="3" />
                        </div>
                        <div className="mb-3">
                            {error && <div className="error_msg">{error}</div>}
                        </div>
                        <button type='submit' className='btn btn-outline-primary btn-dark text-white text-uppercase w-25'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup