import { Link } from "react-router-dom";

const ReturnGameButton = () => {
    return (
        <Link to="/Return">
            <button id="homepage-button">Return Games</button>
        </Link>
    )
}

export default ReturnGameButton;