import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import NavBar from './NavBarAfterLogin';

const SingleContactInfo = () => {
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(()=>{
    const getRecords = async () => {
        const res = await fetch(`http://localhost:5000/contact/${id.toString()}`, {
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
    getRecords()
})
    
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


//   const name = records.message
    return (
        <>
            <NavBar />
            
        </>
    )
}

export default SingleContactInfo