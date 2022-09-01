import React, { useState } from 'react'
import Bg from '../Components/assests/habesha.jpg'
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
  const handleSubmite = (event) => {
    event.preventDefault();
    if (!data.image) {
      setError("Image Is Required");
    }
    if (!data.title) {
      setError("Title Is Required");
    }
    else if (!data.catagory) {
      setError("Catagory Is Required")
    }
    else {
      alert("Done")
      // navigate('/add-item')
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
      <div className='col-md-10 d-flex mb-5 my-5'>
        Add Item

        <div className="row  mx-5">
          <div className="col-md 5 d-flex justify-content-center my-5 mx-5">
            <img src={Bg} width="300px" height="300px" alt="Contact Us" />
          </div>
        </div>
        <div className="col-6 justify-content-center text-center align-content-center">
          <form onSubmit={handleSubmite} className='bg-white justify-content-center align-content-center  mx-5 my-5'>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Product Image</label>
              <input type="file"
                required
                value={data.image}
                onChange={changeName}
                className="form-control"
                id="image" name='image' />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Product Title</label>
              <input type="text"
                value={data.title}
                onChange={changeName}
                className="form-control"
                id="title" name='title' placeholder="Jano" />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Product Catagory</label>
              <select name="catagory" id="catagory" className="form-control">
                <option value="Select Product Catagory">Select Product Catagory</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="gojam azene">Gojam Azene</option>
                <option value="jewelery">Jewelery</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Product Description</label>
              <textarea cols="30" value={data.description}
                name='description'
                onChange={changeName}
                className="form-control" rows="2"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Product Price</label>
              <input type="number"
                value={data.price}
                onChange={changeName}
                className="form-control"
                id="price" name='price' placeholder="ETB" />
            </div>
            <div className="mb-3">
              <label htmlFor="rate" className="form-label">Rate</label>
              <input type="number"
                value={data.rate}
                onChange={changeName}
                className="form-control"
                id="rate" name='rate' placeholder="Rate" />
            </div>
            <div className="mb-3">
              <label htmlFor="count" className="form-label">Count</label>
              <input type="number"
                value={data.count}
                onChange={changeName}
                className="form-control"
                id="count" name='count' placeholder="Count" />
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
