import React, {useState, useEffect} from 'react'



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
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt="shiny new product"></img>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {/* <p>{product.category}</p> */}
            <button>Add To Cart</button>
        </div>
    )
};
