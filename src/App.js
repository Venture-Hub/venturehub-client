// CSS Global Import
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css"

// Pages Imports
import Register from "./pages/Register"
import About from "./pages/About"
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import Landing from "./pages/Landing"
import ForgotPassword from "./pages/ForgotPassword"

// Component Imports
// import Navbar from "./components/Navbar"


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProblemStatements from './pages/ProblemStatements';
import Companies from './pages/Companies';
import Investors from './pages/Investors';
import Mentors from "./pages/Mentors"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/problem-statements" element={<ProblemStatements />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
