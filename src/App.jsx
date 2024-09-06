
import MainLayout from "./components/layout/MainLayout";
import { AuthProvider } from "./context/AuthContext";


const App = () => {
  return (
    <div>
      <AuthProvider>
        <MainLayout/>
      </AuthProvider>
    </div>
  );
};

export default App;