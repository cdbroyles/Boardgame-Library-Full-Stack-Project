import Footer from "../components/CommonFooter";
import Header from "../components/CommonHeader";
import {useState, useEffect} from "react";
import {xml2js} from 'xml-js';
import GameCard from "../components/GameCard";
import checkedOutItems from "../assets/CheckedOutItems";
import { useAuth } from "../context/AuthContext";

const GameLibrary = () => {
    const [gameCollection, setGameCollection] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);
    const [searchCollection, setSearchCollection] = useState("");
    const [isLogIn] = useAuth();
    let searchedGames = [];

    //Loads BGG database of owner "cdbroyles" and converts the xml file to a javascript object
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

        if (searchCollection.trim() !== "") {
            searchedGames = gameCollection.items.item.filter((game) =>
                game.name._text.toLowerCase().includes(searchCollection.toLowerCase())
            );
        }

        if (isSearching) {
            if (searchCollection == "") {
                setIsSearching(false);
            }
        }
    }

    return (
        <div className="fill-page">
            <Header />
            <main>
                <h1 className="library-page-text">Game Library Page</h1>
                <form
                    id="checked-out-items-input-form"
                    className="info-page-body"
                >
                    <label className="table-number-label">
                        Enter the title of a game:
                    </label>
                    <input
                        type="text"
                        className="table-number-input-box"
                        name="game-search"
                        placeholder="Enter the game title here"
                        value={searchCollection}
                        onChange={(event) => {
                            setSearchCollection(event.target.value);
                            setIsSearching(true);
                        }}
                    />
                    <button
                        type="submit"
                        id="submit-table-number-button"
                        className="submit-button"
                        onClick={() => setSearchCollection("")}
                    >
                        Clear
                    </button>
                </form>
                {isLogIn ? <p className="library-page-text"><strong>Instructions: </strong>Click the "add to cart" icon to check out an available game to a specific table.  Click the "remove from cart" icon when the game is returned.</p> : <br />}
                <div className="body-content">
                    {isLoading ? 
                        (<p>The collection content is loading.  Please wait.</p>) :
                            (isSearching ?
                                (searchedGames.length == 0 ? 
                                    <p>No results found.  Please try to search for another title.</p> :
                                    (searchedGames.map((game) => (<GameCard key={game._attributes.objectid} game={game} />)))
                                ):
                                (gameCollection.items.item.map((game) => (<GameCard key={game._attributes.objectid} game={game} />)))
                            )
                    }
                </div>    
            </main>
            <Footer />
        </div>
    )
};

export default GameLibrary;