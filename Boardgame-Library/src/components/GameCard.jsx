import { useEffect, useState } from "react";
import checkedOutItems from "../assets/CheckedOutItems";
import CheckInGame from "./CheckInGame";
import CheckOutGame from "./CheckoutGame";

let GameCard = (prop) => {
    const [showForm, setShowForm] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);
    const [tableNumber, setTableNumber] = useState('');

    //Sets a 4 second timer for the receipt to show.  Activates when showReceipt is true.
    useEffect(() => {
        if (showReceipt) {
            setTimeout(() => {
                setShowReceipt(false);
            }, 3000);
        }
    }, [showReceipt]);

    const updateCheckedOutItems = (event) => {
        event.preventDefault();
        let newCheckout = {
            tableNumber: Number(tableNumber),
            games: [prop.game.name._text]
        }
        let addedItemToArray = false;

        //Loops through the array of checked out items to see if table numbers match.
        for (let table of checkedOutItems) {
            if (newCheckout.tableNumber == table.tableNumber) {
                table.games.push(prop.game.name._text);
                prop.game.isAvailable = false;
                addedItemToArray = true;
            }
        }

        //If table numbers do not match, this will append a new table number with their checkedout items.
        if (!addedItemToArray) {
            checkedOutItems.push(newCheckout);
            prop.game.isAvailable = false;
        }

        setShowForm(false);
        setShowReceipt(true);
        addedItemToArray = false;
    };

    //Checkout function to match Checkin function
    const processCheckOut = (event) => {
        event.stopPropagation();
        setShowForm(true);
    }
    
    //Checkin function needed b/c cannot alternate a prop value within a component.
    const processCheckIn = () => {
        const tableReturningItem = checkedOutItems.find(table => table.games.includes(prop.game.name._text));
        const indexOfTableReturningItem = checkedOutItems.indexOf(tableReturningItem);
        const returnedItem = tableReturningItem.games.find(game => game === prop.game.name._text);
        const indexOfReturnedItem = tableReturningItem.games.indexOf(returnedItem);
        checkedOutItems[indexOfTableReturningItem].games.splice(indexOfReturnedItem,1);
        if (tableReturningItem.games.length === 0) {
            checkedOutItems.splice(indexOfTableReturningItem, 1);
        }
        prop.game.isAvailable = true;
        setShowReceipt(true);
    }

    //Stop propagation prevents parent onClick from running.
    return (
        <div id="game-collection" onClick={() => setShowForm(false)}>
            <img className="game-thumbnail" src={prop.game.thumbnail._text} alt={`${prop.game.name._text} thumbnail`}/>
            <p><strong>Title: </strong>{prop.game.name._text}</p>
            <p><strong>Available: </strong> {prop.game.isAvailable ? "Yes" : "No"}</p>
            <CheckOutGame 
                isAvailable={prop.game.isAvailable} 
                processCheckOut={processCheckOut}
            />
            <CheckInGame 
                isAvailable={prop.game.isAvailable}
                processCheckIn={processCheckIn} 
            />

            {showForm && (
                <form onSubmit={updateCheckedOutItems} onClick={(event) => event.stopPropagation()}>
                    <input 
                        type="number" 
                        placeholder="Enter the table number" 
                        value={tableNumber}
                        onChange={(event) => setTableNumber(event.target.value)}
                    />
                    <button type="submit">Checkout</button>
                </form>
            )}

            {showReceipt && prop.game.isAvailable === false && (
                <p>The game <strong>{prop.game.name._text}</strong> was checked out to <strong>table #{tableNumber}</strong></p>
            )}

            {showReceipt && prop.game.isAvailable === true && (
                <p>The game <strong>{prop.game.name._text}</strong> was <strong>checked in</strong></p>
            )}
        </div>
    )
};

export default GameCard;