import { useEffect, useState } from "react";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import { AiOutlineShopping } from "react-icons/ai";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Rocking chair");
  useEffect(() => {
    const fetchedProducts = async () => {
      const response = await axiosPublic.get("/products");
      console.log("respnse", response.data);
      setProducts(response.data);
    };
    fetchedProducts();
  }, [axiosPublic]);

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
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
        {filteredProducts.map(product => (
          <div key={product.chair_name} className="border rounded-lg p-4 bg-white shadow">
            <img src={product.image} alt={product.chair_name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h4 className="text-xl font-semibold mb-2">{product.chair_name}</h4>
            <p className="text-gray-600 mb-2">
              <span className="text-2xl font-bold text-secondary">
                €{product.discounted_price}
              </span>
              <span className="text-sm line-through text-gray-400 ml-2">
                €{product.original_price}
              </span>
              <span className="ml-2 text-red-500">30% off</span>
            </p>
            <p className="text-gray-700">{product.description}</p>
          
            <button className="flex w-full mt-2 bg-secondary items-center justify-center text-white px-2 py-1 rounded">
            <AiOutlineShopping className="mr-1" />
              Add to cart
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
