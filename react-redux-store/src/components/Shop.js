import React, {useState, useEffect} from 'react'


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
            <p>Product Containers</p>
            {items.map(item => (
                <h1>{item.title}</h1>
            ))}
        </div>
    )
};
