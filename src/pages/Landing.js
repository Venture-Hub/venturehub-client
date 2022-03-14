import React from "react";
import LOGO from "../images/LOGO.svg";
import ILLUSTRATION from "../images/landing.png";
import "../styles/landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="gradient flexCenter content-start">
      <div className="landingBox rounded-3xl">
        {/* Top div */}
        <div className="flex flex-row">
          <img className="h-12 m-2" src={LOGO} alt="Website Logo" />
          <h3 className="text-white text-4xl m-2">Venture Hub</h3>
        </div>
        {/* Bottom div */}
        <div className="flex flex-row content-center items-center h-5/6">
          {/* Left div */}
          <div className="w-2/4 mx-14">
            <h2 className="text-2xl text-white">Lorem ipsum dolor sit amet</h2>
            <div className="my-4">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                sunt facere corporis quis. Quidem, alias. Ullam perspiciatis ut
                reprehenderit sunt.
              </p>
            </div>
            <div className="flexCenter">
              <Link to="login">
                <button className="transButton">
                  Login
                </button>
              </Link>
              <Link to="register">
                <button className="transButton">
                  Register
                </button>
              </Link>
            </div>
          </div>
          {/* Right div */}
          <div className="h-full flex flex-col justify-center">
            <img src={ILLUSTRATION} alt="Illustration" className="h-64" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
