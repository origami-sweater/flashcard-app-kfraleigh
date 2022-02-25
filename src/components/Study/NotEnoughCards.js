/*Studying a Deck with two or fewer cards should display a "Not enough cards" message and a button to add cards to the deck.
Clicking the Add Cards button should take the user to the Add Card screen. */
import React from "react";
import { Link } from "react-router-dom";

function NotEnoughCards({ apiCards, apiDeck }) {
    if (apiCards.length < 3) {
        return (
            <div>
                <h4>Not Enough Cards:</h4>
                <p>{`You need at least 3 cards to study. There are ${apiCards.length} in this deck.`}</p>
                <Link to={`/decks/${apiDeck.id}/cards/new`} class="btn btn-primary">+Add Cards</Link>
            </div>
        );
    } else {
        return null;
    };
}

export default NotEnoughCards;