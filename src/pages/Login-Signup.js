import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    // State to manage form fields and UI toggling between login and signup
    const [isLogin, setIsLogin] = useState(true); // Start with login form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Handle form submission (login or signup)
    const handleSubmit = (e) => {
        e.preventDefault();

        // If it's a login request
        if (isLogin) {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find((user) => user.email === email && user.password === password);

            if (user) {
                // User found, login successful
                localStorage.setItem("token", "fake-jwt-token"); // Save token
                alert("Login successful!");
                navigate("/"); // Redirect to home page
            } else {
                // Invalid credentials
                alert("Invalid email or password");
            }
        } else {
            // If it's a signup request
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const existingUser = users.find((user) => user.email === email);

            if (existingUser) {
                // User already exists
                alert("Email already registered!");
            } else {
                // Create new user and save it in localStorage
                const newUser = { name, email, password };
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users)); // Save users list
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

            <div className="toggle-form">
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

export default AuthPage;
