import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/" className="header-link">BoardGame Library</Link>
            </h1>
        </header>
    );
}

export default Header;