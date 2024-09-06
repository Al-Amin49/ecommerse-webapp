

import  { useState } from 'react';
import { useAuth } from '../../components/useAuth';
import loginImg from "../../assets/img/login.png"

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        login({ username, password });
    };

    return (
        <div className='flex'>
         <div>
         <form onSubmit={handleLogin}>
           <div className="flex">
           <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
           </div>
            <button type="submit">Login</button>
            
        </form>
         </div>

         <div>
        <img src={loginImg} alt="" />
         </div>
        </div>
    );
};

export default Login;
