import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import ReturnGameButton from "../components/ReturnGameButton";
import ViewCheckedOutItemsButton from "../components/ViewCheckedOutItemsButton";
import ViewGameLibraryButton from "../components/ViewGameLibraryButton";

let HomePage = () => {
    return(
        <div className="fill-page">
            <Header />
            <div id="flexbox-home" className="body-content">
                <ViewCheckedOutItemsButton />
                <ViewGameLibraryButton />
                <ReturnGameButton />              
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;