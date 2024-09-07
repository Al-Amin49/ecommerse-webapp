import { AiOutlineShopping } from "react-icons/ai";

import { useAuth } from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// import Loading from "../Loading/Loading";

const ProductCard = ({product}) => {
  const location= useLocation();
  const navigate=useNavigate()
const {user}= useAuth();
console.log('email', user?.email)
  const {addItemToCart, loading}= useContext(CartContext);
  const handleAddToCart=(item)=>{
    console.log('item', item)
    if(!user){
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
    }).then((result) => {
        if (result.isConfirmed) {
            //   send the user to the login page
            navigate('/login', { state: { from: location } })
        }
    });
    }
    console.log('cart added')
    const data={
      productId: item?._id,
      email: user?.email,
      ...item
    }
    addItemToCart(data);
    console.log('cart added', data);
    window.alert('cart added')

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
             {loading ? 'Loading...' : 'Add to Cart'}
              </button>
          </div>
        </>
    );
};

export default ProductCard;