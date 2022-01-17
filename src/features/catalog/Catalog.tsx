import { useState, useEffect } from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";



export default function Catalog(){


    const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
        .then((res) => res.json())
        .then((data) => setProduct(data));
}, []);




    return (
        <>
        <ProductList products={products}/>
    
        </>
    )
}