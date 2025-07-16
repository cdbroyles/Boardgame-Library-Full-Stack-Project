const CheckInGame = (prop) => {
    return (
    <img 
        src="src/assets/RemoveFromCartIcon.png"
        onClick={() => {prop.processCheckIn();}} 
        alt="Remove from Cart" 
        id="remove-from-cart-icon" 
        className="shopping-cart-icon" 
    />
    )
};

export default CheckInGame;