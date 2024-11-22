import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Function to handle signup and store user in localStorage
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if a user already exists with the same email
        const existingUser = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = existingUser.some((user) => user.email === email);

        if (userExists) {
            alert("User already exists! Please log in.");
            return;
        }

        // Store the new user in localStorage
        const newUser = { name, email, password };
        existingUser.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUser));

        alert("Signup successful! Please log in.");
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="signup-page">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default SignupPage;