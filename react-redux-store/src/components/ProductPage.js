import React, {useState, useEffect} from 'react'
import SET_CART from "../actions/cartAction";
import "../App.css";



export default function Product({match}) {

    useEffect(()=> {
        fetchProduct();
        console.log(match)
    }, []);

    const [product, setProduct] = useState({})

    const fetchProduct= async () => {
            
        const fetchProduct = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const product = await fetchProduct.json();
        setProduct(product);
        console.log(product);
        
    };
    

    return (
        <div className="productPageContainer">
            <h1>{product.title}</h1>
            <img src={product.image} alt="shiny new product" className="responsive"></img>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add To Cart</button>
            {/* <p>{product.category}</p> */}
            {/* <button onClick={SET_CART(dispatch,product)}>Add To Cart</button> */}
        </div>
    )
};
