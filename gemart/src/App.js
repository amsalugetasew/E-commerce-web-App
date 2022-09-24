import './App.css';
import Home from './Components/Home';
// import NavBar from './Components/NavBar';
import { Routes, Route } from "react-router-dom";
import Products from './Components/ForProduct';
// import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';
// https://www.youtube.com/watch?v=vm3rc3J8U3w
import Cart from './Components/ForCart';
import About from './Components/About';
import Contact from './Components/Contact';
import Checkout from './Components/Checkout';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import AddItem from './Components/AddProduct';
import Footer from './Components/Footer';
import UserSetting from './Components/User/UserSetting';
import ViewItem from './Components/ViewItem';
import UserList from './Components/User/UserList';
import SingleUser from './Components/User/SingleUser';
import AddProduct from './Components/AddProduct';
import SingleProduct from './Components/SingleProduct'
// import UserProfile from './Components/UserProfile';
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes basename="/E-commerce-web-App">
        <Route  path='/' element={
          <Home/>
        }/>
        <Route  path='/sign-in' element={
          <Login/>
        }/>
        <Route  path='/add-item' element={
          <AddItem/>
        }/>
        <Route  path='/profile-setting' element={
          <UserSetting/>
        }/>
        <Route  path='/view-item' element={
          <ViewItem/>
        }/>
        <Route  path='/user-list' element={
          <UserList/>
        }/>
        <Route  path='/sing-up' element={
          <Signup/>
        }/>
        <Route  path='/sing-up/:id' element={
          <Signup/>
        }/>
        <Route path='/single-product/:id' element={
          <SingleProduct/>
        }/>
        <Route  path='/add-item/:id' element={
          <AddProduct/>
        }/>
        
        <Route  path='/single-user/:id' element={
          <SingleUser/>
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
        <Route  path='/Setting' element={
          <UserSetting/>
        }/>
        {/* <Route  path='/Profile' element={
          <UserProfile/>
        }/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
