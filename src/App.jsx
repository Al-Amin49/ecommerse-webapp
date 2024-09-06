import { AuthStatus } from "./components/AuthStatus";
import { AuthProvider } from "./context/AuthContext";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";


const App = () => {
  return (
    <div>
      <AuthProvider>
        <AuthStatus/>
        <h2>Login</h2>
        <Login>
        </Login>
        <h2>Signup</h2>
        <Signup/>
      </AuthProvider>
    </div>
  );
};

export default App;