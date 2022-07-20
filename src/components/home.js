import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="home">
        <h1>Move yoUR Money with Save Up </h1>
        <Link to="/registration">
          <button className="button__registration">Register</button>
        </Link>
      </div>
    );
};
  
export default Home;