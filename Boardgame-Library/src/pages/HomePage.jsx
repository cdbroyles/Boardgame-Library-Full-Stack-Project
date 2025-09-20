import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import LogInButton from "../components/LogInButton";
import ViewCheckedOutItemsButton from "../components/ViewCheckedOutItemsButton";
import ViewGameLibraryButton from "../components/ViewGameLibraryButton";
import { useAuth } from "../context/AuthContext.jsx";

const HomePage = () => {
    const [isLogIn, setIsLogIn] = useAuth();

    return(
        <div className="fill-page">
            <Header />
            <main id="flexbox-home" className="body-content">
                {isLogIn ? <ViewCheckedOutItemsButton /> : <LogInButton />}
                <ViewGameLibraryButton />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;