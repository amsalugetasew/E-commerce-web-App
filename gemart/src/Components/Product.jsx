import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action'
import DATA from '../Data'
import NavBar from './NavBarAfterLogin';
function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {proid} = useParams();
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);            
            // const productDetailss = DATA.filter(x => x.id == proid.id);
            // const productss = productDetailss[0];
            // console.log(productss);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
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
                    <button className='btn btn-dark px-4 py-2'
                        onClick={() => addProduct(product)}
                    >
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go to Cart</NavLink>
                </div>
            </>
        );
    }
    return (
        <>
        
        <NavBar/>
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
        </>
    )
}

export default Product