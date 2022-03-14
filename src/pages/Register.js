import React from "react";
import "../styles/global.css";
import "../styles/login.css";
import { Link } from "react-router-dom";
import LOGO from "../images/LOGO.svg";

function Register() {
  return (
    <div className="gradient">
      <div className="m-2 flexCenter m-full h-full">
        {/* Right Screen */}
        <div className="col-6 transDiv m-2 flex flex-col justify-center items-center text-center">
          <img className="logo my-3" src={LOGO} alt="Website Logo" />
          <h1 className="quando mb-4 text-3xl">Register</h1>

          <form>
            <div class="form-group row my-3">
              <label for="staticName" class="col-4 col-form-label playfair">
                Name
              </label>
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="Name"
                />
              </div>
            </div>
            <div class="form-group row my-3">
              <label for="staticPhone" class="col-4 col-form-label playfair">
                Phone
              </label>
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div class="form-group row my-3">
              <label for="staticEmail" class="col-4 col-form-label playfair">
                Email
              </label>
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="form-group row my-3">
              <label for="inputPassword" class="col-4 col-form-label playfair">
                Password:
              </label>
              <div class="col-6">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-group row my-3">
              <label for="inputPassword" class="col-4 col-form-label playfair">
                Confirm Password:
              </label>
              <div class="col-6">
                <input
                  type="password"
                  class="form-control"
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
              <div className="col-6 flex-col justify-content-center text-center">
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