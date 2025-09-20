import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import { useAuth } from "../context/AuthContext.jsx";

const LogInPage = () => {
    const [isLogIn, setIsLogIn] = useAuth();
    
    return(
        <div className="fill-page">
            <Header />
            <main id="flexbox-home" className="body-content">
                
            </main>
            <Footer />
        </div>
    )
}

export default LogInPage;