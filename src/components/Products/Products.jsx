import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";


const Products = () => {
    const [products, setProducts]= useState([]);
    // const axiosPublic=useAxiosPublic()

    useEffect(() => {
        const fetchedProducts = async () => {
          const response = await axios.get("product.json");
          console.log("respnse", response.data);
          setProducts(response.data);
        };
        fetchedProducts();
      }, []);
    return (
        <div>
            <h3 className="py-5 text-3xl font-bold text-center">Products you love to buy</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
            {
                products.slice(0,6).map(product=> <ProductCard  key={product._id} product={product}></ProductCard>)
            }
            </div>
            
        </div>
    );
};

export default Products;