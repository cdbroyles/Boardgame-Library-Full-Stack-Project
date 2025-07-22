import { Link } from "react-router-dom";

const ViewCheckedOutItemsButton = () => {
    return (
        <Link to="/ViewCheckout">
            <button className="homepage-button">View Checked Out Items</button>
        </Link>
    )
}

export default ViewCheckedOutItemsButton;