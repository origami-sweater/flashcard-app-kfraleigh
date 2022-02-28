import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CardForm from "../CardForms/CardForm";
import EditCardBreadcrumb from "./EditCardBreadcrumb";
import { readDeck, readCard } from "../../utils/api";


function EditCard({ apiDeck, setApiDeck, formFront, formBack, setFormFront, setFormBack }) {
    const { deckId, cardId } = useParams();
    const [apiCard, setApiCard] = useState({});

    useEffect (() => {
        async function loadCard() {
            try {
                const response = await readDeck(deckId);
                const thisCard = await readCard(cardId);
                setApiDeck(response);
                setApiCard(thisCard);
                setFormFront(thisCard.front);
                setFormBack(thisCard.back);
            } catch(err) {
                console.log(err.name);
            };
        };
        loadCard();
    }, [deckId]);  
    
    return (
        <div>
            <EditCardBreadcrumb apiDeck={apiDeck} apiCard={apiCard} />
            <h2>Edit Card</h2>
            <CardForm 
                apiDeck={apiDeck}
                apiCard={apiCard}
                formFront={formFront}
                setFormFront={setFormFront}
                formBack={formBack}
                setFormBack={setFormBack} 
            />
        </div>
    );
}

export default EditCard;