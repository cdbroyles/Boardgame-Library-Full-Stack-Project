import { useEffect, useState } from "react";
import CheckInGame from "./CheckInGame";
import { useAuth } from "../context/AuthContext";

let ListOfCheckedOutItems = (prop) => {
    const [isLogIn, setIsLogIn] = useAuth();
    const [refreshFlag, setRefreshFlag] = useState(false);
    const [checkedOutItems, setCheckedOutItems] = useState([]);

    //This effect pulls the list of active table numbers and checked out items from the server
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
                setCheckedOutItems(dataGroupedByTableNumber);
            });
    }, [refreshFlag]);

    //Check in function needed b/c cannot alter a prop value within a component.
    const processCheckIn = (returnedItem) => {
        fetch(`http://localhost:8080/checkedoutinventory/${returnedItem}`, {
            method: "DELETE"
        })
        .then(() => {
            setRefreshFlag(previous => !previous);
        });
    }

    //returns a message if 'View All Tables' is clicked and there are no currently checked out items.
    if (prop.tableNumber === 'View All Tables' && checkedOutItems.length === 0) {
        return (
            <p className="checkout-list">There are currently no items checked out.</p>
        );
    }

    //returns a list of all checked out items grouped by table number.
    if (prop.tableNumber === 'View All Tables') {
        return (
            <div className="checkout-list">
                {checkedOutItems.map((table, index) => (
                    <div key={index}>
                        <p>Table Number: {table.tableNumber}</p>
                        <ul>
                            {table.games.map((game, index2) => (
                                <li key={index2}>
                                    {game}
                                    {isLogIn ? <CheckInGame processCheckIn={processCheckIn} game={game} /> : ""}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {isLogIn ? <p><strong>Instructions: </strong>Click the "remove from cart" icon when the game is returned.</p> : ""}
            </div>
        );
    } 
    else {

        //returns a list of checked out items from a specific table number.
        return (
            <div className="checkout-list">
                <p>Table Number: {prop.tableNumber}</p>
                <ul>
                    {prop.games.map((game, index) => (
                        <li key={index}>
                            {game}
                            {isLogIn ? <CheckInGame processCheckIn={processCheckIn} game={game} /> : ""}
                        </li>
                    ))}
                </ul>
                {isLogIn ? <p><strong>Instructions: </strong>Click the "remove from cart" icon when the game is returned.</p> : ""}
            </div>
        );  
    }
    
}

export default ListOfCheckedOutItems; 