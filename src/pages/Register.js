import React from "react";
import "../styles/global.css";
import "../styles/login.css";
import { Link } from "react-router-dom";
import LOGO from "../images/LOGO.svg";

function Register() {
  return (
    <div className="gradient">
      <div className="flexCenter m-full h-full">
        {/* Right Screen */}
        <div className="p-5 w-2/5 transDiv m-2 flex flex-col justify-center items-center text-center">
          <img className="logo my-3" src={LOGO} alt="Website Logo" />
          <h1 className="quando mb-4 text-3xl">Register</h1>

          <form className="w-4/5">
            <div class="flex flex-row justify-between my-5">
              <label for="staticName" class="col-4 col-form-label playfair">
                Name
              </label>
              <div class="col-6">
                <input
                  type="text"
                  className="p-2 rounded-lg"
                  id="inputName"
                  placeholder="Name"
                />
              </div>
            </div>
            <div class="flex flex-row justify-between my-5">
              <label for="staticPhone" class="col-4 col-form-label playfair">
                Phone
              </label>
              <div class="col-6">
                <input
                  type="text"
                  className="p-2 rounded-lg"
                  id="inputPhone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div class="flex flex-row justify-between my-5">
              <label for="staticEmail" class="col-4 col-form-label playfair">
                Email
              </label>
              <div class="col-6">
                <input
                  type="text"
                  className="p-2 rounded-lg"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="flex flex-row justify-between my-5">
              <label for="inputPassword" class="col-4 col-form-label playfair">
                Password:
              </label>
              <div class="col-6">
                <input
                  type="password"
                  className="p-2 rounded-lg"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="flex flex-row justify-between my-5">
              <label for="inputPassword" class="col-4 col-form-label playfair">
                Confirm Password:
              </label>
              <div class="col-6">
                <input
                  type="password"
                  className="p-2 rounded-lg"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flexCenter mt-5">
              <div className="col-6">
                <button className="transButton my-3 px-4 quando">
                  Register
                </button>
              </div>
              <div className="w-2/4 flex flex-col justify-center items-center">
                <Link to="/login">
                  <p className="playfair">Have an account?</p>
                </Link>
                <Link to="/login">
                  <p className="playfair">Login</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register