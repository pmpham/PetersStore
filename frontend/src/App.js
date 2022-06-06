
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";

//components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <Navbar click={()=>setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
      <main>
        <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path = "/product/:id" element={<ProductScreen />} />
        <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
      {/*HomeScreen*/}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
