import React from "react";
import LOGO from "../images/LOGO.svg";
import ILLUSTRATION from "../images/landing.png";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="gradient flexCenter justify-centent-start">
      <div className="landingBox">
        {/* Top div */}
        <div className="top-div d-inline-flex">
          <img className="logo m-2" src={LOGO} alt="Website Logo" />
          <h3 className="text-white h1 m-2">Venture Hub</h3>
        </div>
        {/* Bottom div */}
        <div className="bottom-div">
          {/* Left div */}
          <div className="m-5">
            <h2 className="text-white">Lorem ipsum dolor sit amet</h2>
            <div className="my-4">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                sunt facere corporis quis. Quidem, alias. Ullam perspiciatis ut
                reprehenderit sunt.
              </p>
            </div>
            <div className="flexCenter">
              <button className="transButton">Login</button>
              <button className="transButton">Register</button>
            </div>
          </div>
          {/* Right div */}
          <div className="illustrationShift">
            <img src={ILLUSTRATION} alt="Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
