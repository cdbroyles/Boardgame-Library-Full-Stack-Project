let ListOfCheckedOutItems = (prop) => {
    console.log("hello");
    return(
        <>
            <p>Table number: {prop.tableNumber}</p>
            <ul>
                {prop.games.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>
        </>
    );
}

export default ListOfCheckedOutItems;