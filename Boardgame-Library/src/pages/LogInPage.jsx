import { useState } from "react";
import userPass from "../assets/LogInInformation.jsx";
import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router";

const LogInPage = () => {
    const [isLogIn, setIsLogIn, username, setUsername, isAdmin, setIsAdmin] = useAuth();
    const [password, setPassword] = useState("");
    const [showLoginErrorMessage, setShowLoginErrorMessage] = useState(false);
    const navigate = useNavigate();
    
    const message = "Username and/or password not found.  Please try again.";

    const validation = (event) => {
        event.preventDefault();
        for (const user of userPass) {
            if (user.username === username) {
                if (user.password === password) {
                    setIsLogIn(true);
                    if (user.isAdmin === true) {
                        setIsAdmin(true);
                    }
                    setShowLoginErrorMessage(false);
                    navigate('/');
                } 
            } else {
                setShowLoginErrorMessage(true);
            }
        }
    }

    return(
        <div className="fill-page">
            <Header />
            <main>
                <h1 className="info-page-header">Log In</h1>
                <form className="info-page-body" onSubmit={validation}>
                    <label className="table-number-label">Enter your username: </label>
                    <input
                        type="text" 
                        minLength="4" 
                        maxLength="16" 
                        className="table-number-input-box"
                        name="username"
                        value={username} 
                        onChange={(event) => setUsername(event.target.value)} 
                        placeholder="Must be 4-16 characters"
                    />
                    <label className="table-number-label">Enter your password: </label>
                    <input
                        type="password" 
                        minLength="4" 
                        maxLength="16" 
                        className="table-number-input-box"
                        name="password"
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Must be 4-16 characters"
                    />
                    <button
                        type="submit"
                        id="submit-table-number-button"
                        className="submit-button"
                    >
                        Submit
                    </button>
                    
                </form>
                {showLoginErrorMessage ? <p className="info-page-body"><b>{message}</b></p> : ""}
            </main>
            <Footer />
        </div>
    )
}

export default LogInPage;