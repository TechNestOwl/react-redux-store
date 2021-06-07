import React, {useState, useEffect} from 'react'
import SET_CART from "../actions/cartAction";
import "../App.css";
import {useDispatch, useSelector} from "react-redux";

export default function Product({match}) {
    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.cartItem);

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
            {/* <button onClick={(dispatch(SET_CART))}>Add To Cart</button> */}
        </div>
    )
};
