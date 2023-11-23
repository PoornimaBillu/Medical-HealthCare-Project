import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Products from "../Products/Products";
import Register from "../Register/Register";
import Services from "../Services/Services";
import "./Navbar.css";
import Healthlogo from "../Assets/health1.jpg";
import Default from "../DefaultPage/Default";
import Footer from "../Footer/Footer";

function Navbar(){

    return(
        <div>
             <BrowserRouter>
            
            <h1 classNameName="head">Health Care Application</h1>
           
            <nav className="navbar navbar-expand-sm navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={Healthlogo} className="healthImg" />
                            </Link>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                    <Link className="nav-link" to="/"></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Footer</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input size="60" className="form-control me-2" type="text" placeholder="Search" />
                                <button className="btn btn-secondary" type="button">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <Routes>
                <Route path="/" element={<Default></Default>} />
                    <Route path="/register" element={<Register></Register>} />
                    <Route path="/login" element={<Login></Login>} />
                    <Route path="/home" element={<Home></Home>} />
                    <Route path="/products" element={<Products></Products>} />
                    <Route path="/services" element={<Services></Services>} />
                    <Route path="/contact" element={<Contact></Contact>} />
                    <Route path="/dashboard" element={<Contact></Contact>} />
                   <Route path ="/" element={<Footer></Footer>} />
                </Routes>
            </BrowserRouter>
            
            
        </div>
        
    )
}
export default Navbar;