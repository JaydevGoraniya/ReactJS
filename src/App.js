import Category from "./Category";
import Menu from "./Menu";
import React from "react";
import Subcategory from "./Subcategory";
import { Routes,Route } from "react-router-dom";
import Product from "./Product";
function App(){
  return(
    <>
    <Menu/>
    <Routes>
    <Route path="/" element={<Category/>} />
      <Route path="/Category" element={<Category/>} />
      <Route path="/Subcategory" element={<Subcategory/>} />
      <Route path="/product" element={<Product/>} />
      
    </Routes>
    </>
  )
}
export default App;