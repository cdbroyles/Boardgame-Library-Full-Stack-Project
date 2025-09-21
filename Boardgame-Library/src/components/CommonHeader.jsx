import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const [isLogIn, setIsLogIn] = useAuth();

    return (
        <header>
            <h1>
                <Link to="/" className="header-link">BoardGame Library</Link>
            </h1>
            {isLogIn ? <p className="header-login" onClick={() => {setIsLogIn(false);}}>Log Out</p>: <Link to="/login" className="header-login">Log In</Link>}
        </header>
    );
};

export default Header;