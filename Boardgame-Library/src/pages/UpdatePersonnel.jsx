import { useState } from "react";
import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const UpdatePersonnel = () => {
    const [isLogIn, setIsLogIn, username, setUsername, isAdmin, setIsAdmin] = useAuth();
    const [selectedValue, setSelectedValue] = useState("");

    const editPersonnelTable = (event) => {
        event.preventDefault();
        setSelectedValue(event.target.value);
    }
    if (isAdmin) {
        return (
            <div className="fill-page">
                <Header />
                <main>
                    <h1 className="info-page-header">Update Personnel Page</h1>
                    <p className="info-page-body">
                        
                    </p>
                    <form
                        id="checked-out-items-input-form"
                        className="info-page-body"
                        onSubmit={editPersonnelTable}
                    >
                        <label className="table-number-label">
                            Please select one of the listed options:
                        </label>
                        <select required value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                            <option value=""></option>
                            <option value="add">Add New Personnel</option>
                            <option value="update">Update Existing Personnel</option>
                            <option value="delete">Delete Personnel</option>
                        </select>
                        <button
                            type="submit"
                            id="submit-table-number-button"
                            className="submit-button"
                        >
                            Submit
                        </button>
                    </form>
                </main>
                <Footer />
            </div>
        )
    } else {
        return (
            <div className="fill-page">
                <Header />
                <main>
                    <p className="info-page-body">You are not authorized to access this page.</p>
                </main>
                <Footer />
            </div>
        )
    }
    
}

export default UpdatePersonnel;