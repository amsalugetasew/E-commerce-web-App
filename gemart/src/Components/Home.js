import React from 'react'
import Bg from './assests/gechP.jpg'
import Products from './Products'
function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src={Bg} className="card-img" alt="background" height="1100px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 few-border mb-0">NEW SEASON ARRIVALS</h5>
                    <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>                        
                    </div>
                    
                    
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home