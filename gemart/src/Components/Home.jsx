import React from 'react'
// import Bg from './assests/habeshas.jpg'
import Bg from './assests/2.jpg'
import NavBar from './NavBar'
import Products from './Products'
function Home() {
    return (
        <>
        <NavBar/>
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src={Bg} className="card-img" alt="background" height="400px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 few-border mb-0 text-center">Habesha Fashion</h5>
                    <p className="card-text lead fs-2 text-center">CHECK OUT ALL THE TRENDS</p>                        
                    </div>
                    
                    
                </div>
            </div>
            <Products/>
        </div>
        </>
    )
}

export default Home