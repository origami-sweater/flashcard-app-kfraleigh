/*The Deck screen displays all of the information about a deck.
The Deck screen has the following features:

The path to this screen should include the deckId (i.e., /decks/:deckId).
You must use the readDeck() function from src/utils/api/index.js to load the existing deck.
There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).
The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application").
The screen includes Edit, Study, Add Cards, and Delete buttons. Each button takes the user to a different destination, as follows:

| Button Clicked | Destination |
| -------------- | ---------------------------------------------------------------------------------------------- |
| Edit | Edit Deck Screen |
| Study | Study screen |
| Add Cards | Add Card screen |
| Delete | Shows a warning message before deleting the deck]( See the "Delete Card Prompt" section below) |

Each card in the deck:

Is listed on the page under the "Cards" heading.
Shows a question and the answer to the question.
Has an Edit button that takes the user to the Edit Card screen when clicked.
Has a Delete button that allows that card to be deleted.*/

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormatDeck from "../../HomePage/FormatDeck";
import { readDeck } from "../../utils/api";
import FormatCard from "./FormatCard";

function Deck({ apiDeck, setApiDeck, apiCards, setApiCards }) {
    const { deckId } = useParams();
    const { id, name, description, cards } = apiDeck;

    useEffect (() => {
        async function loadDeck() {
            try {
            const response = await readDeck(deckId);
            setApiDeck(response)
            setApiCards(response.cards)
            } catch(err) {
                console.log(err.name);
            };
        };
        loadDeck();
    }, [deckId]);          

    const list = apiCards.map((card) => {
        const { id, front, back, deckId } = card;
        return FormatCard({ id, front, back, deckId });
    });

    return (
        <div className="app-routes">
          {FormatDeck({ id, name, description, cards })}
          <h3>Cards</h3>
          {list}
        </div>
      );
}

export default Deck;