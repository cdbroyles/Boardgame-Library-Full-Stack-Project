let GameCard = ({game}) => {
    return (
        <div id="game-collection">
            <img src={game.thumbnail._text} alt={`${game.name._text} thumbnail`} />
            <p><strong>Title: </strong>{game.name._text}</p>
            <p><strong>Available: </strong> {game.isAvailable ? "Yes" : "No"}</p>
            <img src="src\assets\AddToCartIcon.png" alt="Add to Cart" id="add-to-cart-icon" className="shopping-cart-icon" />
            <img src="src\assets\RemoveFromCartIcon.png" alt="Remove from Cart" id="remove-from-cart-icon" className="shopping-cart-icon" />

        </div>
    )
};

export default GameCard;