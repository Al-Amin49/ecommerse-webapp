import { useEffect, useState } from "react";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";
import { useAuth } from "../../components/hooks/useAuth";
import axios from "axios";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const {loading}= useAuth();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Rocking chair");

  useEffect(() => {
    const fetchedProducts = async () => {
      const response = await axios.get("product.json");
      console.log("respnse", response.data);
      setProducts(response.data);
    };
    fetchedProducts();
  }, [axiosPublic]);

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  if(loading){
    return <Loading/>
  }
  return (
    <div className="flex flex-col lg:flex-row">
      {/* category tabs */}

      <div className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:min-h-screen shadow-md mt-2">
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer p-2 rounded  ${
                selectedCategory === category
                  ? "bg-secondary text-white"
                  : "bg-gray-50"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* prodcuts card */}

      <div className="w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {filteredProducts.map(product =><ProductCard key={product._id} product={product}></ProductCard> )}
      </div>
    </div>
  );
};

export default Products;
