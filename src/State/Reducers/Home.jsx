import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProducts]=useState([]);
    const getAllProducts= async()=>{
        const resp = await axios.get(`https://fakestoreapi.com/products`);

    };
    useEffect(()=>{
        getAllProducts();
    },[])
    return (
        <div>
            {}
           <h1>Redux Home Component</h1> 
        </div>
    );
};

export default Home;