import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

     const loginUser = async (credentials) => {
        try {
            const response = await axios.post("https://your-backend-url.com/api/login", credentials);
            return response.data; // assuming the response contains the token in response.data.token
        } catch (error) {
            throw new Error("Login failed!"); // Handle errors gracefully
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password });
            localStorage.setItem("token", response.data.token); // Save token
            navigate("/"); // Redirect to home
        } catch (error) {
            alert("Login failed! Please check your credentials.");
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
