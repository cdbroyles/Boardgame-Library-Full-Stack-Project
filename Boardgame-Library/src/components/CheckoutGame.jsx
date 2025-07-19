const CheckOutGame = (prop) => {
    return (
        <>

            <img 
                src="src/assets/AddToCartIcon.png" 
                onClick={(event) => {prop.processCheckOut(event);}}
                alt="Add to Cart" 
                id="add-to-cart-icon" 
                className="shopping-cart-icon" 
                title="Checkout Game"
            />
        </>
    )
};

export default CheckOutGame;