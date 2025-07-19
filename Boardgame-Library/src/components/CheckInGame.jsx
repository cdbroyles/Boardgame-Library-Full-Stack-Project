const CheckInGame = (prop) => {
    const iconClass = !prop.isAvailable ? "shopping-cart-icon" : "inactive";

    return (
    <img 
        src="src/assets/RemoveFromCartIcon.png"
        onClick={() => {!prop.isAvailable ? prop.processCheckIn(prop.game) : <></>}} 
        alt="Remove from Cart" 
        id="remove-from-cart-icon" 
        className={iconClass} 
        title="Checkin Game"
    />
    )
};

export default CheckInGame;