const CheckInGame = (prop) => {
    return (
    <img 
        src="src/assets/RemoveFromCartIcon.png"
        onClick={() => {prop.processCheckIn(prop.game);}} 
        alt="Remove from Cart" 
        id="remove-from-cart-icon" 
        className="shopping-cart-icon" 
        title="Checkin Game"
    />
    )
};

export default CheckInGame;