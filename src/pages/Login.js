import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Function to handle login
    const handleSubmit = (e) => {
        e.preventDefault();

        // Get users data from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Find user with matching email and password
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            // If user found, store token in localStorage
            localStorage.setItem("token", "fake-jwt-token"); // You can replace with real token logic if needed
            navigate("/"); // Redirect to homepage or dashboard
        } else {
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