const CheckOutGame = (prop) => {
    const iconClass = prop.isAvailable ? "shopping-cart-icon" : "inactive";

    return (
        <>
            <img 
                src="src/assets/AddToCartIcon.png" 
                onClick={(event) => {prop.isAvailable ? prop.processCheckOut(event) : <></>}}
                alt="Add to Cart" 
                id="add-to-cart-icon"
                className={iconClass}
                title="Checkout Game"
            />
        </>
    )
};

export default CheckOutGame;