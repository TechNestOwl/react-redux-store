import React, {useState, useEffect} from 'react'



export default function Product({match}) {

    useEffect(()=> {
        fetchProduct();
        console.log(match)
    }, []);

    const [product, setProduct] = useState([{}])

    const fetchProduct= async () => {
            
        const fetchProduct = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const product = await fetchProduct.json();
        console.log(product);
        
    };
    

    return (
        <div>
            <h1>API id:<br></br> ${match.params.id}</h1>
        </div>
    )
};
