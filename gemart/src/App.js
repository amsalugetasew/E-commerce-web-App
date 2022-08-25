import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import Product from './Components/Product';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route  path='/' element={
          <Home/>
        }/>
        <Route  path='/Products/:id' element={
          <Product/>
        }/>
         <Route  path='/Products' element={
          <Products/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
