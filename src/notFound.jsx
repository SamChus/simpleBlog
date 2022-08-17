import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <div>
            <h1>404</h1>
            <p>Page not found</p> <br />
            <Link to='/'>Go to Homepage</Link>
        </div>
    );
}
 
export default NotFound;