import { Link } from "react-router-dom";

const ViewGameLibrary = () => {
    return (
        <Link to="/GameLibrary">
            <button id="homepage-button">View Game Library</button>
        </Link>
    )
}

export default ViewGameLibrary;