import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import { useState } from "react"

const ViewCheckedOutItems = () => {
    const [tableNumber, setTableNumber] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const userNameFormSubmission = (event) => {
        event.preventDefault();
        
        fetch("public/Accounts.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(firstName);
            })
    }

    return (
        <div className="fill-page">
            <Header />
            <div>
                <h1>Please enter your name below to view your checked out games.</h1>
                <form id="name-input-form" onSubmit={userNameFormSubmission}>
                    <label htmlFor="first-name">Enter your first name:</label>
                    <input type="text" id="first-name" name="first-name" placeholder="Please enter your first name" value={firstName} required />
                    <label htmlFor="last-name">Enter your last name:</label>
                    <input type="text" id="last-name" name="last-name" placeholder="Please enter your last name" required />                  
                    <button type="submit" id="submit-button">Check Items</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default ViewCheckedOutItems;