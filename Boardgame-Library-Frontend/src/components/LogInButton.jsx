import { Link } from "react-router-dom";

const LogInButton = () => {
    return (
        <Link to="/LogIn">
            <button className="homepage-button">Employee Login</button>
        </Link>
    )
};

export default LogInButton;