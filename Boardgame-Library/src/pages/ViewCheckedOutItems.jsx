import checkedOutItems from "../assets/CheckedOutItems";
import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import { useEffect, useState } from "react";
import ListOfCheckedOutItems from "./ListOfCheckedOutItems";

const ViewCheckedOutItems = () => {
    const [tableNumber, setTableNumber] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [liveTableNumbers, setLiveTableNumbers] = useState([]);
    const [tableNumberInventory, setTableNumberInventory] = useState([]);

 //This defines which tables currently has at least one game checked out
    useEffect(() => {
        const activeTables = checkedOutItems.map(table => table.tableNumber);
        setLiveTableNumbers(activeTables);
    }, []);

    const tableNumberFormSubmission = (event) => {
        event.preventDefault();
        if (tableNumber === 'View All Tables') {
            console.log('view all worked!')
        } else {
            setTableNumberInventory(checkedOutItems.filter(table => tableNumber == table.tableNumber));
        }
        setIsSubmitted(true);
    };

    return (
        <div className="fill-page">
            <Header />
            <div>
                <h1>
                    Please enter your name below to view your checked out games.
                </h1>
                <form
                    id="checked-out-items-input-form"
                    onSubmit={tableNumberFormSubmission}
                >
                    <label htmlFor="table-number">
                        Enter your table number:
                    </label>
                    <input
                        type="text"
                        id="table-number"
                        name="table-number"
                        placeholder="Please enter the table number"
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
                        tableNumber={tableNumber}
                        games={tableNumberInventory[0].games}
                    />
                ) : isSubmitted ? (
                    <p>Please enter an active table number.</p>
                ) : (
                    <p></p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ViewCheckedOutItems;