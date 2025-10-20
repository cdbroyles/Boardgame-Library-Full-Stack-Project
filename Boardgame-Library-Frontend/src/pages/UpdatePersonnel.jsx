import { useState } from "react";
import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import { useAuth } from "../context/AuthContext";
import userPass from "../assets/LogInInformation.jsx";

const UpdatePersonnel = () => {
    // Global auth state
    const [isLogIn, setIsLogIn, username, setUsername, isAdmin, setIsAdmin] = useAuth();

    // form selection
    const [selectedValue, setSelectedValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");

    // Add
    const [addUsername, setAddUsername] = useState("");
    const [addPassword, setAddPassword] = useState("");
    const [addIsAdmin, setAddIsAdmin] = useState(false);

    // Update (password & admin only)
    const [targetUsername, setTargetUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newIsAdmin, setNewIsAdmin] = useState(false);

    // Delete
    const [deleteUsername, setDeleteUsername] = useState("");

    const [feedbackMessage, setFeedbackMessage] = useState("");

    const editPersonnelTable = (event) => {
        event.preventDefault();
        setSubmittedValue(selectedValue);
        setFeedbackMessage("");
    }

    const handleAddPersonnel = (event) => {
        event.preventDefault();
        if (!addUsername || !addPassword) {
            setFeedbackMessage("Username and password are required to add a user.");
            return;
        }
        const exists = userPass.find(user => user.username === addUsername);
        if (exists) {
            setFeedbackMessage(`User '${addUsername}' already exists.`);
            return;
        }
        userPass.push({ username: addUsername, password: addPassword, isAdmin: addIsAdmin });
        setFeedbackMessage(`Added user '${addUsername}'.`);
        setAddUsername("");
        setAddPassword("");
        setAddIsAdmin(false);
    }

    const handleUpdatePersonnel = (event) => {
        event.preventDefault();
        if (!targetUsername) {
            setFeedbackMessage("Please provide the username whose password you want to update.");
            return;
        }
        const index = userPass.findIndex(user => user.username === targetUsername);
        if (index === -1) {
            setFeedbackMessage(`User '${targetUsername}' not found.`);
            return;
        }
        if (newPassword) userPass[index].password = newPassword;
        userPass[index].isAdmin = newIsAdmin;
        setFeedbackMessage(`Updated password/admin flag for '${targetUsername}'.`);
        setTargetUsername("");
        setNewPassword("");
        setNewIsAdmin(false);
    }

    const handleDeletePersonnel = (event) => {
        event.preventDefault();
        if (!deleteUsername) {
            setFeedbackMessage("Please provide a username to delete.");
            return;
        }
        const index = userPass.findIndex(user => user.username === deleteUsername);
        if (index === -1) {
            setFeedbackMessage(`User '${deleteUsername}' not found.`);
            return;
        }
        userPass.splice(index, 1);
        setFeedbackMessage(`Deleted user '${deleteUsername}'.`);
        setDeleteUsername("");
    }

    if (isAdmin) {
        return (
            <div className="fill-page">
                <Header />
                <main>
                    <h1 className="info-page-header">Update Personnel Page</h1>
                    <p className="info-page-body"></p>
                    <form
                        id="checked-out-items-input-form"
                        className="info-page-body"
                        onSubmit={editPersonnelTable}
                    >
                        <label className="table-number-label">
                            Please select one of the listed options:
                        </label>
                        <select value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                            <option value=""></option>
                            <option value="add">Add New Personnel</option>
                            <option value="update">Update Password</option>
                            <option value="delete">Delete Personnel</option>
                            <option value="view">View Personnel</option>
                        </select>
                        <button
                            type="submit"
                            id="submit-table-number-button"
                            className="submit-button"
                        >
                            Submit
                        </button>
                    </form>

                    {submittedValue === "add" ? (
                        <form className="info-page-body" onSubmit={handleAddPersonnel}>
                            <h2>Add New Personnel</h2>
                            <label>User Name:</label>
                            <input type="text" name="username" value={addUsername} onChange={(event) => setAddUsername(event.target.value)} /> <br />
                            <label>Password:</label>
                            <input type="password" name="password" value={addPassword} onChange={(event) => setAddPassword(event.target.value)} /> <br />
                            <label>Make Admin?</label>
                            <input type="checkbox" name="isAdmin" checked={addIsAdmin} onChange={(event) => setAddIsAdmin(event.target.checked)} /> <br />
                            <button type="submit" className="submit-button">Add Personnel</button>
                        </form>
                    ) : submittedValue === "update" ? (
                        <form className="info-page-body" onSubmit={handleUpdatePersonnel}>
                            <h2>Update Password</h2>
                            <label>Username to update:</label>
                            <input type="text" name="username" value={targetUsername} onChange={(event) => setTargetUsername(event.target.value)} /> <br />
                            <label>New Password:</label>
                            <input type="password" name="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} /> <br />
                            <label>Make Admin?</label>
                            <input type="checkbox" name="isAdmin" checked={newIsAdmin} onChange={(event) => setNewIsAdmin(event.target.checked)} /> <br />
                            <button type="submit" className="submit-button">Update Password</button>
                        </form>
                    ) : submittedValue === "delete" ? (
                        <form className="info-page-body" onSubmit={handleDeletePersonnel}>
                            <h2>Delete Personnel</h2>
                            <label>User Name:</label>
                            <input type="text" name="username" value={deleteUsername} onChange={(event) => setDeleteUsername(event.target.value)} /> <br />
                            <button type="submit" className="submit-button">Delete Personnel</button>
                        </form>
                    ) : submittedValue === "view" ? (
                        <div className="info-page-body">
                            <h2>Personnel List</h2>
                            {userPass.length === 0 ? (
                                <p>No personnel found.</p>
                            ) : (
                                <ul>
                                    {userPass.map((user, index) => (
                                        <li key={index}>{user.username} {user.isAdmin ? "(admin)" : "(user)"}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ) : null}

                    {feedbackMessage && <p className="info-page-body"><strong>{feedbackMessage}</strong></p>}
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