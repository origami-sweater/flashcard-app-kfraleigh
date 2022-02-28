import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api";
import FormatDeck from "./FormatDeck";
import { Link } from "react-router-dom";

function Home() {
    const [deckList, setDeckList] = useState([]);

    useEffect(() => {
        async function fetchDecks() {
            try {
                const response = await listDecks();
                setDeckList(response);
            } catch(err) {
                console.log(err.name)
            }
        }
        fetchDecks();
    }, []);

    const list = deckList.map((deck) => {
        const {id, name, description, cards} = deck;
        return FormatDeck({id, name, description, cards})
    });

    return (
        <div>
            <Link to="/decks/new" class="btn btn-secondary mb-3">
                + Create Deck
            </Link>
            {list}
        </div>
    )
}

export default Home;