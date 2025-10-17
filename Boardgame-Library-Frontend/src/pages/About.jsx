import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";

const About = () => {
    return (
        <div className="fill-page">
            <Header />
            <main>
                <h1 className="info-page-header">About:</h1>
                <p className="info-page-body">
                    This web based application is designed to be an inventory management system for a convention or business, such as Pieces, that has a boardgame library in which customers can check in and check out games.
                    This application will allow customers to view the inventory and see what is and is not available.  
                    This will also allow the business to track who has their games.  
                    The inventory list is autopopulated by using the Board Game Geek API, and calling a user's collection.
                </p>    
            </main>
            <Footer />
        </div>
    )
};

export default About;