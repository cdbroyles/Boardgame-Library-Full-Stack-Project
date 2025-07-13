import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import {useState, useEffect} from "react";
import {xml2js} from 'xml-js';
import GameCard from "../components/GameCard";
import ShoppingCartBar from "../components/ShoppingCartBar";
import checkedOutItems from "../assets/CheckedOutItems";

const GameLibrary = () => {
    const [gameCollection, setGameCollection] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://boardgamegeek.com/xmlapi2/collection?username=cdbroyles&own=1&excludesubtype=boardgameexpansion")
            .then(response => response.text())
            .then(xmlString => {
                const javaScriptObject = xml2js(xmlString, {compact: true});
            setGameCollection(javaScriptObject);
            setIsLoading(false);
            })
        }, []
    );

    if (!isLoading) {
        //Makes an array of titles that are currently checked out.
        let unavailableGameTitles = [];
        for (let table of checkedOutItems) {
            for (let title of table.games) {
                unavailableGameTitles.push(title);
            } 
        }

        //Makes an array of all available titles, regardless if they are or are not checked out.
        let allGameTitles = [];
        for (let game of gameCollection.items.item) {
            let title = game.name._text
            allGameTitles.push(title);
        }

        //Sets Available status or not available status for games.
        for (let game of gameCollection.items.item) {
            game.isAvailable = true;
            for (let unavailableTitle of unavailableGameTitles) {
                if (unavailableTitle === game.name._text) {
                    game.isAvailable = false;
                }
            }
        }
        // console.log(gameCollection)
    }

    return (
        <div className="fill-page">
            <Header />
            <h1 className="library-page-header">Game Library Page</h1>
            <div className="body-content">
                {isLoading ? 
                    (<p>The collection content is loading.  Please wait.</p>) :
                    (gameCollection.items.item.map((game) => (
                        <GameCard key={game._attributes.objectid} game={game} />
                    ))
                )}
            </div>
            <ShoppingCartBar />
            <Footer />
        </div>
    )
};

export default GameLibrary;