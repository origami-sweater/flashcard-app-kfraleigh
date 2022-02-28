/*The Study screen is displayed at /decks/:deckId/study.
The Study screen has the following features:

The path to this screen should include the deckId (i.e., /decks/:deckId/study).
You must use the readDeck() function from src/utils/api/index.js to load the deck that is being studied.
There is a breadcrumb navigation bar with links to home /, followed by the name of the deck being studied, and finally the text Study (e.g., Home/Rendering In React/Study).
The deck title (i.e., "Study: Rendering in React" ) is shown on the screen.
Cards are shown one at a time, front-side first.
A button at the bottom of each card "flips" it to the other side.
After flipping the card, the screen shows a Next button (see the Next button section below) to continue to the next card.
After the final card in the deck has been shown, a message (see the Restart prompt section below) is shown offering the user the opportunity to restart the deck.
If the user does not restart the deck, they should return to the home screen.
Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck.*/
import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom";
import FormatStudyCard from "./FormatStudyCard";
import StudyBreadcrumb from "./StudyBreadcrumb";
import RestartPrompt from "./RestartPrompt";
import NotEnoughCards from "./NotEnoughCards";

function Study({ apiDeck, setApiDeck, apiCards, setApiCards, flipped, setFlipped }) {
    const [cardId, setCardId] = useState(0);
    const { deckId } = useParams();
    const { name } = apiDeck;

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

    return (
        <div>
            <StudyBreadcrumb apiDeck={apiDeck} />
            <h2>Studying: {name}</h2>
            <NotEnoughCards apiCards={apiCards} apiDeck={apiDeck}/>
            <FormatStudyCard 
                apiCards={apiCards} 
                flipped={flipped} 
                setFlipped={setFlipped} 
                cardId={cardId} 
                setCardId={setCardId}
            />
            <RestartPrompt apiCards={apiCards} cardId={cardId} setCardId={setCardId} />
        </div>
    )
}

export default Study;