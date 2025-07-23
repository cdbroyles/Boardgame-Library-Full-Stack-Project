import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import ViewCheckedOutItemsButton from "../components/ViewCheckedOutItemsButton";
import ViewGameLibraryButton from "../components/ViewGameLibraryButton";

const HomePage = () => {
    return(
        <div className="fill-page">
            <Header />
            <main id="flexbox-home" className="body-content">
                <ViewCheckedOutItemsButton />
                <ViewGameLibraryButton />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;