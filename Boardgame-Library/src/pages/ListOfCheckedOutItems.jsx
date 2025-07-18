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

        // if (prop.tableNumber === "View All Tables") {
        //     const tableReturningItem = checkedOutItems.find(table => table.games.includes(returnedItem));
        //     // const indexOfTableReturningItem = checkedOutItems.indexOf(tableReturningItem);
        //     // const returnedItem = tableReturningItem.games.find(game => game === prop.game.name._text);
        //     // const indexOfReturnedItem = tableReturningItem.games.indexOf(returnedItem);
        //     // checkedOutItems[indexOfTableReturningItem].games.splice(indexOfReturnedItem,1);
        // }

        if (typeof(prop.tableNumber) === "number") {
            tableReturningItem = prop.tableNumber
        }
        
        const indexOfTableReturningItem = checkedOutItems.findIndex(table => table.tableNumber === Number(tableReturningItem));
        const indexOfReturnedItem = checkedOutItems[indexOfTableReturningItem].games.indexOf(returnedItem);
        checkedOutItems[indexOfTableReturningItem].games.splice(indexOfReturnedItem,1);
        setUpdateList(true);
    }

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