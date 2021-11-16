import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

export default function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => setProducts(response.data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    let params = useParams();
    console.log(params.id);
    let product= products.find(p => p._id === params.id);
    if (product)        
        return (
            <main style={{ padding: "1rem" }}>
            <h2>{product.productName}</h2>
            <p>Price : {product.price}</p>
            </main>
        )
    else
            return(
                <p>No item found</p>
            )
}