import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
    const [name, setName] = useState(""); // Only used for Signup
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            // Login flow
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find((user) => user.email === email && user.password === password);

            if (user) {
                localStorage.setItem("token", "fake-jwt-token"); // Mock token
                alert("Login successful!");
                navigate("/"); // Redirect to home
            } else {
                alert("Invalid email or password");
            }
        } else {
            // Signup flow
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const existingUser = users.find((user) => user.email === email);

            if (existingUser) {
                alert("Email is already registered!");
            } else {
                const newUser = { name, email, password };
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                alert("Signup successful! Please log in.");
                setIsLogin(true); // Switch to login form
            }
        }
    };

    return (
        <div className="auth-page">
            <h2>{isLogin ? "Login" : "Signup"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                )}
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
                <button type="submit">{isLogin ? "Login" : "Signup"}</button>
            </form>
            <div>
                {isLogin ? (
                    <p>
                        Don't have an account?{" "}
                        <span onClick={() => setIsLogin(false)} style={{ cursor: "pointer", color: "blue" }}>
                            Sign up
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setIsLogin(true)} style={{ cursor: "pointer", color: "blue" }}>
                            Login
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Auth;
