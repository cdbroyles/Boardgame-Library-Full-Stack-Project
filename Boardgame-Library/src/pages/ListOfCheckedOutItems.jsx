import checkedOutItems from "../assets/CheckedOutItems";
import CheckInGame from "../components/CheckInGame";

let ListOfCheckedOutItems = (prop) => {
    //Checkin function needed b/c cannot alternate a prop value within a component.
    const processCheckIn = () => {
        console.log(checkedOutItems);
        console.log("checkedOutItems = " + checkedOutItems);
        const tableReturningItem = prop.tableNumber;
        console.log("tableReturningItem = " + tableReturningItem);
        const indexOfTableReturningItem = checkedOutItems.findIndex(table => table.tableNumber === Number(tableReturningItem));
        console.log("indexOfTableReturningItem = " + indexOfTableReturningItem);
        console.log("checkedOutItems[indexOfTableReturningItem].games = " + checkedOutItems[indexOfTableReturningItem].games);
        const returnedItem = checkedOutItems[indexOfTableReturningItem].games.find(game => game === prop.games );
        console.log("returnedItem = " + returnedItem);
        const indexOfReturnedItem = tableReturningItem.games.indexOf(returnedItem);
        checkedOutItems[indexOfTableReturningItem].games.splice(indexOfReturnedItem,1);
        // setShowReceipt(true);
    }

    if (prop.tableNumber === 'View All Tables') {
        return (
            <>
                {prop.checkedOutItems.map((table, index) => (
                    <div key={index}>
                        <p>Table Number: {table.tableNumber}</p>
                        <ul>
                            {table.games.map((game, index2) => (
                                <li key={index2}>{game}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </>
        );
    } else {
        return(
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