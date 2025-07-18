import { useEffect, useState } from "react";
import checkedOutItems from "../assets/CheckedOutItems";
import CheckInGame from "../components/CheckInGame";

let ListOfCheckedOutItems = (prop) => {
    const [updateList, setUpdateList] = useState(false);

    useEffect(() => {
        if (updateList) {
            setTimeout(() => {
                setUpdateList(false);
            }, 50);
        }
    }, [updateList]);

    //Checkin function needed b/c cannot alternate a prop value within a component.
    const processCheckIn = (returnedItem) => {
        let tableReturningItem = null;
        let indexOfTableReturningItem = null;

        //Handles beginning checkin logic when "View All Tables" button is clicked
        if (prop.tableNumber === "View All Tables") {
            const tableReturningItemObject = checkedOutItems.find(table => table.games.includes(returnedItem));
            tableReturningItem = tableReturningItemObject.tableNumber;
            indexOfTableReturningItem = checkedOutItems.indexOf(tableReturningItemObject);
        }

        //Handles beginning checkin logic when a specific table number is viewed.
        if (typeof(prop.tableNumber) === "number") {
            tableReturningItem = prop.tableNumber;
            indexOfTableReturningItem = checkedOutItems.findIndex(table => table.tableNumber === Number(tableReturningItem));
        }
        
        //common logic between the two methods.
        const indexOfReturnedItem = checkedOutItems[indexOfTableReturningItem].games.indexOf(returnedItem);
        checkedOutItems[indexOfTableReturningItem].games.splice(indexOfReturnedItem,1);
        setUpdateList(true);
    }

    //returns a list of checked out items by table number with a checkin option.
    if (prop.tableNumber === 'View All Tables') {
        return (
            <>
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
            </>
        );
    } else {

        //returns a list of checked out items from a specific table number with a checkin option.
        return (
            <>
                <p>Table Number: {prop.tableNumber}</p>
                <ul>
                    {prop.games.map((game, index) => (
                        <li key={index}>
                            {game}
                            <CheckInGame processCheckIn={processCheckIn} game={game} />
                        </li>
                    ))}
                </ul>
            </>
        );  
    }
    
}

export default ListOfCheckedOutItems; 