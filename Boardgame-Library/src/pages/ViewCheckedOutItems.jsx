import checkedOutItems from "../assets/CheckedOutItems";
import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import { useEffect, useState } from "react";
import ListOfCheckedOutItems from "./ListOfCheckedOutItems";
import { Link } from "react-router-dom";

const ViewCheckedOutItems = () => {
    const [tableNumber, setTableNumber] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [liveTableNumbers, setLiveTableNumbers] = useState([]);

 //This defines which tables currently has at least one game checked out
    useEffect(() => {
        const activeTables = checkedOutItems.map(table => table.tableNumber);
        setLiveTableNumbers(activeTables);
    }, []);

    console.log(liveTableNumbers[1]);
    console.log(typeof(liveTableNumbers[1]));
    // let activeTables = [];
    // for (let table of checkedOutItems) {
    //     // console.log("active tables = " + activeTables);
    //     // console.log(table.tableNumber);
    //     activeTables.push(table.tableNumber);
    //     setLiveTableNumbers(activeTables);
    //     console.log(liveTableNumbers.includes(2));
    //     console.log(liveTableNumbers.includes(8));
    // }

    const tableNumberFormSubmission = (event) => {
        event.preventDefault();

        // console.log(checkedOutItems.filter(table => tableNumber == table.tableNumber));
        // let activeTable = checkedOutItems.filter(table => tableNumber == table.tableNumber);
        // console.log(typeof(activeTable));
        // console.log(activeTable[0].games);
        // console.log(checkedOutItems[tableNumber - 1].games);
        // console.log(tableNumber);
        setIsSubmitted(true);
    };

    console.log("table number input:" + tableNumber);
    console.log("type of tableNumber: " + typeof(tableNumber));
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
                    >
                        View All
                    </button>
                </form>
                {isSubmitted && liveTableNumbers.includes(Number(tableNumber)) ? (
                    <ListOfCheckedOutItems
                        tableNumber={tableNumber}
                        games={checkedOutItems[indexOf(tableNumber)].games}
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