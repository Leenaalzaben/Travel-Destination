import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar =()=> {
    return (
        <div className="navbar">
            <nav >
                
            <h1 >Travel Destination</h1>
            <Link to="/"> Home</Link>
            </nav>
         
          
        </div>
    );
}
export default Navbar;