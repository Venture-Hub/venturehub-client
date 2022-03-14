import React from "react";
import "../styles/global.css";
import "../styles/login.css";

import LOGO from "../images/LOGO.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="gradient">
      <div className="m-2 flexCenter h-full">

        {/* Left Screen */}
        <div className="w-3/6 flex flex-col justify-center items-center text-center">
          <h1 className="ramaraja text-6xl">Venture's Hub</h1>
          <p className="tagline">One step closer to your dream!</p>
        </div>

        {/* Right Screen */}
        <div className="w-3/6 h-full flex flex-col items-center justify-center">
          <div className="w-3/4  transDiv h-5/6 m-2 flex flex-col justify-center items-center text-center">
            <img className="h-12 m-2" src={LOGO} alt="Website Logo" />
            <h1 className="quando text-3xl mb-5">Login</h1>

            <form className="w-4/6">
              <div class="flex flex-row justify-between my-5">
                <label for="staticEmail" class="col-4 col-form-label playfair">
                  Email
                </label>
                <div class="col-6">
                  <input
                    className="p-2 rounded-lg"
                    type="text"
                    id="inputEmail"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="flex flex-row justify-between my-5">
                <label for="inputPassword" class="col-4 col-form-label playfair">
                  Password
                </label>
                <div class="col-6">
                  <input
                    className="p-2 rounded-lg"
                    type="password"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>
              </div>

              <button className="transButton my-5 px-5 quando">
                Login
              </button>
            </form>


            <div className="flex flex-col justify-center items-center text-center">
              <Link to="/register">
                <p className="playfair">Not a user?</p>
              </Link>
              <Link to="/register">
                <p className="playfair">Create an Account</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
