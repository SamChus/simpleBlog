import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav>
            <h1>BlogPage</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;