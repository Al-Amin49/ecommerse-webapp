import { useEffect, useState } from "react";
import { fetchCartByEmail } from "../../api/CartApi";
import { useAuth } from "./useAuth";


const useFetchCart = () => {
    const [loading, setLoading]= useState(true);
     const [carts, setCarts]= useState([])
     const {user}= useAuth()
    useEffect(() => {
        setLoading(true);
        fetchCartByEmail(user?.email)
          .then((items) => setCarts(items))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, []);
    return {carts, loading}
};

export default useFetchCart;