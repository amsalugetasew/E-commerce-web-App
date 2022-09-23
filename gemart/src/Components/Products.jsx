import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom';
function Products() {
    // console.log(DATA);
    const [data, setData] = useState([]);
    // const [records, setRecords] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [componentMounted, setComponentMounted] = useState(true);
    // let componentMounted = true;
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:5000/product/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            if (componentMounted) {
                setData(records)
                setFilter(records)
                setLoading(false);
            }
            return () => {
                setComponentMounted(false);
            }
        }
        getProduct();
    }, [componentMounted]);
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }
    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.catagory === cat);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewlery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("gojam azene")}>Gojam Azene</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-4">
                            <div className="card h-100 text-center p-4" key={product._id}>
                                {product.profile ? <>
                                    <img src={require(`../../Server/public/uploads/${product.profile}`)} height="250px" className="card-img-top" alt={product.title} />
                                </>
                                    : <><h3 className='text-center text-capitalize'>image Loading...</h3></>}
                                <div className="card-body">
                                    <h5 className="mb-0 fw-bold">{product.title.substring(0, 15)}...</h5>
                                    <p className="lead fw-bold money">{product.price} ETB</p>
                                    <NavLink to={`/products/${product._id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
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

export default Products