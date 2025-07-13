import { useState } from "react";

let GameCard = (prop) => {
    const [showForm, setShowForm] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);
    const [tableNumber, setTableNumber] = useState('');

    return (
        <div id="game-collection" onClick={() => setShowForm(false)}>
            <img src={prop.game.thumbnail._text} alt={`${prop.game.name._text} thumbnail`} />
            <p><strong>Title: </strong>{prop.game.name._text}</p>
            <p><strong>Available: </strong> {prop.game.isAvailable ? "Yes" : "No"}</p>
            <img src="src\assets\AddToCartIcon.png" onClick={(event) => {
                event.stopPropagation();
                setShowForm(true);
                }} 
                alt="Add to Cart" 
                id="add-to-cart-icon" 
                className="shopping-cart-icon" 
            />
            <img src="src\assets\RemoveFromCartIcon.png" alt="Remove from Cart" id="remove-from-cart-icon" className="shopping-cart-icon" />

            {showForm && (
                <form>
                    <input 
                        type="text" 
                        placeholder="Enter the table number" 
                        value={tableNumber}
                        onChange={(event) => setTableNumber(event.target.value)}
                        onClick={(event) => event.stopPropagation()}
                    />
                    <button type="submit" onClick={() => setShowReceipt(true)}>Checkout</button>
                </form>
            )}

            {showReceipt && (
                <p>The game <strong>{prop.game.name._text}</strong> was checked out to <strong>table #{tableNumber}</strong></p>
            )}
        </div>
    )
};

export default GameCard;