import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom';
// import {DATA} from '../Data'
var datas = [{
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
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
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
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
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
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
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
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
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
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "gojjam azene",
    "image": require('../Gojjam/g1.PNG'),
    "rating":
    {
        "rate": 3.3,
        "count": 203
    }
},
{
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "gojjam azene",
    "image": require('../Gojjam/g7.jpg'),
    "rating":
    {
        "rate": 3.3,
        "count": 203
    }
},
{
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "gojjam azene",
    "image": require('../Gojjam/g5.PNG'),
    "rating":
    {
        "rate": 3.3,
        "count": 203
    }
},
{
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "gojjam azene",
    "image": require('../Gojjam/g2.jpg'),
    "rating":
    {
        "rate": 2.9,
        "count": 470
    }
},
{
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "gojjam azene",
    "image": require('../Gojjam/g3.jpeg'),
    "rating":
    {
        "rate": 4.8,
        "count": 319
    }
},
{
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "gojjam azene",
    "image": require('../Gojjam/g4.png'),
    "rating":
    {
        "rate": 4.8,
        "count": 400
    }
},
{
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "gojjam azene",
    "image": require('../Gojjam/g3.PNG'),
    "rating":
    {
        "rate": 2.9,
        "count": 250
    }
},
{
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "gojjam azene",
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
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("gojjam azene")}>Gojjam Azene</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-4">
                            <div className="card h-100 text-center p-4" key={product.id} >
                                <img src={product.image} height="250px" className="card-img-top" alt={product.title}/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
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