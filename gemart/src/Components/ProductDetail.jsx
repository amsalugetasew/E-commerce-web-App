
import React from 'react'
// import {DATA} from '../Data'
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action/index'
// import {DATA} from '../Data'
var data = [{
    "id": 1,
    "title": "Jano",
    "price": 109.95,
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
    "price": 22.3,
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
    "price": 55.99,
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
    "price": 15.99,
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
    "price": 695,
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
    "price": 168,
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
    "price": 9.99,
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
    "price": 10.99,
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
    "price": 64,
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
    "price": 64,
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
    "price": 109,
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
    "price": 109,
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
    "price": 114,
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
    "price": 599,
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
    "price": 999.99,
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
    "price": 56.99,
    "description": "Gondar Women's cloth and interesting Mekenet with red, green, yellow, and black",
    "image": require('../Women/m1.jpg'),
    "rating": { "rate": 2.6, "count": 235 }
},
{
    "id": 16,
    "title": "Gondar Women's cloth and interesting Mekenet",
    "price": 29.95,
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
    "price": 39.99,
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
    "price": 9.85,
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
    "price": 7.95,
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
    "price": 12.99,
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
    "price": 12.99,
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
    "price": 12.99,
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
    "price": 12.99,
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

function ProductDetail() {
    const [cartBtn, setcartBtn] = useState("Add to Cart");
    const proid = useParams();
       // true: Require triple equals (===) for comparison
    // const productDetail = DATA.filter(x => x.id == proid.id);
    const productDetail = data.filter(x => (x.id).toString()  === (proid.id).toString() );
    
    const product = productDetail[0];
    // console.log(DATA)
    // console.log(data)
    const dispatch = useDispatch();
    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addCart(product))
            setcartBtn("Remove from Cart")
        }
        else {
            dispatch(delCart(product))
            setcartBtn("Add to Cart")
        }
    }
    return (
        <>
            <h1 className='text-center text-capitalize'>{product.category}</h1>
            <hr />
            <div className="container my-5">
                <div className="col d-flex justify-content-center">
                    <div className="col-mid-6 d-flex justify-content-center product">
                    {/* <img src="/Women/m1.jpg" alt="w1" /> */}
                        <img height="250px" src={product.image} alt={product.title} />
                    </div>
                    <div className="col-mid-6 mx-5 d-flex flex-column justify-content-center">
                        <h1 className='display-5 fw-bold'>{product.title}</h1>
                        <hr />
                        <h2 className='my-4'>{product.price}(ETB)</h2>
                        <p className='lead'>{product.description}</p>
                        <div className='d-flex'>
                            <button onClick={() => handleCart(product)} className='btn ms-5 btn-outline-dark w-25'>{cartBtn}</button>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-4 ">
                                <span className="fa">Go to Cart</span>
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductDetail;