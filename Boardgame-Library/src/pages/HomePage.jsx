import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import LogInButton from "../components/LogInButton";
import ViewCheckedOutItemsButton from "../components/ViewCheckedOutItemsButton";
import ViewGameLibraryButton from "../components/ViewGameLibraryButton";
import { useAuth } from "../context/AuthContext.jsx";

const HomePage = () => {
    const [isLogIn, setIsLogIn, username, setUsername] = useAuth();

    return(
        <div className="fill-page">
            <Header />
            <h2 className="page-intro">{isLogIn ? "Welcome " + username + "!  You can now manage inventory." : "Feel free to view our game library!  Please log in as an employee to manage inventory."}</h2>
            <main id="flexbox-home" className="body-content"> 
                {isLogIn ? <ViewCheckedOutItemsButton /> : <LogInButton />}
                <ViewGameLibraryButton />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;