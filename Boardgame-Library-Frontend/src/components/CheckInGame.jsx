import RemoveFromCartIcon from '../assets/RemoveFromCartIcon.png';

const CheckInGame = (prop) => {
    //code to differentiate class name for when item is available vs. when item is not available
    const iconClass = !prop.isAvailable ? "shopping-cart-icon" : "inactive";

    return (
    //check in game image with variable class name.  Also has logic for disabling check in when the game is already available.
        <img 
            src={RemoveFromCartIcon}
            onClick={() => {!prop.isAvailable ? prop.processCheckIn(prop.game) : <></>}} 
            alt="Remove from Cart" 
            id="remove-from-cart-icon" 
            className={iconClass} 
            title="Checkin Game"
        />
    );
};

export default CheckInGame;