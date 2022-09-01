import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
  const [error, setError] = useState("")
  const [data, setData] = useState({
    image: '',
    title: "",
    catagory: '',
    description: '',
    price: '',
  });
  const changeName = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setError("");
  };
  const navigate = useNavigate()
  const handleSubmite = (event) => {
    event.preventDefault();
    if (!data.image) {
      setError("Image Is Required");
    }
    if (!data.title) {
      setError("Title Is Required");
    }
    else if (data.catagory === "Select Product Catagory") {
      setError("Please Select Catagory")
    }
    else if (!data.description) {
      setError("Description Is Required")
    }
    else if (!data.price) {
      setError("Price Is Required")
    }    
    else {
      alert("Done"+data.catagory)
      navigate('/Products')
    }
  }

//   <input type="file" onChange={handleChange} />

// onChangeFile = event => {
// const image = event.target.files[0];
// if (!image) {
//  console.log('image is required');
//  return false;
//  }
//  if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
//    console.log('select valid image.');
//   return false;
//  }
  return (
    <div>
      <div className='col-md-10 d-flex mb-5 my-5 justify-content-center'>
        <div className="row  mx-5 px-5">
          <div className="">
            {/* <img src={Bg} width="200px" height="200px" alt="Contact Us" /> */}
          </div>
        </div>
        <div className="col-10  text-center align-content-center">
          <form onSubmit={handleSubmite} className='bg-white  align-content-center  mx-5 my-5'>
            <div className='d-flex  mx-5 px-5'>
            <div className="mb-3 me-3 col-6">
              <label htmlFor="image" className="form-label">Product Image</label>
              <input type="file"
                required
                value={data.image}
                onChange={changeName}
                className="form-control"
                id="image" name='image' />
            </div>
            <div className="mb-3 me-3 col-6">
              <label htmlFor="title" className="form-label">Product Title</label>
              <input type="text"
                value={data.title}
                onChange={changeName}
                className="form-control"
                id="title" name='title' placeholder="Jano" />
            </div>
            </div>
            <div className='d-flex mx-5 px-5'>
            <div className="mb-3 me-3 col-6">
              <label htmlFor="title" className="form-label">Product Catagory</label>
              <select name="catagory" id="catagory" className="form-control">
                <option value="Select Product Catagory" select>Select Product Catagory</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="gojam azene">Gojam Azene</option>
                <option value="jewelery">Jewelery</option>
              </select>
            </div>
            
            <div className="mb-3 me-3 col-6">
              <label htmlFor="price" className="form-label">Product Price</label>
              <input type="number"
                value={data.price}
                onChange={changeName}
                className="form-control"
                id="price" name='price' placeholder="ETB" />
            </div>
            </div>
            <div className='d-flex mx-5 px-5'>
            <div className="mb-3 me-3 col-6">
              <label htmlFor="rate" className="form-label">Rate</label>
              <input type="number"
                value={data.rate}
                onChange={changeName}
                className="form-control"
                id="rate" name='rate' placeholder="Rate" />
            </div>
            
            <div className="mb-3 me-3 col-6">
              <label htmlFor="count" className="form-label">Count</label>
              <input type="number"
                value={data.count}
                onChange={changeName}
                className="form-control"
                id="count" name='count' placeholder="Count" />
            </div>
            </div>
            <div className='mb-3 mx-5 px-5'>
              <label htmlFor="password" className="form-label">Product Description</label>
              <textarea cols="30" value={data.description}
                name='description'
                onChange={changeName}
                className="form-control" rows="2"></textarea>
            </div>
            <div className="mb-3">
              {error && <div className="error_msg">{error}</div>}
            </div>
            <button type='submit' className='btn btn-outline-primary btn-dark text-white text-uppercase w-50'>Add Product</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AddProduct
