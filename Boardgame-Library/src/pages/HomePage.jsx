import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import LogInButton from "../components/LogInButton";
import ViewCheckedOutItemsButton from "../components/ViewCheckedOutItemsButton";
import ViewGameLibraryButton from "../components/ViewGameLibraryButton";
import {useState, useEffect} from "react";

const HomePage = () => {
    const [isLogIn, setIsLogIn] = useState(false);

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