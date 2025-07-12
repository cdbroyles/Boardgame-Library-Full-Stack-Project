let ListOfCheckedOutItems = (prop) => {
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
                        <li key={index}>{game}</li>
                    ))}
                </ul>
            </>
        );  
    }
    
}

export default ListOfCheckedOutItems;