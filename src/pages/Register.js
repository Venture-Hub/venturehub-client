import React from "react";
import "../styles/global.css";
import "../styles/login.css";
import LOGO from "../images/LOGO.svg";

function Register() {
  return (
    <div className="gradient">
      <div className="container flexCenter hFull">
        {/* Right Screen */}
        <div className="col-6 transDiv container text-center">
          <img className="logo my-3" src={LOGO} alt="Website Logo" />
          <h1 className="quando mb-4">Register</h1>

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
                <p className="playfair">Not a user?</p>
                <p className="playfair">Create an Account</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register