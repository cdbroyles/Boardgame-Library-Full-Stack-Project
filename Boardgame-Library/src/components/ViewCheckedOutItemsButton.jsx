import { Link } from "react-router-dom";

const ViewCheckedOutItemsButton = () => {
    return (
        <Link to="/AccountLogin">
            <button id="homepage-button">View Checked Out Items</button>
        </Link>
    )
}

export default ViewCheckedOutItemsButton;