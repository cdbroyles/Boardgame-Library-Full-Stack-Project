import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <h3>&copy; 2025 Boardgame Library. All rights reserved.</h3>
            <Link to="/" className="footer-link">Home Page</Link>
            <Link to="/About" className="footer-link">About Page</Link>
        </footer>
    );
};

export default Footer;