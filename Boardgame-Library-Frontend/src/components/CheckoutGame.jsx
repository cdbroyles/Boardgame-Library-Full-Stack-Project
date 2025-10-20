import AddToCartIcon from '../assets/AddToCartIcon.png';

const CheckOutGame = (prop) => {
    //code to differentiate class name for when item is available vs. when item is not available
    const iconClass = prop.isAvailable ? "shopping-cart-icon" : "inactive";

    return (
        //check out game image with variable class name.  Also has logic for disabling check out when the game is not available.
        <img 
            src={AddToCartIcon}
            onClick={(event) => {prop.isAvailable ? prop.processCheckOut(event) : <></>}}
            alt="Add to Cart" 
            id="add-to-cart-icon"
            className={iconClass}
            title="Checkout Game"
        />
    );
};

export default CheckOutGame;