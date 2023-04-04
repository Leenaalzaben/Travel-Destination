import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <nav >
            <Link to="/"> Home</Link>
            </nav>
            <nav>
            <Link to="/city/:id">About</Link>
            </nav>
          
        </div>
    );
}
export default Navbar;