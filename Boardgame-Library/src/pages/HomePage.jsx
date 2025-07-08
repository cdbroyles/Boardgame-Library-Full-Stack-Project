import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import ReturnGame from "../components/ReturnGameButton";
import ViewAccount from "../components/ViewAccountButton";
import ViewGameLibrary from "../components/ViewGameLibraryButton";

let HomePage = () => {
    return(
        <div className="fill-page">
            <Header />
            <div id="flexbox-home" className="body-content">
                <ViewAccount />
                <ViewGameLibrary />
                <ReturnGame />              
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;