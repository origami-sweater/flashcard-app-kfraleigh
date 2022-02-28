import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import DeckForm from "../DeckForms/DeckForm";
import EditDeckBreadcrumb from "./EditDeckBreadcrumb";
import { readDeck } from "../../utils/api";


function EditDeck({ apiDeck, setApiDeck }) {
    const {deckId} = useParams();

    useEffect (() => {
        async function loadDeck() {
            try {
                if (deckId) {
                    const response = await readDeck(deckId);
                    setApiDeck(response);
                };
            } catch(err) {
                console.log(err.name);
            };
        };
        loadDeck();
    }, [deckId]);  
    
    return (
        <div>
            <EditDeckBreadcrumb apiDeck={apiDeck} />
            <h2>Create Deck</h2>
            <DeckForm apiDeck={apiDeck} />
        </div>
    );
}

export default EditDeck;