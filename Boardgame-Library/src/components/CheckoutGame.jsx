const CheckOutGame = (prop) => {
    return (
        <>
            <img className="game-thumbnail" src={prop.thumbnailURL} alt={`${prop.title} thumbnail`} />
            <p><strong>Title: </strong>{prop.title}</p>
            <p><strong>Available: </strong> {prop.isAvailable ? "Yes" : "No"}</p>
            <img 
                src="src/assets/AddToCartIcon.png" 
                onClick={(event) => {prop.processCheckOut(event);}}
                alt="Add to Cart" 
                id="add-to-cart-icon" 
                className="shopping-cart-icon" 
            />
        </>
    )
};

export default CheckOutGame;