import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import FormatViewCard from "./FormatViewCard";
import ViewDeckBreadcrumb from "./ViewDeckBreadcrumb";
import FormatDeckHeader from "./FormatDeckHeader";

function ViewDeck({ apiDeck, setApiDeck, apiCards, setApiCards }) {
    const { deckId } = useParams();
    const { id, name, description } = apiDeck;

    useEffect (() => {
        async function loadDeck() {
            try {
            const response = await readDeck(deckId);
            setApiDeck(response);
            setApiCards(response.cards);
            } catch(err) {
                console.log(err.name);
            };
        };
        loadDeck();
    }, [deckId]);          

    const list = apiCards.map((card) => {
        const { id, front, back, deckId } = card;
        return FormatViewCard({ id, front, back, deckId });
    });

    return (
        
        <div className="app-routes">
            <ViewDeckBreadcrumb apiDeck={apiDeck} />
            <FormatDeckHeader id={id} name={name} description={description} />
            <h5>Cards</h5>
            {list}
        </div>
      );
}

export default ViewDeck;