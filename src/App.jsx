
import MainLayout from "./components/layout/MainLayout";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";


const App = () => {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
        <MainLayout/>
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;