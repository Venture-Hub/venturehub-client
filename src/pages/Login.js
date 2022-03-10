import React from "react";
import "../styles/global.css";
import "../styles/login.css";
import LOGO from "../images/LOGO.svg";

function Login() {
  return (
    <div className="gradient">
      <div className="container flexCenter hFull">

        {/* Left Screen */}
        <div className="col-7 flex-col justify-content-center text-center">
          <h1 className="h1 ramaraja heading">Venture's Hub</h1>
          <p className="tagline">One step closer to your dream!</p>
        </div>

        {/* Right Screen */}
        <div className="col-5 transDiv container text-center">
          <img className="logo my-3" src={LOGO} alt="Website Logo" />
          <h1 className="quando mb-5">Login</h1>

          <form>
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

            <button className="transButton my-5 px-5 quando">
              Login
            </button>
          </form>
          <div className="flex-col justify-content-center text-center">
            <p className="playfair">Not a user?</p>
            <p className="playfair">Create an Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
