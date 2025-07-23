import checkedOutItems from "../assets/CheckedOutItems";
import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import { useEffect, useState } from "react";
import ListOfCheckedOutItems from "../components/ListOfCheckedOutItems";

const ViewCheckedOutItems = () => {
    const [tableNumber, setTableNumber] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [liveTableNumbers, setLiveTableNumbers] = useState([]);
    const [tableNumberInventory, setTableNumberInventory] = useState([]);

    //This defines which tables currently have at least one game checked out
    useEffect(() => {
        const activeTables = checkedOutItems.map(table => table.tableNumber);
        setLiveTableNumbers(activeTables);
    }, [tableNumberInventory, tableNumber]);

    //Gets the list of checked out items of a specific table.
    const tableNumberFormSubmission = (event) => {
        event.preventDefault();
        if (tableNumber !== 'View All Tables') {
            setTableNumberInventory(checkedOutItems.filter(table => tableNumber == table.tableNumber));
        }
        setIsSubmitted(true);
    };

    return (
        <div className="fill-page">
            <Header />
            <main>
                <h1 className="info-page-header">
                    Please enter the table number below to view the checked out games.
                </h1>
                <form
                    id="checked-out-items-input-form"
                    className="info-page-body"
                    onSubmit={tableNumberFormSubmission}
                >
                    <label className="table-number-label">
                        Enter your table number:
                    </label>
                    <input
                        type="text"
                        className="table-number-input-box"
                        name="table-number"
                        placeholder="Enter numerals only"
                        value={tableNumber}
                        onChange={(event) => {
                            setTableNumber(event.target.value);
                            setIsSubmitted(false);
                        }}
                        required
                    />
                    <button
                        type="submit"
                        id="submit-table-number-button"
                        className="submit-button"
                    >
                        View Table Number
                    </button>
                    <button
                        type="submit"
                        id="submit-all-button"
                        className="submit-button"
                        onClick={() => {setTableNumber('View All Tables')}}
                    >
                        View All
                    </button>
                </form>
                {isSubmitted && tableNumber === 'View All Tables' ? (
                    <ListOfCheckedOutItems
                        tableNumber={tableNumber}
                        checkedOutItems={checkedOutItems}
                />
                ) : isSubmitted && liveTableNumbers.includes(Number(tableNumber)) ? (
                    <ListOfCheckedOutItems
                        tableNumber={Number(tableNumber)}
                        games={tableNumberInventory[0].games}
                    />
                ) : isSubmitted && tableNumber !== 'View All Tables' && isNaN(tableNumber) ? (
                    <p className="checkout-list">Please enter a numeric value.</p>
                ) : isSubmitted ? (
                    <p className="checkout-list">Please enter an active table number.</p>
                ) : (
                    <></>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default ViewCheckedOutItems;