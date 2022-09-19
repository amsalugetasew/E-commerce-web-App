import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
// import {DATA} from '../Data'
var datas = [{
    "id": 1,
    "title": "Jano",
    "price": 3400,
    "description": "Amhara Men traditional clothing for Gondar, Gojam, and Shewa",
    "category": "men's clothing",
    "image": require('../Men/m1.png'),
    
    "rating":
    {
        "rate": 3.9,
        "count": 120
    }
},
{
    "id": 2,
    "title": "Gondar Couples cloths",
    "price": 2230,
    "description": "Couples Gondar Cloths for sale and rent",
    "category": "men's clothing",
    "image": require('../Men/m2.jpg'),
    "rating":
    {
        "rate": 4.1,
        "count": 259
    }
},
{
    "id": 3,
    "title": "Tradditional Amhara clothing",
    "price": 3000,
    "description": "Tradditional Amhara clothing",
    "category": "men's clothing",
    "image": require('../Men/m3.jpg'),
    "rating":
    {
        "rate": 4.7,
        "count": 500
    }
},
{
    "id": 4,
    "title": "Mens Epiphany group cloth",
    "price": 1560,
    "description": "Gondar Ethiopia men's dressed in traditional attire with pilgrim rod celebrate Epiphany/Timket festival",
    "category": "men's clothing",
    "image": require('../Men/m4.jpg'),
    "rating":
    {
        "rate": 2.1,
        "count": 430
    }
},
{
    "id": 5,
    "title": "Hand braclet",
    "price": 67090,
    "description": "Traditional Ethiopian Hand braclet",
    "category": "jewelery",
    "image": require('../Jewelry/j1.jpg'),
    "rating":
    {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 6,
    "title": "Necklace Amhara Map",
    "price": 16809,
    "description": "Necklace designed on the shape of Amhara Map",
    "category": "jewelery",
     "image": require('../Jewelry/j2.PNG'),
    "rating":
    {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 7,
    "title": "Necklace Ethiopia",
    "price": 100000,
    "description": "Necklace designed on the shape of Ethiopia Map",
    "category": "jewelery",
    "image": require('../Jewelry/j3.PNG'),
    "rating":
    {
        "rate": 3,
        "count": 400
    }
},
{
    "id": 8,
    "title": "Necklace Africa Map",
    "price": 50990,
    "description": "Necklace designed on the shape of Africa Map",
    "category": "jewelery",
    "image": require('../Jewelry/j4.jpg'),
    "rating":
    {
        "rate": 1.9,
        "count": 100
    }
},
{
    "id": 9,
    "title": "Dark green gojjam azene",
    "price": 3783.07,
    "description": "Dark green gojam azene",
    "category": "gojam azene",
    "image": require('../Gojjam/g1.PNG'),
    "rating":
    {
        "rate": 3.3,
        "count": 203
    }
},
{
    "id": 9,
    "title": "Blue bernos gojam Azene ",
    "price": 2400,
    "description": "Blue bernos gojjam Azene",
    "category": "gojam azene",
    "image": require('../Gojjam/g7.jpg'),
    "rating":
    {
        "rate": 3.3,
        "count": 203
    }
},
{
    "id": 9,
    "title": "greena and blue banket",
    "price": 3200,
    "description": "greena and blue banket",
    "category": "gojam azene",
    "image": require('../Gojjam/g5.PNG'),
    "rating":
    {
        "rate": 3.3,
        "count": 203
    }
},
{
    "id": 10,
    "title": "Ethiopian flag gojam azene",
    "price": 2700,
    "description": "Ethiopian flag gojam azene",
    "category": "gojam azene",
    "image": require('../Gojjam/g2.jpg'),
    "rating":
    {
        "rate": 2.9,
        "count": 470
    }
},
{
    "id": 11,
    "title": "Yellow and blue black gojam azene blanket",
    "price": 3500,
    "description": "Yellow and blue black gojam azene blanket",
    "category": "gojam azene",
    "image": require('../Gojjam/g3.jpeg'),
    "rating":
    {
        "rate": 4.8,
        "count": 319
    }
},
{
    "id": 12,
    "title": "Red and Black black gojam azene blanket",
    "price": 3000,
    "description": "Red and Black black gojam azene blanket",
    "category": "gojam azene",
    "image": require('../Gojjam/g4.png'),
    "rating":
    {
        "rate": 4.8,
        "count": 400
    }
},
{
    "id": 13,
    "title": "Gojam Azen blanket",
    "price": 1500,
    "description": "Gojam Azen blanket",
    "category": "gojam azene",
    "image": require('../Gojjam/g3.PNG'),
    "rating":
    {
        "rate": 2.9,
        "count": 250
    }
},
{
    "id": 14,
    "title": "Gojam Azene Jacket",
    "price": 1500,
    "description": "Gojam Azene Jacket",
    "category": "gojam azene",
    "image": require('../Gojjam/g2.PNG'),
    "rating":
    {
        "rate": 2.2,
        "count": 140
    }
},
{
    "id": 15,
    "title": "Gondar Women's cloth and interesting Mekenet",
    "price": 2900,
    "description": "Gondar Women's cloth and interesting Mekenet with red, green, yellow, and black",
    "image": require('../Women/m1.jpg'),
    "rating": { "rate": 2.6, "count": 235 }
},
{
    "id": 16,
    "title": "Gondar Women's cloth and interesting Mekenet",
    "price": 3500,
    "description": "Gondar Women's cloth and interesting Mekenet with red, green, yellow, and black",
    "category": "women's clothing",
    "image": require('../Women/m2.jpg'),
    "rating":
    {
        "rate": 2.9,
        "count": 340
    }
},
{
    "id": 17,
    "title": "Gondar Women's cloth and interesting Mekenet",
    "price": 5000,
    "description": "Gondar Women's cloth and interesting Mekenet with red, green, yellow, and black",
    "image": require('../Women/m7.jpg'),
    "rating":
    {
        "rate": 3.8,
        "count": 679
    }
},
{
    "id": 18,
    "title": "Gondar Women's cloth and interesting Mekenet",
    "price": 3500,
    "description": "Gondar Women's cloth and interesting Mekenet with red, green, yellow, and black",
    "category": "women's clothing",
    "image": require('../Women/m15.jpg'),
    "rating":
    {
        "rate": 4.7,
        "count": 130
    }
},
{
    "id": 19,
    "title": "Gondar Women's cloth and interesting Mekenet",
    "price": 3500,
    "description": "Gondar Women's cloth and interesting Mekenet with red, green, yellow, and black",
    "category": "women's clothing",
    "image": require('../Women/m5.jpg'),
    "rating":
    {
        "rate": 4.5,
        "count": 146
    }
},
{
    "id": 20,
    "title": "Gondar Women's cloth with red Mekenet",
    "price": 3400,
    "description": "Gondar Women's cloth with red Mekenet",
    "category": "women's clothing",
    "image": require('../Women/m6.jpg'),
    "rating":
    {
        "rate": 3.6,
        "count": 145
    }
},
{
    "id": 21,
    "title": "Gondar Women's cloth with red Mekenet",
    "price": 4000,
    "description": "Gondar Women's cloth with red Mekenet",
    "category": "women's clothing",
    "image": require('../Women/m13.jpg'),
    "rating":
    {
        "rate": 3.6,
        "count": 145
    }
},
{
    "id": 22,
    "title": "Gondar Women's cloth with red Mekenet",
    "price": 3600,
    "description": "Gondar Women's cloth with red Mekenet",
    "category": "women's clothing",
    "image": require('../Women/m10.jpg'),
    "rating":
    {
        "rate": 3.6,
        "count": 145
    }
},
{
    "id": 23,
    "title": "Gondar Women's cloth with red Mekenet",
    "price": 3500,
    "description": "Gondar Women's cloth with red Mekenet",
    "category": "women's clothing",
    "image": require('../Women/m8.jpg'),
    "rating":
    {
        "rate": 3.6,
        "count": 145
    }
},
{
    "id": 24,
    "title": "Gondar Women's cloth with red Mekenet",
    "price": 12.99,
    "description": "Gondar Women's cloth with red Mekenet",
    "category": "women's clothing",
    "image": require('../Women/m9.jpg'),
    "rating":
    {
        "rate": 3.6,
        "count": 145
    }
}
];
function Products() {
    // console.log(DATA);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [componentMounted,setComponentMounted] = useState(true);
    // let componentMounted = true;
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            // const response = await fetch('https://fakestoreapi.com/products');
            // console.log(datas);
            // const ress = datas
            // console.log(ress) 
            // const resss =  ress.clone().json();
            if (componentMounted) {
                // setData(await response.clone().json());
                setData(datas)
                // setFilter(await response.json());
                setFilter(datas)
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
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }
    const filterProduct = (cat) =>{
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewlery</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("gojam azene")}>Gojam Azene</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-4">
                            <div className="card h-100 text-center p-4" key={product.id} >
                                <img src={product.image} height="250px" className="card-img-top" alt={product.title}/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                    <p className="card-text lead fw-bold">{product.price} ETB</p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
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
            <NavBar/>
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