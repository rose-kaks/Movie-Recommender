import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleMoodSelection = (mood) => {
        navigate(`/recommendations/${mood}`); // Pass mood as a route parameter.
    };

    return (
        <div className="container text-center mt-5">
            <h1 className="display-4">Find Movies Based on Your Mood 🎬</h1>
            <p className="lead">Select your mood, and we'll recommend the perfect movies for you!</p>
            <div className="row mt-4">
                {["Happy", "Sad", "Romantic", "Adventurous", "Scared", "Motivated"].map((mood) => (
                    <div className="col-md-4 mb-3" key={mood}>
                        <button
                            className="btn btn-lg btn-outline-primary w-100"
                            onClick={() => handleMoodSelection(mood)}
                        >
                            {mood}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
