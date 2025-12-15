import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams();

    useEffect (()=>{
        fetch("https://69332814e5a9e342d2721639.mockapi.io/products")
       // fetch("/data/products.json")
        .then((res) => {
            if (!res.ok){
                throw new Error ("Hubo un problema al buscar productos");
            }
            return res.json();      
        })
        .then((data) => {
            if (category) {
                setProducts(data.filter((prod) => prod.category === category));
            } else {
                setProducts(data);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, [category]);

    return (
        <section className="container">
            <h1>Bienvenida</h1>
            <ItemList list={products} />
        </section>
    );
 };