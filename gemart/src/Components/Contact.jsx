import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Bg from './assests/habesha.jpg'
import NavBar from './NavBar'
// import "./App.css"
function Contact() {
  const { id } = useParams();
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [data, setData] = useState({
    email: "",
    Fname: '',
    message: '',
  });
  const navigate = useNavigate();
  const [records  ] = useState([]);
  const changeName = ({ currentTarget: input }) => {
    var name = input.name;
    var val = input.value
    setData({ ...data, [name]: val });
    setError("");
  };
  const handleSave = async (event) => {
    event.preventDefault();
    // const Profile = inputRef6.current.value;
    const newPerson = {...data}
    if (!data.Fname) {
      setError("First Name Is Required");
    }
    else if (!data.email) {
      setError("Email Is Required")
    }
    else if (!data.message) {
      setError("Message Is Required")
    }
    else {
      try {
        await fetch("http://localhost:5000/contact/add", {
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
        alert(`${data.Fname} Successfully Registered `)
        navigate('/')
    }
      catch (error) {
        if (error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }

    }
  }
  const handleUpdate = () =>{

  }
  return (
    <div>
      <NavBar />
      <div className="container mb-4">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className='col-md-10 d-flex'>
          <div className="row  mx-5">
            <div className="col-md 0 d-flex justify-content-center">
              <img src={Bg} width="300px" height="300px" alt="Contact Us" />
            </div>
          </div>
          <div className="col-6 justify-content-center text-center">
            <form onSubmit={id ? handleUpdate : handleSave} >
              <div className="mb-3">
                <label htmlFor="fullName"
                  className="form-label">Full Name</label>
                <input type="text"
                  ref={inputRef}
                  onChange={changeName}
                  value={data.Fname || records.fullName}
                  className="form-control"
                  id="fullName"
                  name='Fname'
                  placeholder="Getasew Amsalu" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email"
                name='email'
                  ref={inputRef1}
                  onChange={changeName}
                  value={data.email || records.email}
                  className="form-control"
                  id="email"
                  placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <input
                type='text'
                  ref={inputRef2}
                  name='message'
                  onChange={changeName}
                  value={data.message || records.message}
                  className="form-control"
                  id="message" rows="3"></input>
              </div>
              <input type='submit'
                            value={id ? "Edit Message" : "Send Message"}
                            className='btn btn-outline-primary btn-dark text-white text-uppercase mb-4 submit'
                        />
            </form>
          </div>
          <div className="mb-2">
            {error && <div className="error_msg">{error}</div>}
          </div>
        </div>
      </div>
      <input type="text" placeholder='number1' />
    </div>
  )
}

export default Contact
