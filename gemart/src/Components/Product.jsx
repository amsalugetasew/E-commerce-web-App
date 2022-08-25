import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                setProduct(await response.json());
                setLoading(false);
        }
        getProduct();
    }, []);
    const Loading = () => {
        return (
            <>
            Loading ...
            </>
        );
    }
    const ShowProducts = () => {
        return (
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width={400} />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    {product.price}
                </h3>
                <p className="load">{product.description}</p>
                <button className='btn btn-dark px-4 py-2'>Add to Cart</button>
                <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go to Cart</NavLink>
            </div>
            </>
        );
    }
  return (
    <div>
         <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
    </div>
  )
}

export default Product