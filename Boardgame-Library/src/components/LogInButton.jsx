import { Link } from "react-router-dom";

const LogInButton = () => {
    return (
        <Link to="/LogIn">
            <button className="homepage-button">Log In</button>
        </Link>
    )
};

export default LogInButton;