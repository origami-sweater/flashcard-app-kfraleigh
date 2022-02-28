import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import ViewDeckBreadcrumb from "./ViewDeckBreadcrumb";
import FormatDeckHeader from "./FormatDeckHeader";
import CardList from "./CardList";

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

    return (
        <div className="app-routes">
            <ViewDeckBreadcrumb apiDeck={apiDeck} />
            <FormatDeckHeader id={id} name={name} description={description} />
            <CardList apiCards={apiCards} />
        </div>
      );
}

export default ViewDeck;