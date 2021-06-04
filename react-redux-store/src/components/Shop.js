import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";


export default function Shop() {

    useEffect(()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://fakestoreapi.com/products'
            );
            const items = await data.json();
            console.log(items);
            setItems(items);
        
    };
    

    return (
        <div className="shopList">
            <p>Poorly Rendered List Of Products</p>
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                    {item.title}
                    </Link>
                    </h1>
            ))};
            {/* <div className="card">
                <img src="#" alt="product"></img>
                <div className="cardInfo">
                    <h4>Product Name</h4>
                    <p>Description</p>
                </div>
            </div> */}
        </div>
    )
};
