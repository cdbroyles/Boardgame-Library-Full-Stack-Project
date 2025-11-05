import { useEffect, useState } from "react";
import CheckInGame from "./CheckInGame";
import CheckOutGame from "./CheckoutGame";
import { useAuth } from "../context/AuthContext";

let GameCard = (prop) => {
    const [showForm, setShowForm] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);
    const [tableNumber, setTableNumber] = useState('');
    const [isLogIn, setIsLogIn] = useAuth();
    const [refreshFlag, setRefreshFlag] = useState(false);

    //Sets a 3 second timer for the receipt to show.  Activates when showReceipt is true.
    useEffect(() => {
        if (showReceipt) {
            setTimeout(() => {
                setShowReceipt(false);
            }, 3000);
        }
    }, [showReceipt]);

    //This API call pulls the list of active table numbers and checked out items from the server
    useEffect(() => {
        fetch("http://localhost:8080/checkedoutinventory")
        .then(response => response.json())
        .then(data => {
            const dataGroupedByTableNumber = [];
            data.forEach(item => {
                let isTableFound = false;
                for (let i = 0; i < dataGroupedByTableNumber.length; i++) {
                    if (dataGroupedByTableNumber[i].tableNumber === item.tableNumber) {
                        dataGroupedByTableNumber[i].games.push(item.title);
                        isTableFound = true;
                        break;
                    }
                }
                if (!isTableFound) {
                    dataGroupedByTableNumber.push({
                        tableNumber: item.tableNumber,
                        games: [item.title]
                    });
                }
            });
        });
    }, [refreshFlag]);

    //This API call updates the checked out items on the server
    const updateCheckedOutItems = (event) => {
        event.preventDefault();
        let newCheckout = {
            tableNumber: Number(tableNumber),
            title: prop.game.name._text
        };
        
        fetch("http://localhost:8080/checkedoutinventory", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCheckout)
        })
        .then(response => response.json())
        .then(() => {
            setRefreshFlag(previous => !previous);
        })

        //This will remove the table number input form, then show a confirmation recepit that the checkout was successful.
        prop.game.isAvailable = false;
        setShowForm(false);
        setShowReceipt(true);
    };
    
    //This API call deletes the checked out item from the server
    const processCheckIn = () => {
        fetch(`http://localhost:8080/checkedoutinventory/${prop.game.name._text}`, {
            method: "DELETE"
        })
        .then(() => {
            setRefreshFlag(previous => !previous);
        });
        prop.game.isAvailable = true;
        setShowReceipt(true);
    }

    //This will show the checkout form when the checkout icon is clicked.
    const processCheckOut = (event) => {
        event.stopPropagation();
        setShowForm(true);
    }

    //Stop propagation prevents parent onClick from running.
    return (
        <div id="game-collection" onClick={() => setShowForm(false)}>
            <img className="game-thumbnail" src={prop.game.thumbnail._text} alt={`${prop.game.name._text} thumbnail`}/>
            <p><strong>Title: </strong>{prop.game.name._text}</p>
            <p><strong>Available: </strong> {prop.game.isAvailable ? "Yes" : "No"}</p>
            {isLogIn ? <CheckOutGame isAvailable={prop.game.isAvailable} processCheckOut={processCheckOut} /> : <></>}
            {isLogIn ? <CheckInGame isAvailable={prop.game.isAvailable} processCheckIn={processCheckIn} /> : <></>}

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