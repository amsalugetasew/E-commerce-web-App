import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { Routes, Route } from "react-router-dom";
import Products from './Components/Products';
// import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';
// https://www.youtube.com/watch?v=vm3rc3J8U3w
import Cart from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes basename="/E-commerce-web-App">
        <Route  path='/' element={
          <Home/>
        }/>
        <Route  path='/sign-in' element={
          <Login/>
        }/>
        <Route  path='/sing-up' element={
          <Signup/>
        }/>
        <Route  path='/about' element={
          <About/>
        }/>
        <Route  path='/checkout' element={
          <Checkout/>
        }/>
        <Route  path='/contact' element={
          <Contact/>
        }/>
        <Route  path='/Products/:id' element={
          <ProductDetail/>
        }/>
        <Route  path='/cart' element={
          <Cart/>
        }/>
        {/* <Route  path='/Products/:id' element={
          <Product/>
        }/> */}
         <Route  path='/Products' element={
          <Products/>
        }/>
        <Route  path='/cart' element={
          <Cart/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
