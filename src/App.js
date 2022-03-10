// CSS Global Import
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css"

// Pages Imports
import Register from "./pages/Register"
import About from "./pages/About"
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import Landing from "./pages/Landing"
import ForgotPassword from "./pages/ForgotPassword"

// Component Imports
import Navbar from "./components/Navbar"


// Routing Imports
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
