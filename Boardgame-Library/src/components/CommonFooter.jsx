import { Link } from "react-router";

const Footer = () => {
    return (
        <footer>
            <h3>&copy; 2025 Boardgame Library. All rights reserved.</h3>
            <Link to="/About">About Page</Link>
        </footer>
    );
}

export default Footer;