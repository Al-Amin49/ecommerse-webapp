import { AiOutlineShopping } from "react-icons/ai";
import { useCart } from "../hooks/useCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({product}) => {

  const {addItemToCart}= useContext(CartContext);
  const handleAddToCart=(item)=>{
    addItemToCart(item);
    console.log('cart added', item)

  }
    return (
        <>
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
          
            <button 
            onClick={()=>handleAddToCart(product)}
            className="flex w-full mt-2 bg-secondary items-center justify-center text-white px-2 py-1 rounded">
            <AiOutlineShopping className="mr-1" />
              Add to cart
              </button>
          </div>
        </>
    );
};

export default ProductCard;