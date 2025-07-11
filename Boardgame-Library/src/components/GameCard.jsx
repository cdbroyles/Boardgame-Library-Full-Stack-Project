let GameCard = (prop) => {
    return (
        <div id="game-collection">
            <img src={prop.game.thumbnail._text} alt={`${prop.game.name._text} thumbnail`} />
            <p><strong>Title: </strong>{prop.game.name._text}</p>
            <p><strong>Available: </strong> {prop.game.isAvailable ? "Yes" : "No"}</p>
            <img src="src\assets\AddToCartIcon.png" alt="Add to Cart" id="add-to-cart-icon" className="shopping-cart-icon" />
            <img src="src\assets\RemoveFromCartIcon.png" alt="Remove from Cart" id="remove-from-cart-icon" className="shopping-cart-icon" />
        </div>
    )
};

export default GameCard;