import { useState } from "react"
import DATA from '../Data'
import { useParams } from "react-router-dom"
import CartBtn from "./CartBtn";
import { Dispatch, useDispatch } from "react-redux";
import {addCart, delCart} from '../redux/action/index'
const ProductDetail = () => {
const [cartBtn, setcartBtn] = useState("Add to Cart");
// Now we need a product id which is pass from the product page.
const proid = useParams();
const productDetail = DATA.filter(x=>x.id == proid.id);
const product = productDetail[0];
console.log(product);
const dispatch =  useDispatch ()
const handleCart = (product) => {
    if (CartBtn === "Add to Cart"){
        dispatch(addCart(product))
        setcartBtn("Remove from Cart");
    }
    else{
        dispatch(delCart(product))
        setcartBtn("Add to Cart");
    }
}
return (
    <>
    <div className="container my-5 py-3">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px"/>
        </div>
        <div className="col-md-6 d-flex justify-content-center mx-auto">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button onClick={() => handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
        </div>
    </div>
    </>
)
}
export default ProductDetail;