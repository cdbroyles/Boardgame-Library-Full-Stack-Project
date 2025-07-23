import { useEffect, useState } from "react";
import checkedOutItems from "../assets/CheckedOutItems";
import CheckInGame from "./CheckInGame";

let ListOfCheckedOutItems = (prop) => {
    const [updateList, setUpdateList] = useState(false);

    //updateList was created to cause a rerender.  This will switch update list back to false whenever it is called so a future rerender could happen again.
    useEffect(() => {
        setUpdateList(false);
    }, [updateList]);

    //Check in function needed b/c cannot alter a prop value within a component.
    const processCheckIn = (returnedItem) => {
        let tableReturningItem = null;
        let indexOfTableReturningItem = null;

        //Handles beginning check in logic when "View All Tables" button is clicked
        if (prop.tableNumber === "View All Tables") {
            const tableReturningItemObject = checkedOutItems.find(table => table.games.includes(returnedItem));
            tableReturningItem = tableReturningItemObject.tableNumber;
            indexOfTableReturningItem = checkedOutItems.indexOf(tableReturningItemObject);
        }

        //Handles beginning check in logic when a specific table number is viewed.
        if (typeof(prop.tableNumber) === "number") {
            tableReturningItem = prop.tableNumber;
            indexOfTableReturningItem = checkedOutItems.findIndex(table => table.tableNumber === Number(tableReturningItem));
        }
        
        //common logic between the two methods.
        const indexOfReturnedItem = checkedOutItems[indexOfTableReturningItem].games.indexOf(returnedItem);
        checkedOutItems[indexOfTableReturningItem].games.splice(indexOfReturnedItem,1);
        if(checkedOutItems[indexOfTableReturningItem].games.length === 0) {
            checkedOutItems.splice(indexOfTableReturningItem, 1);
        }
        setUpdateList(true);
    }

    //returns a message if 'View All Tables' is clicked and there are no currently checked out items.
    if (prop.tableNumber === 'View All Tables' && prop.checkedOutItems.length === 0) {
        return (
            <p className="checkout-list">There are currently no items checked out.</p>
        );
    }

    //returns a list of all checked out items grouped by table number.
    if (prop.tableNumber === 'View All Tables') {
        return (
            <div className="checkout-list">
                {prop.checkedOutItems.map((table, index) => (
                    <div key={index}>
                        <p>Table Number: {table.tableNumber}</p>
                        <ul>
                            {table.games.map((game, index2) => (
                                <li key={index2}>
                                    {game}
                                    <CheckInGame processCheckIn={processCheckIn} game={game} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <p><strong>Instructions: </strong>Click the "remove from cart" icon when the game is returned.</p>
            </div>
        );
    } else {

        //returns a list of checked out items from a specific table number.
        return (
            <div className="checkout-list">
                <p>Table Number: {prop.tableNumber}</p>
                <ul>
                    {prop.games.map((game, index) => (
                        <li key={index}>
                            {game}
                            <CheckInGame processCheckIn={processCheckIn} game={game} />
                        </li>
                    ))}
                </ul>
                <p><strong>Instructions: </strong>Click the "remove from cart" icon when the game is returned.</p>
            </div>
        );  
    }
    
}

export default ListOfCheckedOutItems; 