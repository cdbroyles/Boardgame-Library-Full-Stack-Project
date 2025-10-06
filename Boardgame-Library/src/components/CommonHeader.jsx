import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const [isLogIn, setIsLogIn, isAdmin, setIsAdmin] = useAuth();

    return (
        <header>
            <h1>
                <Link to="/" className="header-link">BoardGame Library</Link>
            </h1>
            {isAdmin ? <Link className="header-login" to="/Personel">Update Personel</Link> : <p></p>}
            {isLogIn ? <p className="header-login" onClick={() => {setIsLogIn(false); setIsAdmin(false)}}>Log Out</p>: <Link to="/login" className="header-login">Log In</Link>}
        </header>
    );
};

export default Header;