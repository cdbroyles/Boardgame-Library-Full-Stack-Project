import { Link } from "react-router-dom";

const ViewGameLibraryButton = () => {
    return (
        <Link to="/GameLibrary">
            <button className="homepage-button">View Game Library</button>
        </Link>
    )
};

export default ViewGameLibraryButton;